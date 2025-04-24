import { Position, Size } from '../types';
import { PLATFORM_TYPES, PROJECTS } from './constants';

export const detectCollision = (
  ballPosition: Position,
  ballSize: number,
  platformPosition: Position, 
  platformSize: Size
): boolean => {
  // Check if the ball is within the platform boundaries
  const ballLeft = ballPosition.x;
  const ballRight = ballPosition.x + ballSize;
  const ballTop = ballPosition.y;
  const ballBottom = ballPosition.y + ballSize;
  
  const platformLeft = platformPosition.x;
  const platformRight = platformPosition.x + platformSize.width;
  const platformTop = platformPosition.y;
  const platformBottom = platformPosition.y + platformSize.height;
  
  // Check for collision (when ball touches platform from top)
  return (
    ballRight > platformLeft &&
    ballLeft < platformRight &&
    ballBottom > platformTop &&
    ballTop < platformBottom
  );
};

export const getRandomPlatformType = (): 'blue' | 'green' | 'yellow' => {
  const randomIndex = Math.floor(Math.random() * PLATFORM_TYPES.length);
  return PLATFORM_TYPES[randomIndex];
};

export const getProjectByType = (type: 'blue' | 'green' | 'yellow') => {
  return PROJECTS.find(project => project.type === type) || PROJECTS[0];
};

export const generatePlatformId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};