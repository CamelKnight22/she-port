import { useMemo } from 'react';

// Define rotations for different models as tuples
const rotation1: [number, number, number] = [0, - Math.PI / 2, 0];
const rotation2: [number, number, number] = [0, - Math.PI / 3, 0];
const rotation3: [number, number, number] = [0, - Math.PI / 1.6, 0];

// Custom hook to memoize model rotations
export const useModelRotations = () => {
  const memoRotation1 = useMemo(() => rotation1, []);
  const memoRotation2 = useMemo(() => rotation2, []);
  const memoRotation3 = useMemo(() => rotation3, []);

  return {
    memoRotation1,
    memoRotation2,
    memoRotation3
  };
};