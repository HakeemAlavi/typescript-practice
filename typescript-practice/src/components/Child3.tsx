// src/components/Child3.tsx
import React from 'react';
import GrandChild from './Grandchild';
import { Child3Props } from '../types';

const Child3: React.FC<Child3Props> = ({ message }) => {
  return (
    <div>
      <h4>Child3 Component</h4>
      <GrandChild message={message} />
    </div>
  );
};

export default Child3;
