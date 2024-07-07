// popup.js
// 1. **Tabs API**:
//    - **Purpose**: Allows interaction with browser tabs, including capturing visible tabs and querying tab information.
//    - **Example**: `chrome.tabs.captureVisibleTab` or `browser.tabs.captureVisibleTab`.
// Capture the current tab when the capture button is clicked
document.getElementById('captureButton').addEventListener('click', () => {
  chrome.tabs.captureVisibleTab(null, { format: 'jpeg', quality: 100 }, (dataUrl) => {
    // Save the captured image to local storage
    chrome.storage.local.set({ 'capturedImage': dataUrl }, () => {
      console.log('Captured image saved to local storage');
    });
  });
});

// Retrieve the captured image from local storage when the extension loads
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('capturedImage', (data) => {
    if (data.capturedImage) {
      // Display the captured image in the extension popup
      const img = document.createElement('img');
      img.src = data.capturedImage;
      document.body.appendChild(img);
    }
  });
});
