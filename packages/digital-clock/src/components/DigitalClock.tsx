import React from 'react';
import {
  DEFAULT_ACTIVE_COLOR,
  DEFAULT_INACTIVE_COLOR,
  DEFAULT_NUMBER_HEIGHT,
  DEFAULT_NUMBER_INSET,
  DEFAULT_NUMBER_THICKNESS,
} from '../constants';
import { useTime } from '../hooks/useTime';
import ClockNumbers from './ClockNumbers';
import NumbersGlow from './NumbersGlow';

interface DigitalClockProps {
  height?: number;
  numberThickness?: number;
  numberInset?: number;
  numberViewBoxHeight?: number;
  activeColor?: string;
  inactiveColor?: string;
  hideGlow?: boolean;
  hideLargeGlow?: boolean;
  getTimeUpdate?: () => Date;
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
  getTimeUpdate,
}: DigitalClockProps) => {
  const time = useTime(getTimeUpdate);
  const baseSizeUnit = (height / numberViewBoxHeight) * 10;

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
