import { useRef, useEffect, useCallback } from 'react';

type FrameCallback = (time: number, deltaTime: number) => void;

export const useGameLoop = (callback: FrameCallback, isActive: boolean = true) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const loop = useCallback((time: number) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }
    
    const deltaTime = time - previousTimeRef.current;
    previousTimeRef.current = time;
    
    if (isActive) {
      callback(time, deltaTime);
    }
    
    requestRef.current = requestAnimationFrame(loop);
  }, [callback, isActive]);
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [loop]);
};

export default useGameLoop;