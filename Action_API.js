// 4. **Browser Action or Page Action API**:
//    - **Purpose**: Defines how your extension interacts with the browser UI (toolbar icons, context menus, etc.).
//    - **Example**: `chrome.browserAction` or `browser.pageAction`.

// manifest.json
{
  "permissions": ["activeTab", "contextMenus"],
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "background": {
    "scripts": ["background.js"]
  },
  "manifest_version": 2
}

// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'captureWebpage',
    title: 'Capture Webpage',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'captureWebpage') {
    chrome.tabs.captureVisibleTab(null, { format: 'jpeg', quality: 100 }, (dataUrl) => {
      // Save the captured image to local storage
      chrome.storage.local.set({ 'capturedImage': dataUrl }, () => {
        console.log('Captured image saved to local storage');
      });
    });
  }
});

{
  "permissions": ["activeTab", "contextMenus", "storage"],
  ...
}
