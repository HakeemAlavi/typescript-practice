// src/context/MessageContextProvider.tsx
import React, { createContext, useState, ReactNode } from 'react';
import MessageContext from './MessageContext';

// Define provider component
export const MessageContextProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState("Hello from App component!");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
