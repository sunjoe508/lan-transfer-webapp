import React from 'react';

function PublicFiles({ publicFiles }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Public Files</h2>
      <ul>
        {publicFiles.map((file, i) => (
          <li key={i} className="p-1 border-b">
            <a href={file.url} download>{file.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicFiles;
