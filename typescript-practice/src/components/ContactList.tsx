import React from 'react';

interface Contact {
  name: string;
  email: string;
}

interface ContactListProps {
  selectedContact: Contact;
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ selectedContact, contacts, onSelect }) => {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>
            <button onClick={() => onSelect(contact)}>
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
