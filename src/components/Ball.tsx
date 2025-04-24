import React from 'react';
import { BallState } from '../types';

interface BallProps {
  ball: BallState;
}

const Ball: React.FC<BallProps> = ({ ball }) => {
  const { position, size } = ball;
  
  return (
    <div 
      className="ball"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Ball;