import React from 'react';
import { PlatformData } from '../types';

interface PlatformProps {
  platform: PlatformData;
}

const Platform: React.FC<PlatformProps> = ({ platform }) => {
  const { position, size, type, title } = platform;
  
  return (
    <div 
      className={`platform ${type}-platform`}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {title}
    </div>
  );
};

export default Platform;