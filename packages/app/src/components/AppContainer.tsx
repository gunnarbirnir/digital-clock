import React from 'react';
import { DigitalClock } from '@gunnarbirnir/digital-clock';

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
        <DigitalClock
        // height={250}
        // numberThickness={15}
        // numberInset={4}
        // numberViewBoxHeight={500}
        // activeColor="red"
        // inactiveColor="blue"
        // hideGlow={true}
        // hideLargeGlow={true}
        />
      </div>
    </div>
  );
};

export default AppContainer;
