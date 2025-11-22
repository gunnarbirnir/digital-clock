import React, { memo, type PropsWithChildren } from 'react';

interface NumbersGlowProps {
  color: string;
  hideGlow: boolean;
  hideLargeGlow: boolean;
  baseSizeUnit: number;
}

const NumbersGlow = memo(
  ({
    children,
    color,
    hideGlow,
    hideLargeGlow,
    baseSizeUnit,
  }: PropsWithChildren<NumbersGlowProps>) => {
    return (
      <>
        {!hideGlow && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              filter: `blur(${baseSizeUnit}px)`,
            }}
          >
            {children}
          </div>
        )}
        {!hideGlow && !hideLargeGlow && (
          <div
            style={{
              position: 'absolute',
              inset: -baseSizeUnit * 3,
              backgroundColor: color,
              opacity: 0.2,
              filter: `blur(${baseSizeUnit * 5}px)`,
            }}
          />
        )}
      </>
    );
  }
);

export default NumbersGlow;
