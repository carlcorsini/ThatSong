// let page = document.getElementById('buttonDiv')
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button')
//     button.style.backgroundColor = item
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({ color: item }, function() {
//         console.log('color is ' + item)
//       })
//     })
//     page.appendChild(button)
//   }
// }
// constructOptions(kButtonColors)

let page = document.getElementById('buttonDiv')
let table = document.getElementById('song-table')
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
function constructOptions() {
  chrome.storage.sync.get(['title', 'url', 'timestamp'], function(data) {
    console.log(data)
    let title = document.createElement('p')
    let timestamp = document.createElement('p')
    let url = document.createElement('a')
    title.innerHTML = data.title
    timestamp.innerHTML = data.timestamp
    url.innerHTML = `https://soundcloud.com${data.url}#t=${data.timestamp}`
    url.href = `https://soundcloud.com${data.url}#t=${data.timestamp}`
    page.appendChild(title)
    page.appendChild(timestamp)
    page.appendChild(url)
  })
}

const constructTable = async () => {
  let response = await fetch(`http://localhost:3000/songs`)
  let responseJSON = await response.json()
  // responseJSON.map()
  // console.log(responseJSON)
  responseJSON.forEach(a => {
    console.log(a)
  })
}

constructOptions()
constructTable()
