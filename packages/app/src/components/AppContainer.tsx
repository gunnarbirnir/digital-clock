import React from 'react';
import DigitalClock from '@gunnarbirnir/digital-clock';

const AppContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000000',
        margin: -8,
      }}
    >
      <div style={{ paddingBottom: 20 }}>
        <DigitalClock />
      </div>
    </div>
  );
};

export default AppContainer;
