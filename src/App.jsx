import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeviceList from './components/DeviceList';
import FileUploader from './components/FileUploader';
import BroadcastPanel from './components/BroadcastPanel';
import PublicFiles from './components/PublicFiles';

function App() {
  const [deviceId] = useState(uuidv4());
  const [deviceName, setDeviceName] = useState('My Device');
  const [devices, setDevices] = useState({});
  const [messages, setMessages] = useState([]);
  const [publicFiles, setPublicFiles] = useState([]);

  useEffect(() => {
    // Placeholder for WebRTC/PeerJS initialization
    // Devices list and broadcast messages will be updated here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">LAN File Transfer App</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <DeviceList devices={devices} deviceName={deviceName} setDeviceName={setDeviceName} />
        <FileUploader devices={devices} deviceId={deviceId} />
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <PublicFiles publicFiles={publicFiles} />
        <BroadcastPanel messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;
