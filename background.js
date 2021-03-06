var cssLoaded = false,
    jsLoaded = false;

function originify() {
    var tabId,
        cycleClass = function () {
            chrome.tabs.executeScript(tabId, { code: "StateOfBamboo.cycleBodyClass()" });
        };
    if (!cssLoaded) {
        chrome.tabs.insertCSS(null, { file: "origin.css" }, function () { cssLoaded = true; });
    }
    if (!jsLoaded) {
        chrome.tabs.executeScript(null, { file: "originify.js" }, function () {
            jsLoaded = true;
            chrome.tabs.getSelected(null, function (tab) {
                tabId = tab.id;
                cycleClass();
            });
        });
    } else {
        cycleClass();
    }
}
chrome.browserAction.onClicked.addListener(originify);