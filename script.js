function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (getElementByXpath(selector)) {
            return resolve(true);
        }

        const observer = new MutationObserver(mutations => {
            if (getElementByXpath(selector)) {
                observer.disconnect();
                resolve(true);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const PBT = window.localStorage.getItem("popupBlockerToggle") || "OFF";

chrome.runtime.sendMessage({ popupBlockerToggle: PBT });