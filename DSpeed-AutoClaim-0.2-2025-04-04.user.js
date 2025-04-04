// ==UserScript==
// @name         DSpeed-AutoClaim-0.2
// @namespace    http://tampermonkey.net/
// @version      2025-04-04
// @description  try to take over the world!
// @author       Titus
// @match        https://app.despeed.net/dashboard
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function autoClickAndReload() {
    const button = document.querySelector('button.claimed-btn.cursor-not-allowed.d-flex.align-items-center.justify-content-center.gap-2');
    if (button && !button.classList.contains('cursor-not-allowed')) { // Check if the button exists and is enabled
        button.click();
        alert('Button clicked!'); // Added popup notification
        setTimeout(() => { // Give some time for the click to register, adjust as needed
            window.location.reload();
        }, 2000); // Adjust the delay (in milliseconds) as needed
    }
}

// Run the function once a day (24 hours = 24 * 60 * 60 * 1000 milliseconds)
setInterval(autoClickAndReload, 24 * 60 * 60 * 1000);

// Initial check in case the button is already enabled when the script loads
autoClickAndReload();
})();