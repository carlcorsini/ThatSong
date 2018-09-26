let changeColor = document.getElementById('changeColor')

let form = document.getElementById('login-form')
let submit = document.getElementById('submit-button')
let notes = document.getElementById('song-notes')
let signup = document.getElementById('no-account')

// chrome.storage.sync.set({
//   isLoggedIn: false
// })

chrome.storage.sync.get('isLoggedIn', function(data) {
  if (data.isLoggedIn) {
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
    signup.style.display = 'none'
  } else {
    changeColor.style.display = 'none'
    notes.style.display = 'none'
  }
})

changeColor.onclick = function(element) {
  chrome.storage.sync.set({ songNotes: notes.value || '' }, function(data) {})
  notes.value = ''
  changeColor.innerHTML = ':)'

  changeColor.style.backgroundColor = 'rgb(36, 255, 58)'
  setTimeout(() => {
    changeColor.innerHTML = 'this track!'
    changeColor.style.backgroundColor = '#ff7700'
  }, 250)
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'scripty.js'
    })
  })
}

const loginUser = async () => {
  let username = document.getElementById('username-input').value
  let password = document.getElementById('password-input').value
  let response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  let responseJSON = await response.json()
  if (await responseJSON.isLoggedIn) {
    chrome.storage.sync.set({
      token: await responseJSON.token,
      isLoggedIn: true,
      username: await responseJSON.username,
      user_id: await responseJSON.id
    })
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
    signup.style.display = 'none'
    changeColor.style.display = 'unset'
    notes.style.display = 'unset'
  }
}

submit.onclick = function(element) {
  loginUser()
}
