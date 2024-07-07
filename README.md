This is a design an AI-powered Microsoft Edge browser extension assistant with the described features,
here's how is the structure is based on the requirements for both Automatic and Optional modes:

### Features:

1. **Capture Webpage**:
   - Capture a webpage in different formats: JPEG (default), text, or PDF.
   - Allow user to specify whether to capture the full webpage or a custom page size.

2. **Save to Location**:
   - By default, send captures to the OneNote Windows app, synchronized with the extension.
   - Optionally, allow users to choose a different destination for their captures, configurable in settings.

### Modes of Working:

#### Automatic Mode:

- **Capture and Format**:
  - Automatically captures webpages based on user settings (full page or custom size).
  - Supports default JPEG format capture.
  - Users can also choose to capture in text or PDF format.

- **Destination**:
  - Default destination is OneNote Windows app for seamless synchronization.
  - Users can configure alternative destinations within extension settings.

#### Optional Mode:

- **Custom Settings Training**:
  - Requires users to train the extension with their specific preferences.
  - Users can set:
    - Capture screen size (full or custom).
    - Capture format (JPEG, text, PDF).
    - Specify where captures are saved on their system (custom directory or application).

### Implementation Overview:

To implement this assistant, you would typically use web technologies such as JavaScript, HTML, and CSS for the extension's frontend. Here’s a general outline of how you could structure the functionality:

1. **User Interface (UI)**:
   - Develop a user-friendly UI that integrates with the browser's toolbar or context menu.
   - Provide options for selecting capture mode (automatic or optional) and format (JPEG, text, PDF).
   - Include settings for specifying capture size (full or custom) and destination (OneNote or custom location).

2. **Capture Functionality**:
   - Implement logic to capture webpages using browser APIs (like `chrome.tabs.captureVisibleTab` for Chrome or `browser.tabs.captureVisibleTab` for Firefox).
   - Convert captured content to desired formats (JPEG, text, PDF) using appropriate libraries or APIs.

3. **Settings Management**:
   - Store user preferences using browser storage mechanisms (such as `chrome.storage` for Chrome or `browser.storage` for Firefox).
   - Allow users to configure and save settings for capture size, format, and destination.

4. **Integration with OneNote**:
   - Utilize Microsoft Graph APIs or OneNote APIs to send captures directly to the OneNote Windows app or cloud storage associated with the user's Microsoft account.

5. **Optional Mode Training**:
   - Implement a setup or configuration wizard to guide users through setting up custom capture preferences.
   - Provide clear instructions for training the extension and saving custom settings.

### Example Workflow:

- **Automatic Mode**: User clicks on the extension icon, selects capture mode (automatic), chooses JPEG format, and captures the current webpage. The capture is sent to OneNote by default.
  
- **Optional Mode**: User accesses extension settings, trains the extension by specifying custom capture size (e.g., viewport size), selects PDF format, and sets a custom save location on their system. They then initiate a capture which follows their specified settings.

### Conclusion:

Implementing this assistant involves user experience (UX), integration with browser APIs, and Microsoft services for seamless functionality like syncing with OneNote. By offering both automatic and optional modes, users can choose between convenience and customization based on their needs.
![image](https://github.com/altosaxis/ultrabooker/assets/61560118/6bad540f-0e81-4125-9001-7c30cbf8db9f)
