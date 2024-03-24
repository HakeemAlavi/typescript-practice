// src/components/Child2.tsx
import React from 'react';
import Child3 from './Child3';

const Child2: React.FC = () => {
  return (
    <div>
      <h3>Child2 Component</h3>
      <Child3 />
    </div>
  );
};

export default Child2;
