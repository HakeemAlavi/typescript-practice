// src/components/Child2.tsx
import React from 'react';
import Child3 from './Child3';
import { Child2Props } from '../types';

const Child2: React.FC<Child2Props> = ({ message }) => {
  return (
    <div>
      <h3>Child2 Component</h3>
      <Child3 message={message} />
    </div>
  );
};

export default Child2;
