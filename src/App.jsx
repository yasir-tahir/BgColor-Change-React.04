import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('');

  const handleColorChange  = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Change Background Color</h1>
      <div>
        <button style={{backgroundColor: 'red', color: 'white'}} onClick={() => handleColorChange('red')}>Red</button>
        <button style={{backgroundColor: 'blue', color: 'white'}} onClick={() => handleColorChange('blue')}>Blue</button>
        <button style={{backgroundColor: 'grey', color: 'white'}} onClick={() => handleColorChange('grey')}>Grey</button>
        <button style={{backgroundColor: 'green', color: 'white'}} onClick={() => handleColorChange('green')}>Green</button>
        <button style={{backgroundColor: 'purple', color: 'white'}} onClick={() => handleColorChange('purple')}>Purple</button>
      </div>
    </div>
  );
};

export default App;
