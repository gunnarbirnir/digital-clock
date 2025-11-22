import type { NumberValue } from '../types';

export const DEFAULT_NUMBER_HEIGHT = 200;
export const DEFAULT_NUMBER_THICKNESS = 20;
export const DEFAULT_NUMBER_INSET = 1;
export const DEFAULT_ACTIVE_COLOR = 'hotpink';
export const DEFAULT_INACTIVE_COLOR = '#333333';

export const NUMBER_VALUES: Record<NumberValue, number[]> = {
  '0': [1, 1, 1, 0, 1, 1, 1],
  '1': [0, 0, 0, 0, 0, 1, 1],
  '2': [0, 1, 1, 1, 1, 1, 0],
  '3': [0, 0, 1, 1, 1, 1, 1],
  '4': [1, 0, 0, 1, 0, 1, 1],
  '5': [1, 0, 1, 1, 1, 0, 1],
  '6': [1, 1, 1, 1, 1, 0, 1],
  '7': [0, 0, 1, 0, 0, 1, 1],
  '8': [1, 1, 1, 1, 1, 1, 1],
  '9': [1, 0, 1, 1, 1, 1, 1],
};
