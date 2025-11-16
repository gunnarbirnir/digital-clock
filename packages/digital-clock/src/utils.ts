export const getNumberPartDimensions = ({
  numberHeight,
  numberThickness,
  viewBoxHeight,
}: {
  numberHeight: number;
  numberThickness: number;
  viewBoxHeight?: number;
}) => {
  const numberThicknessRatio =
    numberThickness / (viewBoxHeight ?? numberHeight);
  const partWidth = numberHeight * numberThicknessRatio;
  const partHeight = (numberHeight - partWidth) / 2;

  return { partWidth, partHeight };
};
