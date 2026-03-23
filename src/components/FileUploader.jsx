import React, { useState } from 'react';

function FileUploader({ devices, deviceId }) {
  const [file, setFile] = useState(null);

  const sendFile = (targetId) => {
    if (!file) return alert("Select a file first!");
    alert(`Sending ${file.name} to ${targetId}`);
    // WebRTC P2P logic goes here
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Send File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2"/>
      <ul>
        {Object.entries(devices).map(([id, name]) => (
          <li key={id} className="flex justify-between items-center p-1 border-b">
            {name}
            <button onClick={() => sendFile(id)} className="bg-blue-500 text-white px-2 py-1 rounded">Send</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUploader;
