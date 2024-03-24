// src/context/MessageContext.tsx
import React, { createContext, useState } from 'react';

// Define context type
interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with initial values
const MessageContext = createContext<MessageContextType>({
  message: '',
  setMessage: () => {},
});

export default MessageContext;
