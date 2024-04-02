import React, { useState } from 'react';

interface Contact {
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
}

const Chat: React.FC<ChatProps> = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={`Chat to ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
};

export default Chat;
