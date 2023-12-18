import { useMemo } from 'react';

// Define positions for different models as tuples
const position1: [number, number, number] = [0, -4.1, 0];
const position2: [number, number, number] = [0, -4.1, 0];
const position3: [number, number, number] = [5, -15, 1.7];

// Custom hook to memoize model positions
export const useModelPositions = () => {
  const memoPosition1 = useMemo(() => position1, []);
  const memoPosition2 = useMemo(() => position2, []);
  const memoPosition3 = useMemo(() => position3, []);

  return {
    memoPosition1,
    memoPosition2,
    memoPosition3
  };
};