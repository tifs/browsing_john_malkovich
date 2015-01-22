var toggle = false;
var malkovichTime;

chrome.browserAction.onClicked.addListener(function(activeTab) {
  // chrome.browserAction.setIcon(object details, function callback)
  toggle = !toggle;
    if(toggle){
      chrome.browserAction.setIcon({path: "bjm_logo_19_off.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
      chrome.tabs.executeScript(null, {file: "malkovich.js"});
      malkovichTime = setInterval(function() {
        chrome.tabs.executeScript(null, {
          code: "location.reload()"
        });
      }, 5000);
      // clearInterval(malkovichTime);
      // chrome.tabs.reload();
      // = setTimeout(function(){
      //   chrome.browserAction.setIcon({path: "bjm_19_off.png", tabId:activeTab.id});
      //   chrome.tabs.executeScript(null, {file: "reset.js"});
      //   // 15 minutes in Malkovich's head/browser
      //   }, 900000);

    }
    else{
      chrome.browserAction.setIcon({path: "bjm_logo_19_off.png", tabId:activeTab.id});
      // var elem = document.getElementsByTagName("script");
      // elem[0].src = "";
      chrome.tabs.executeScript(null, {file: "reset.js"});
    }
});

// jersey turnpike http://www.youtube.com/watch?v=Q6Fuxkinhug&t=1m27s  // until 1.55
// reload page