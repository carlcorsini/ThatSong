let page = document.getElementById('recent-div')
let table = document.getElementById('song-table')

//construct most recent bookmarked timestamp

function constructRecent() {
  //grab data from chrome storage sync
  chrome.storage.sync.get(['title', 'url', 'timestamp'], function(data) {
    //create necessary html elements
    let title = document.createElement('p')
    let timestamp = document.createElement('p')
    let url = document.createElement('a')
    //append data from storage to elements
    title.innerHTML = data.title
    timestamp.innerHTML = data.timestamp
    url.innerHTML = `https://soundcloud.com${data.url}#t=${data.timestamp}`
    url.href = `https://soundcloud.com${data.url}#t=${data.timestamp}`
    url.target = '_blank'
    //append elements to page
    page.appendChild(title)
    page.appendChild(timestamp)
    page.appendChild(url)
  })
}

//construct table for list of bookmarks

const constructTable = async () => {
  // fetch bookmarks from API
  let response = await fetch(`https://that-song-back-end.herokuapp.com/songs`)
  let responseJSON = await response.json()
  //map over response and create list
  responseJSON.forEach(a => {
    a.timestamp === '0:00' ? (a.timestamp = '00:00') : a.timestamp
    //create necessary html elements
    let list = document.createElement('tr')
    let timestamp = document.createElement('td')
    let title = document.createElement('td')
    let url = document.createElement('td')
    let username = document.createElement('td')

    //append data from storage to elements
    timestamp.innerHTML = a.timestamp
    title.innerHTML = a.title
    url.innerHTML = `https://soundcloud.com${a.url}#t=${a.timestamp}`

    username.innerHTML = a.username
    table.appendChild(list)
    list.appendChild(title)
    list.appendChild(timestamp)
    list.appendChild(url)
    list.appendChild(username)
    list.classList.add('list-item')
    list.addEventListener('click', () => {
      window.location.href = `https://soundcloud.com${a.url}#t=${a.timestamp}`
    })
  })
}

constructRecent()
constructTable()

<<<<<<< HEAD
let page2 = document.getElementById('button-div')

const kButtonColors = [
  { name: 'mobile', color: 'black' },
  { name: 'desktop', color: '#ff7700' }
]
function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button')
    button.style.backgroundColor = item.color
    button.addEventListener('click', function() {
      chrome.storage.sync.set({ scrape_type: item.name }, function() {
        console.log('ur scraping ' + item.name)
      })
    })
    page2.appendChild(button)
  }
}
constructOptions(kButtonColors)
=======
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
>>>>>>> a111a7256969521029f88f35c0acce085dfeadab
