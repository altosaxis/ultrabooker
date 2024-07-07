// 3. **Runtime Messaging API**:
//    - **Purpose**: Facilitates communication between different parts of the extension (e.g., between background scripts, popup scripts, and content scripts).
//    - **Example**: `chrome.runtime.sendMessage` or `browser.runtime.sendMessage`.
// background.js (background script)

// Listen for messages from other scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'captureTab') {
    chrome.tabs.captureVisibleTab(null, { format: 'jpeg', quality: 100 }, (dataUrl) => {
      sendResponse({ dataUrl: dataUrl });
    });
    return true; // Indicate that a response will be sent asynchronously
  }
});

// popup.js (popup script)

// Send a message to the background script when the capture button is clicked
document.getElementById('captureButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'captureTab' }, (response) => {
    // Save the captured image to local storage
    chrome.storage.local.set({ 'capturedImage': response.dataUrl }, () => {
      console.log('Captured image saved to local storage');
    });
  });
});

// content.js (content script)

// Send a message to the background script when a user interacts with the page
document.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'logClick' }, (response) => {
    console.log('User clicked on the page');
  });
});


{
  "permissions": ["tabs", "storage"],
  "background": {
    "scripts": ["background.js"]
  },
  "browser_action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
