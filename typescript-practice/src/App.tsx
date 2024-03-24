// src/App.tsx
import React from 'react';
import './App.css';
import { MessageContextProvider } from './context/MessageContextProvider';
import Parent from './components/Parent';

function App() {
  return (
    <MessageContextProvider>
      <div className="App">
        <Parent />
      </div>
    </MessageContextProvider>
  );
}

export default App;
