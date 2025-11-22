import React from 'react';

interface DotItemProps {
  color: string;
  size: number;
  viewBoxHeight: number;
  inset: number;
}

const DotItem = ({ color, size, viewBoxHeight, inset }: DotItemProps) => {
  const viewBox = `-${inset} -${inset} ${viewBoxHeight + inset * 2} ${
    viewBoxHeight + inset * 2
  }`;

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
