// src/components/Parent.tsx
import React from 'react';
import Child1 from './Child1';
import { ParentProps } from '../types';

const Parent: React.FC<ParentProps> = ({ message }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child1 message={message} />
    </div>
  );
};

export default Parent;
