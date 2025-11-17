import React, { memo } from 'react';

import DotItem from './DotItem';

interface DotsContainerProps {
  color: string;
  size: number;
  inset: number;
  baseSpacing: number;
  viewBoxHeight: number;
}

const DotsContainer = memo(({ baseSpacing, ...props }: DotsContainerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: baseSpacing * 3,
        padding: baseSpacing / 2,
      }}
    >
      <DotItem {...props} />
      <DotItem {...props} />
    </div>
  );
});

export default DotsContainer;
