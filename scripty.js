// console.log(
//   document.getElementsByClassName('playbackTimeline__progressWrapper')[0]
//     .attributes[3].nodeValue,
//   document.getElementsByClassName(
//     'playbackSoundBadge__titleLink sc-truncate'
//   )[0].attributes[2].nodeValue,
//   document.getElementsByClassName(
//     'playbackSoundBadge__titleLink sc-truncate'
//   )[0].attributes[0].nodeValue
// )
//
// console.log(document.getElementsByTagName('p'))

//
// obj.timestamp = document.getElementsByClassName(
//   'playbackTimeline__progressWrapper'
// )[0].attributes[3].nodeValue
//
// obj.title = document.getElementsByClassName(
//   'playbackSoundBadge__titleLink sc-truncate'
// )[0].attributes[2].nodeValue
//
// obj.url = document.getElementsByClassName(
//   'playbackSoundBadge__titleLink sc-truncate'
// )[0].attributes[0].nodeValue

chrome.storage.local.set({ key: 1 }, function() {
  console.log('Value is set to ' + 1)
})
