// App.js
import './App.css';
import React, { useState, ChangeEvent } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setFirstName(value);
    setFullName(value + ' ' + lastName);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setLastName(value);
    setFullName(firstName + ' ' + value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
