import React from 'react';

interface FloorProps {
  width: number;
}

const Floor: React.FC<FloorProps> = ({ width }) => {
  return (
    <div 
      className="floor"
      style={{
        width: `${width}px`,
      }}
    />
  );
};

export default Floor;