// src/components/GrandChild.tsx
import React from 'react';
import { GrandChildProps } from '../types';

const GrandChild: React.FC<GrandChildProps> = ({ message }) => {
  return (
    <div>
      <h5>GrandChild Component</h5>
      <p>{message}</p>
    </div>
  );
};

export default GrandChild;
