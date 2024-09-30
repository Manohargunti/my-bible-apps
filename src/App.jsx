import React from 'react';
import RandomVerse from './RandomVerse';
import SpecificVerse from './SpecificVerse';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <RandomVerse />
      </div>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <SpecificVerse />
      </div>
    </div>
  );
};

export default App;
