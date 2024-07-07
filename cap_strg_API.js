// 2. **Storage API**:
//    - **Purpose**: Provides a way to store and retrieve data persistently across browser sessions.
//    - **Example**: `chrome.storage.local` or `browser.storage.local`.
// popup.js

// Save data to local storage when the save button is clicked
document.getElementById('saveButton').addEventListener('click', () => {
  const inputData = document.getElementById('inputData').value;

  chrome.storage.local.set({ 'savedData': inputData }, () => {
    console.log('Data saved to local storage');
  });
});

// Retrieve data from local storage when the extension loads
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('savedData', (data) => {
    if (data.savedData) {
      // Display the retrieved data in the extension popup
      document.getElementById('outputData').textContent = data.savedData;
    }
  });
});
