console.log(
  document.getElementsByClassName('playbackTimeline__progressWrapper')[0]
    .attributes[3].nodeValue,
  document.getElementsByClassName(
    'playbackSoundBadge__titleLink sc-truncate'
  )[0].attributes[2].nodeValue,
  document.getElementsByClassName(
    'playbackSoundBadge__titleLink sc-truncate'
  )[0].attributes[0].nodeValue
)

chrome.storage.sync.set(
  {
    time_in_seconds: document.getElementsByClassName(
      'playbackTimeline__progressWrapper'
    )[0].attributes[3].nodeValue
  },
  function() {
    console.log(
      `The timestamp occured at ${
        document.getElementsByClassName('playbackTimeline__progressWrapper')[0]
          .attributes[3].nodeValue
      } seconds`
    )
  }
)

chrome.storage.sync.set(
  {
    track_title: document.getElementsByClassName(
      'playbackSoundBadge__titleLink sc-truncate'
    )[0].attributes[2].nodeValue
  },
  function() {
    console.log(
      `The title of the track is: ${
        document.getElementsByClassName(
          'playbackSoundBadge__titleLink sc-truncate'
        )[0].attributes[2].nodeValue
      }`
    )
  }
)

chrome.storage.sync.set(
  {
    url: document.getElementsByClassName(
      'playbackSoundBadge__titleLink sc-truncate'
    )[0].attributes[0].nodeValue
  },
  function() {
    console.log(
      `The url is:  soundcloud.com/${
        document.getElementsByClassName(
          'playbackSoundBadge__titleLink sc-truncate'
        )[0].attributes[0].nodeValue
      }#t=0:0${
        document.getElementsByClassName('playbackTimeline__progressWrapper')[0]
          .attributes[3].nodeValue
      }`
    )
  }
)

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

// chrome.storage.local.set({ key: 1 }, function() {
//   console.log('Value is set to ' + 1)
// })
