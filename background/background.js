var enable = false;
chrome.action.onClicked.addListener(function (tab) {
  enable = enable ? false : true;
  if (enable) {
    //turning on...
    chrome.action.setIcon({ path: "../icons/onstate2.png" });
    chrome.action.setBadgeText({ text: "ON" });
    // chrome.scripting.executeScript({ file: "content.js" });
  } else {
    //turning off...
    chrome.action.setIcon({ path: "../icons/offstate2.png" });
    chrome.action.setBadgeText({ text: "" });
  }
});
