// App.js
import './App.css';
import React, { useState } from 'react';
import Chat from './components/Chat';
import ContactList from './components/ContactList';

interface Contact {
  name: string;
  email: string;
}

const Messenger: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ]);

  const [to, setTo] = useState<Contact>(contacts[0]);

  const handleContactSelect = (contact: Contact) => {
    setTo(contact);
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={handleContactSelect}
      />
      <Chat contact={to} />
    </div>
  );
};

export default Messenger;
