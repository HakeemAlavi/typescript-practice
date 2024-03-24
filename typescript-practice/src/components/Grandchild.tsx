// src/components/Grandchild.tsx
import React from 'react';
import { useContext } from 'react';
import MessageContext from '../context/MessageContext';

const Grandchild: React.FC = () => {
  const { message } = useContext(MessageContext);
  
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>{message}</p>
    </div>
  );
};

export default Grandchild;
