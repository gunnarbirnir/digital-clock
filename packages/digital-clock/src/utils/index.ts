export const getFormattedTime = (time: Date) => {
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return { hours, minutes };
};

export const getViewBoxDimensions = ({
  viewBoxHeight,
  viewBoxWidth,
  inset = 0,
}: {
  viewBoxHeight: number;
  viewBoxWidth: number;
  inset?: number;
}) => {
  const absInset = Math.abs(inset);
  const formattedInset = inset !== 0 ? `-${absInset}` : inset;
  return `${formattedInset} ${formattedInset} ${viewBoxWidth + absInset * 2} ${
    viewBoxHeight + absInset * 2
  }`;
};

export const getNumberPartPoints = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  return [
    `0,${width / 2}`,
    `0,${height - width / 2}`,
    `${width / 2},${height}`,
    `${width},${height - width / 2}`,
    `${width},${width / 2}`,
    `${width / 2},0`,
  ].join(' ');
};
