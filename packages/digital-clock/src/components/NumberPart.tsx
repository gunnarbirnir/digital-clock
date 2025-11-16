import React from 'react';
import { getNumberPartDimensions } from '../utils';

interface NumberPartProps {
  height: number;
  width: number;
  thickness: number;
  inset: number;
  viewBoxHeight: number;
  activeColor: string;
  inactiveColor: string;
  isActive?: boolean;
}

const NumberPart = ({
  height,
  width,
  thickness,
  inset,
  viewBoxHeight,
  activeColor,
  inactiveColor,
  isActive = false,
}: NumberPartProps) => {
  // Viewport dimensions
  const { partWidth, partHeight } = getNumberPartDimensions({
    numberHeight: viewBoxHeight,
    numberThickness: thickness,
  });

  const points = [
    `0,${partWidth / 2}`,
    `0,${partHeight - partWidth / 2}`,
    `${partWidth / 2},${partHeight}`,
    `${partWidth},${partHeight - partWidth / 2}`,
    `${partWidth},${partWidth / 2}`,
    `${partWidth / 2},0`,
  ].join(' ');

  const viewBox = `-${inset} -${inset} ${partWidth + inset * 2} ${
    partHeight + inset * 2
  }`;

  return (
    <svg height={height} width={width} viewBox={viewBox}>
      <polygon fill={isActive ? activeColor : inactiveColor} points={points} />
    </svg>
  );
};

export default NumberPart;
