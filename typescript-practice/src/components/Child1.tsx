// src/components/Child1.tsx
import React from 'react';
import Child2 from './Child2';
import { Child1Props } from '../types';

const Child1: React.FC<Child1Props> = ({ message }) => {
  return (
    <div>
      <h2>Child1 Component</h2>
      <Child2 message={message} />
    </div>
  );
};

export default Child1;
