console.log(
  document.getElementsByClassName('playbackSoundBadge__lightLink')[0].innerText
)

{
  /* <a href="/golddiggerrecs" class="playbackSoundBadge__lightLink sc-link-light sc-truncate" title="GOLD DiGGER">GOLD DiGGER</a> */
}

chrome.storage.sync.set(
  {
    timestamp: document
      .getElementsByClassName('playbackTimeline__timePassed')[0]
      .outerText.split('seconds')[1]
  },
  function() {
    console.log(
      `The timestamp occured at ${
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
    artist: document.getElementsByClassName('playbackSoundBadge__lightLink')[0]
      .innerText
  },
  function() {
    console.log(
      `The artist is ${
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
    )[0].attributes[0].nodeValue
  },
  function() {
    console.log(
      `The url is:  soundcloud.com${
        document.getElementsByClassName(
          'playbackSoundBadge__titleLink sc-truncate'
        )[0].attributes[0].nodeValue
      }#t=${
        document
          .getElementsByClassName('playbackTimeline__timePassed')[0]
          .outerText.split('seconds')[1]
      }`
    )
  }
)
chrome.storage.sync.get(['user_id', 'songNotes'], function(data) {
  fetch(`http://localhost:3000/songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
      user_id: data.user_id
    })
  })
})
