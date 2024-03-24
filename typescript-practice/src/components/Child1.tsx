// src/components/Child1.tsx
import React from 'react';
import Child2 from './Child2';

const Child1: React.FC = () => {
  return (
    <div>
      <h3>Child1 Component</h3>
      <Child2 />
    </div>
  );
};

export default Child1;
