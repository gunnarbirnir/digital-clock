import React, { useMemo } from 'react';
import { DigitalClock } from '@gunnarbirnir/digital-clock';
import { getQueryParams } from '../utils';

const AppContainer = () => {
  const {
    height,
    numberThickness,
    numberInset,
    numberViewBoxHeight,
    activeColor,
    inactiveColor,
    backgroundColor,
    hideGlow,
    hideLargeGlow,
    time,
  } = getQueryParams();

  const getTimeUpdate = useMemo(() => {
    return time ? () => new Date(`2025-01-01T${time}:00`) : undefined;
  }, [time]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: backgroundColor ?? '#000000',
        margin: -8,
      }}
    >
      <div style={{ paddingBottom: 20 }}>
        <DigitalClock
          height={height}
          numberThickness={numberThickness}
          numberInset={numberInset}
          numberViewBoxHeight={numberViewBoxHeight}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          hideGlow={hideGlow}
          hideLargeGlow={hideLargeGlow}
          getTimeUpdate={getTimeUpdate}
        />
      </div>
    </div>
  );
};

export default AppContainer;
