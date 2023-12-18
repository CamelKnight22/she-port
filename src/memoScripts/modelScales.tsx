import { Vector3 } from '@react-three/fiber';
import { useMemo } from 'react';

// Define scales for different models as tuples
const scale1: Vector3 = 5.5;
const scale2: Vector3 = 5.5;
const scale3: Vector3 = 11;

// Custom hook to memoize model scales
export const useModelScales = () => {
  const memoScale1 = useMemo(() => scale1, []);
  const memoScale2 = useMemo(() => scale2, []);
  const memoScale3 = useMemo(() => scale3, []);

  return {
    memoScale1,
    memoScale2,
    memoScale3
  };
};