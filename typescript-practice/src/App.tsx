// App.tsx
import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App: React.FC = () => {
  return (
    <div className="App">
      <Login />
      <SignUp />
    </div>
  );
};

export default App;
