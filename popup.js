let changeColor = document.getElementById('changeColor')
let alert = document.getElementById('alert')
let form = document.getElementById('login-form')
let submit = document.getElementById('submit-button')

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})
changeColor.onclick = function(element) {
  let color = element.target.value

  changeColor.innerHTML = ':)'
  changeColor.style.backgroundColor = 'rgb(36, 255, 58)'
  setTimeout(() => {
    changeColor.innerHTML = ''
    changeColor.style.backgroundColor = '#ff7700'
  }, 1500)
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // chrome.tabs.executeScript(tabs[0].id, {
    //   code: scripty
    // })
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
      username: await responseJSON.username
    })
    document.getElementById('username-input').style.display = 'none'
    document.getElementById('password-input').style.display = 'none'
    submit.style.display = 'none'
  }
}

submit.onclick = function(element) {
  loginUser()
}

// code: 'console.log(document.getElementsByClassName("playbackTimeline__progressWrapper")[0].attributes[3].nodeValue, document.getElementsByClassName("playbackSoundBadge__titleLink sc-truncate")[0].attributes[2].nodeValue, document.getElementsByClassName("playbackSoundBadge__titleLink sc-truncate")[0].attributes[0].nodeValue);'

// let timestamp = document.getElementsByClassName(
//   'playbackTimeline__progressWrapper'
// )[0].attributes[3].nodeValue
//
// let title = document.getElementsByClassName(
//   'playbackSoundBadge__titleLink sc-truncate'
// )[0].attributes[2].nodeValue
//
// let url = document.getElementsByClassName(
//   'playbackSoundBadge__titleLink sc-truncate'
// )[0].attributes[0].nodeValue
