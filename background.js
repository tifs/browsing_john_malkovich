var toggle = false;

chrome.browserAction.onClicked.addListener(function(activeTab) {
  // chrome.browserAction.setIcon(object details, function callback)
  toggle = !toggle;
    if(toggle){
      chrome.browserAction.setIcon({path: "bjm_19_on.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
      chrome.tabs.executeScript(null, {file: "malkovich.js"});
      // = setTimeout(function(){
      //   chrome.browserAction.setIcon({path: "bjm_19_off.png", tabId:activeTab.id});
      //   chrome.tabs.executeScript(null, {file: "reset.js"});
      //   // 15 minutes in Malkovich's head/browser
      //   }, 900000);

    }
    else{
      chrome.browserAction.setIcon({path: "bjm_19_off.png", tabId:activeTab.id});
      // var elem = document.getElementsByTagName("script");
      // elem[0].src = "";
      chrome.tabs.executeScript(null, {file: "reset.js"});
    }
});
