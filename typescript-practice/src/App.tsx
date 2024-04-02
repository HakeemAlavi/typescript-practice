// App.js
import './App.css';
import React, { useState, ButtonHTMLAttributes } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }: { count: number; onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick'] }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
