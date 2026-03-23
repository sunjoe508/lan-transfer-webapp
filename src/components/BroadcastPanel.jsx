import React, { useState } from 'react';

function BroadcastPanel({ messages, setMessages }) {
  const [msg, setMsg] = useState('');

  const sendMessage = () => {
    if (!msg) return;
    setMessages([...messages, msg]);
    setMsg('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Broadcast</h2>
      <input
        className="border p-2 rounded w-full mb-2"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage} className="bg-green-500 text-white px-3 py-1 rounded mb-2">Send</button>
      <ul>
        {messages.map((m, i) => (
          <li key={i} className="p-1 border-b">{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default BroadcastPanel;
