let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})
changeColor.onclick = function(element) {
  let color = element.target.value

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // chrome.tabs.executeScript(tabs[0].id, {
    //   code: scripty
    // })
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'scripty.js'
    })
  })
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
