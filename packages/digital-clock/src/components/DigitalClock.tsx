import React, { useEffect, useState } from 'react';
import ClockNumbers from './ClockNumbers';
import NumbersGlow from './NumbersGlow';
import {
  DEFAULT_NUMBER_HEIGHT,
  DEFAULT_NUMBER_THICKNESS,
  DEFAULT_NUMBER_INSET,
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_INACTIVE_COLOR,
} from '../constants';

interface DigitalClockProps {
  height?: number;
  numberThickness?: number;
  numberInset?: number;
  numberViewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
  hideGlow?: boolean;
  hideLargeGlow?: boolean;
}

const DigitalClock = ({
  height = DEFAULT_NUMBER_HEIGHT,
  numberThickness = DEFAULT_NUMBER_THICKNESS,
  numberInset = DEFAULT_NUMBER_INSET,
  numberViewBoxHeight = DEFAULT_NUMBER_HEIGHT,
  activeColor = DEFAULT_ACTIVE_COLOR,
  inactiveColor = DEFAULT_INACTIVE_COLOR,
  hideGlow = false,
  hideLargeGlow = false,
}: DigitalClockProps) => {
  const [time, setTime] = useState(new Date());
  const baseSizeUnit = (height / numberViewBoxHeight) * 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const clockNumberProps = {
    time,
    height,
    numberThickness,
    numberInset,
    numberViewBoxHeight,
    activeColor,
    inactiveColor,
    baseSizeUnit,
  };

  return (
    <div style={{ position: 'relative' }}>
      <ClockNumbers {...clockNumberProps} />
      <NumbersGlow
        color={activeColor}
        hideGlow={hideGlow}
        hideLargeGlow={hideLargeGlow}
        baseSizeUnit={baseSizeUnit}
      >
        <ClockNumbers {...clockNumberProps} inactiveColor="rgba(0,0,0,0)" />
      </NumbersGlow>
    </div>
  );
};

export default DigitalClock;
