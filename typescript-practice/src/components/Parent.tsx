// src/components/Parent.tsx
import React, { useContext } from 'react';
import Child1 from './Child1';

const Parent: React.FC = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child1 />
    </div>
  );
};

export default Parent;
