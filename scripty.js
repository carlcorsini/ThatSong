// chrome.storage.sync.get('scrape_type', function(data) {
// if (data.scrape_type == 'mobile') {
//   console.log(data.scrape_type)
//
//   chrome.storage.sync.set(
//     {
//       timestamp:
//         document.getElementsByClassName('timeIndicator__current')[0]
//           .innerHTML == '0.00'
//           ? '0:00'
//           : document.getElementsByClassName('timeIndicator__current')[0]
//               .innerHTML
//     },
//     function() {
//       console.log(
//         `Timestamp: ${
//           document.getElementsByClassName('timeIndicator__current')[0]
//             .innerHTML == '0.00'
//             ? '0:00'
//             : document.getElementsByClassName('timeIndicator__current')[0]
//                 .innerHTML
//         }`
//       )
//     }
//   )
//
//   chrome.storage.sync.set(
//     {
//       title: document
//         .getElementsByClassName('sound__info')[0]
//         .innerText.split('\n')[0]
//     },
//     function() {
//       console.log(
//         `Title: ${
//           document
//             .getElementsByClassName('sound__info')[0]
//             .innerText.split('\n')[0]
//         }`
//       )
//     }
//   )
//
//   chrome.storage.sync.set(
//     {
//       artist: document
//         .getElementsByClassName('sound__info')[0]
//         .innerText.split('\n')[1]
//     },
//     function() {
//       console.log(
//         `Artist: ${
//           document
//             .getElementsByClassName('sound__info')[0]
//             .innerText.split('\n')[1]
//         }`
//       )
//     }
//   )
//
//   chrome.storage.sync.set(
//     {
//       url: document.getElementsByClassName('sound__info')[0].baseURI
//     },
//     function() {
//       console.log(
//         `URL: ${document.getElementsByClassName('sound__info')[0].baseURI}`
//       )
//     }
//   )
//
//   chrome.storage.sync.get(
//     ['user_id', 'songNotes', 'token', 'timestamp', 'title', 'artist', 'url'],
//     function(data) {
//       fetch(`https://that-song-back-end.herokuapp.com/songs`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: data.token
//         },
//         body: JSON.stringify({
//           timestamp: data.timestamp,
//           title: data.title,
//           artist: data.artist,
//           url: data.url,
//           notes: data.songNotes,
//           user_id: data.user_id
//         })
//       })
//     }
//   )
// } else if (data.scrape_type == 'desktop') {
chrome.storage.sync.set(
  {
    timestamp: document
      .getElementsByClassName('playbackTimeline__timePassed')[0]
      .outerText.split('seconds')[1],
  },
  function() {
    console.log(
      `Timestamp: ${
        document
          .getElementsByClassName('playbackTimeline__timePassed')[0]
          .outerText.split('seconds')[1]
      }`
    )
  }
)

chrome.storage.sync.set(
  {
    title: document.getElementsByClassName(
      'playbackSoundBadge__titleLink sc-truncate'
    )[0].attributes[2].nodeValue,
  },
  function() {
    console.log(
      `Title: ${
        document.getElementsByClassName(
          'playbackSoundBadge__titleLink sc-truncate'
        )[0].attributes[2].nodeValue
      }`
    )
  }
)

chrome.storage.sync.set(
  {
    artist: document.getElementsByClassName('playbackSoundBadge__lightLink')[0]
      .innerText,
  },
  function() {
    console.log(
      `Artist: ${
        document.getElementsByClassName('playbackSoundBadge__lightLink')[0]
          .innerText
      }`
    )
  }
)

chrome.storage.sync.set(
  {
    url: document.getElementsByClassName(
      'playbackSoundBadge__titleLink sc-truncate'
    )[0].attributes[0].nodeValue,
  },
  function() {
    console.log(
      `URL: soundcloud.com${
        document.getElementsByClassName(
          'playbackSoundBadge__titleLink sc-truncate'
        )[0].attributes[0].nodeValue
      }#t=${
        document
          .getElementsByClassName('playbackTimeline__timePassed')[0]
          .outerText.split('seconds')[1]
      }`
    )
    console.log('Thanks for using ThatSong! :)')
  }
)

chrome.storage.sync.get(['user_id', 'songNotes', 'token'], function(data) {
  fetch(`https://that-song-back-end.herokuapp.com/songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: data.token,
    },
    body: JSON.stringify({
      timestamp: document
        .getElementsByClassName('playbackTimeline__timePassed')[0]
        .outerText.split('seconds')[1],
      title: document.getElementsByClassName(
        'playbackSoundBadge__titleLink sc-truncate'
      )[0].attributes[2].nodeValue,
      artist: document.getElementsByClassName(
        'playbackSoundBadge__lightLink'
      )[0].innerText,
      url: document.getElementsByClassName(
        'playbackSoundBadge__titleLink sc-truncate'
      )[0].attributes[0].nodeValue,
      notes: data.songNotes,
      user_id: data.user_id,
    }),
  })
})
// }
// })
