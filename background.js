chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#ff7700' }, function() {
    console.log('The color is orange.')
  })
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'soundcloud.com'
            }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})
