import React from 'react';
import { getViewBoxDimensions, getNumberPartPoints } from '../utils';

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
  const partWidth = thickness;
  const partHeight = (viewBoxHeight - partWidth) / 2;
  const viewBox = getViewBoxDimensions({
    viewBoxHeight: partHeight,
    viewBoxWidth: partWidth,
    inset,
  });
  const points = getNumberPartPoints({ height: partHeight, width: partWidth });

  return (
    <svg height={height} width={width} viewBox={viewBox}>
      <polygon fill={isActive ? activeColor : inactiveColor} points={points} />
    </svg>
  );
};

export default NumberPart;
