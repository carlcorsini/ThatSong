let thatSong = document.getElementById('thatSong')

let form = document.getElementById('login-form')
let submit = document.getElementById('submit-button')
let notes = document.getElementById('song-notes')
let signup = document.getElementById('no-account')

// chrome.storage.sync.set({
//   isLoggedIn: false,
// })

const token = async data => {
  if (!data.token) {
    return false
  }
  let response = await fetch(
    'https://that-song-back-end.herokuapp.com/users/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: data.token,
      },
    }
  )
  let responseJSON = await response.json()
  if (responseJSON.message !== 'token valid') {
    console.log('hey')
    chrome.storage.sync.remove(['isLoggenIn', 'token'])
    return false
  }
  return true
}

chrome.storage.sync.get(['isLoggedIn', 'token'], function(data) {
  const isValid = token(data)
  if (data.isLoggedIn && isValid) {
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
    signup.style.display = 'none'
  } else {
    document.getElementById('username-input').style.display = 'unset'
    document.getElementById('password-input').style.display = 'unset'
    submit.style.display = 'unset'
    signup.style.display = 'unset'
    thatSong.style.display = 'none'
    notes.style.display = 'none'
  }
})

thatSong.onclick = function(element) {
  chrome.storage.sync.set({ songNotes: notes.value || '' }, function(data) {})
  notes.value = ''
  thatSong.innerHTML = ':)'
  thatSong.style.backgroundColor = 'rgb(36, 255, 58)'
  setTimeout(() => {
    thatSong.innerHTML = 'ThatSong'
    thatSong.style.backgroundColor = '#ff7700'
  }, 250)
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'scripty.js',
    })
  })
}

const loginUser = async () => {
  let username = document.getElementById('username-input').value
  let password = document.getElementById('password-input').value
  let response = await fetch(
    'https://that-song-back-end.herokuapp.com/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }
  )
  let responseJSON = await response.json()
  if (await responseJSON.isLoggedIn) {
    chrome.storage.sync.set({
      token: await responseJSON.token,
      isLoggedIn: true,
      username: await responseJSON.username,
      user_id: await responseJSON.id,
    })
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
    signup.style.display = 'none'
    thatSong.style.display = 'unset'
    notes.style.display = 'unset'
  }
}

submit.onclick = function(element) {
  loginUser()
}
