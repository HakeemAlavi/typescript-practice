// src/components/Child3.tsx
import React from 'react';
import Grandchild from './Grandchild';

const Child3: React.FC = () => {
  return (
    <div>
      <h3>Child3 Component</h3>
      <Grandchild />
    </div>
  );
};

export default Child3;
