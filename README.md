# 🔁 React Visibility Toggle

This is a simple React application that demonstrates how to toggle the visibility of an element using `useState`.

## 🧠 Concept

A button toggles the visibility of a paragraph on the screen. This is useful for building interactive UIs like dropdowns, modals, or toggled content sections.

## 🚀 How It Works

- Uses the `useState` hook to manage the visibility state (`true` or `false`)
- A button click calls a `toggleVisibility` function to switch the visibility
- Content is conditionally rendered using the `&&` operator

## 📦 Code Example

```jsx
import React, { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && <p>This is a toggleable message!</p>}
    </div>
  );
};

export default App;
📂 Project Setup
Clone this repository or create a new React app:

npx create-react-app visibility-toggle
cd visibility-toggle
Replace the contents of App.js with the example code above.

Run the project:


npm start
✅ Output
When you run the app, you’ll see a button. Clicking it will toggle the visibility of a message below it.

