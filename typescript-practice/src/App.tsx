// App.js
import React from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="App">
      <ItemList items={items} />
    </div>
  );
}

export default App;
