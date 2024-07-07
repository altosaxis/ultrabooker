
// 1. **Promises and Async/Await**:
//    - **Purpose**: Polyfill for Promises and async/await syntax to handle asynchronous operations.
//    - **Example**: Use the `es6-promise` polyfill:
//      ```javascript
//      import 'es6-promise/auto';
//      ```

// 2. **Fetch API**:
//    - **Purpose**: Polyfill for the Fetch API to make network requests.
//    - **Example**: Use the `whatwg-fetch` polyfill:
//      ```javascript
//      import 'whatwg-fetch';
//      ```

// 3. **Event Listeners**:
//    - **Purpose**: Polyfill for modern event listener syntax (`addEventListener`).
//    - **Example**: Use the `event-target-shim` polyfill:
//      ```javascript
// //      import EventTarget from 'event-target-shim';
//      ```



// ```javascript
// main.js
import 'es6-promise/auto';
import 'whatwg-fetch';
import EventTarget from 'event-target-shim';

// Rest of your extension code...
```

Make sure to install the required polyfill packages using npm or yarn:

```bash
npm install es6-promise whatwg-fetch event-target-shim
```

