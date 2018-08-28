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
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']
function constructOptions() {
  chrome.storage.sync.get(['track_title', 'url', 'time_in_seconds'], function(
    data
  ) {
    console.log(data)
    let title = document.createElement('p')
    let timestamp = document.createElement('p')
    let url = document.createElement('p')
    title.innerHTML = data.track_title
    timestamp.innerHTML = data.time_in_seconds
    url.innerHTML = data.url
    page.appendChild(title)
    page.appendChild(timestamp)
    page.appendChild(url)
  })
}
constructOptions()
