import React, { memo, type PropsWithChildren } from 'react';

interface NumbersGlowProps {
  color: string;
  hideGlow: boolean;
  hideLargeGlow: boolean;
  baseSpacing: number;
}

const NumbersGlow = memo(
  ({
    children,
    color,
    hideGlow,
    hideLargeGlow,
    baseSpacing,
  }: PropsWithChildren<NumbersGlowProps>) => {
    const largeGlowOffset = -baseSpacing * 3;

    return (
      <>
        {!hideGlow && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              filter: `blur(${baseSpacing}px)`,
            }}
          >
            {children}
          </div>
        )}
        {!hideGlow && !hideLargeGlow && (
          <div
            style={{
              position: 'absolute',
              top: largeGlowOffset,
              left: largeGlowOffset,
              bottom: largeGlowOffset,
              right: largeGlowOffset,
              backgroundColor: color,
              opacity: 0.2,
              filter: `blur(${baseSpacing * 5}px)`,
            }}
          />
        )}
      </>
    );
  }
);

export default NumbersGlow;
