import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>DEXTools Pair Explorer Widget Template</title>
    </head>

    <body>
    <iframe id="dextools-widget"
    title="DEXTools Trading Chart"
    width="500" height="400"
    src="https://www.dextools.io/widget-chart/en/solana/pe-light/HRUsdnW2B49DQS64UoPJjcciRHSi3sBSBfnDmdEEzCRN?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>    </body>
    </html>
  `;
  

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export default App;
