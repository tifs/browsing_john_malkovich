var toggle = false;
var malkovichTime;

// listens for the bjm button to be clicked
chrome.browserAction.onClicked.addListener(function(activeTab) {
  // chrome.browserAction.setIcon(object details, function callback)
  toggle = !toggle;
    if(toggle){
      chrome.browserAction.setIcon({path: "bjm_logo_19_off.png", tabId:activeTab.id});
      chrome.tabs.executeScript(null, {file: "jquery-1.11.1.min.js"});
      chrome.tabs.executeScript(null, {file: "malkovich.js"});
      chrome.alarms.create("firstAlarm", {delayInMinutes: 1.0});
      chrome.alarms.onAlarm.addListener(function(alarm) {
        // sadly, this timed page reload doesn't work right now :(
        chrome.tabs.reload();
      });
    }
    else{
      chrome.browserAction.setIcon({path: "bjm_logo_19_off.png", tabId:activeTab.id});
    }
});