import React from 'react';

function DeviceList({ devices, deviceName, setDeviceName }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Devices</h2>
      <input
        className="border p-2 rounded w-full mb-2"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
        placeholder="Your device name"
      />
      <ul>
        {Object.entries(devices).map(([id, name]) => (
          <li key={id} className="p-1 border-b">{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
