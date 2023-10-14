const toggle = document.getElementById('toggle');
const PBT = window.localStorage.getItem("popupBlockerToggle");

toggle.innerText = PBT || "OFF";

toggle.addEventListener('click', () => {
    toggle.innerText === 'ON' ? toggle.innerText = 'OFF' : toggle.innerText = 'ON';

    window.localStorage.setItem("popupBlockerToggle", toggle.innerText);

    chrome.runtime.sendMessage({ popupBlockerToggle: toggle.innerText });
})