let popupBlockerToggle = "OFF";

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    popupBlockerToggle = msg.popupBlockerToggle;
})

chrome.tabs.onCreated.addListener(function (tab) {
    console.log(tab?.pendingUrl)

    if (popupBlockerToggle === "OFF") return;

    if (!tab?.pendingUrl?.includes('myflixer')) {
        chrome.tabs.remove(tab.id)
    }
});