// src/components/ItemList.js
import React from 'react';
import { ItemListProps } from '../types';

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
