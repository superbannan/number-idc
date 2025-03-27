import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="App">
      <div className="counter">Clicks: {clicks}</div>
      <button className="red-button" onClick={handleClick}>
        CLICK ME
      </button>
    </div>
  );
}

export default App;
