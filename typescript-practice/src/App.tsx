// src/App.tsx
import React from 'react';
import './App.css'; 
import Parent from './components/Parent';

function App() {
  // Define a message to pass down the component tree
  const message = "Hello from App component!";

  return (
    <div className="App">
      <div className="center-text">
        {/* Render the Parent component and pass the message prop */}
        <Parent message={message} />
      </div>
    </div>
  );
}

export default App;
