import './App.css';
import React from 'react';

function App() {
  async function toBlob(svgUrl) {
    const response = await fetch(svgUrl);
    const svgText = await response.text();

    const blob = new Blob([svgText], { type: 'image/svg+xml' });
    const blobUrl = URL.createObjectURL(blob);
    download(blobUrl);
  }

  function download(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'logo.svg';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  return (
    <div>
      <button onClick={() => toBlob('https://aicdn.picsart.com/62e3eecd-556a-42e2-b8a8-83a58541b72d_3')}>download</button>
    </div>
  );
}

export default App;
