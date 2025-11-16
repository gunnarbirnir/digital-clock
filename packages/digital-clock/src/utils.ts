import { NUMBER_PART_WIDTH_RATIO } from './constants';

export const getNumberPartDimensions = (height: number) => {
  const partWidth = height * NUMBER_PART_WIDTH_RATIO;
  const partHeight = (height - partWidth) / 2;

  return { partWidth, partHeight };
};
