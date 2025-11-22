import React from 'react';
import { getViewBoxDimensions } from '../utils';

interface DotItemProps {
  color: string;
  size: number;
  viewBoxHeight: number;
  inset: number;
}

const DotItem = ({ color, size, viewBoxHeight, inset }: DotItemProps) => {
  const viewBox = getViewBoxDimensions({
    viewBoxHeight,
    viewBoxWidth: viewBoxHeight,
    inset,
  });

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill={color}
        r={viewBoxHeight / 2}
        cx={viewBoxHeight / 2}
        cy={viewBoxHeight / 2}
      />
    </svg>
  );
};

export default DotItem;
