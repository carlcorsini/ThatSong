let changeColor = document.getElementById('changeColor')

let form = document.getElementById('login-form')
let submit = document.getElementById('submit-button')
let notes = document.getElementById('song-notes')

chrome.storage.sync.get('isLoggedIn', function(data) {
  if (data.isLoggedIn) {
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
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
      isLoggedIn: true,
      username: await responseJSON.username,
      user_id: await responseJSON.id
    })
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
  }
}

submit.onclick = function(element) {
  loginUser()
}
