# DSpeed-AutoClaim-0.1

    function autoClickAndReload() {
        const button = document.querySelector('button.claimed-btn.cursor-not-allowed.d-flex.align-items-center.justify-content-center.gap-2');
        if (button && !button.classList.contains('cursor-not-allowed')) { // Check if the button exists and is enabled
            button.click();
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


To use this with Tampermonkey:

Install Tampermonkey: If you don't have it already, install the Tampermonkey extension for your browser.
Create a new script: Click the Tampermonkey icon in your browser toolbar and select "Create a new script...".
Replace the default script: Delete the default code in the editor and paste the modified script (including the header block) into the editor.
Save the script: Press Ctrl+S (or Cmd+S on macOS) to save the script. Tampermonkey will automatically run the script on pages matching the @match rule (in this case, https://app.despeed.net/dashboard).
