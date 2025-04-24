import React, { useState, useEffect, useCallback, useRef } from 'react';
import Ball from './Ball';
import Platform from './Platform';
import Floor from './Floor';
import Popup from './Popup';
import useGameLoop from '../hooks/useGameLoop';
import { detectCollision, generatePlatformId } from '../utils/helpers';
import { GameState, PlatformData } from '../types';
import { 
  BALL_SIZE, 
  BALL_INITIAL_VELOCITY,
  BALL_POSITION_X,
  GRAVITY, 
  JUMP_FORCE, 
  PLATFORM_WIDTH, 
  PLATFORM_HEIGHT,
  PLATFORM_SPEED,
  PLATFORM_GAP,
  MIN_PLATFORM_Y,
  PROJECTS
} from '../utils/constants';

const FLOOR_OFFSET = 100; // Fixed distance from bottom
const PLATFORM_OFFSET = 250; // Fixed distance from floor

const Game: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [gameSize, setGameSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  
  const initialGameState = (): GameState => ({
    ball: {
      position: { x: BALL_POSITION_X, y: 0 },
      velocity: { ...BALL_INITIAL_VELOCITY },
      size: BALL_SIZE,
      isJumping: false
    },
    platforms: [],
    score: 0,
    isGameOver: false,
    isPaused: false,
    activePopup: null
  });

  const [gameState, setGameState] = useState<GameState>(initialGameState());

  // Initialize floor height based on game height
  const floorHeight = gameSize.height - FLOOR_OFFSET;
  const platformHeight = floorHeight - PLATFORM_OFFSET;

  // Set initial ball position
  useEffect(() => {
    setGameState(prevState => ({
      ...prevState,
      ball: {
        ...prevState.ball,
        position: { 
          x: BALL_POSITION_X, 
          y: floorHeight - prevState.ball.size 
        }
      }
    }));
  }, [floorHeight]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setGameSize({ 
        width: window.innerWidth, 
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate initial platforms
  useEffect(() => {
    generateInitialPlatforms();
  }, [gameSize.width]);

  // Generate initial set of platforms
  const generateInitialPlatforms = () => {
    const newPlatforms: PlatformData[] = [];
    let xPosition = gameSize.width;
    
    PROJECTS.forEach((project) => {
      newPlatforms.push({
        id: generatePlatformId(),
        position: { x: xPosition, y: platformHeight },
        size: { width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT },
        type: project.type as 'blue' | 'green' | 'yellow',
        title: `${project.title.toLowerCase()}`,
        description: project.description,
        link: project.link
      });
      
      xPosition += PLATFORM_WIDTH + PLATFORM_GAP;
    });
    
    setGameState(prevState => ({
      ...prevState,
      platforms: newPlatforms
    }));
  };

  // Handle game physics and updates
  const updateGame = useCallback((time: number, deltaTime: number) => {
    if (gameState.isPaused || gameState.isGameOver) return;
    
    setGameState(prevState => {
      const { ball, platforms } = prevState;
      
      // Update ball position
      let newY = ball.position.y + ball.velocity.y;
      let newVelocityY = ball.velocity.y + GRAVITY;
      
      // Ball hits the floor
      if (newY + ball.size > floorHeight) {
        newY = floorHeight - ball.size;
        newVelocityY = 0;
      }
      
      // Update platforms positions
      const updatedPlatforms = platforms.map(platform => ({
        ...platform,
        position: {
          ...platform.position,
          x: platform.position.x - PLATFORM_SPEED
        }
      }));
      
      // Check if we need to add new platforms
      const lastPlatform = updatedPlatforms[updatedPlatforms.length - 1];
      let newPlatforms = [...updatedPlatforms];
      
      if (lastPlatform && lastPlatform.position.x < gameSize.width) {
        const projectIndex = newPlatforms.length % PROJECTS.length;
        const project = PROJECTS[projectIndex];
        
        newPlatforms.push({
          id: generatePlatformId(),
          position: { 
            x: lastPlatform.position.x + PLATFORM_WIDTH + PLATFORM_GAP,
            y: platformHeight
          },
          size: { width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT },
          type: project.type as 'blue' | 'green' | 'yellow',
          title: `See how we solved ${project.title.toLowerCase()}`,
          description: project.description,
          link: project.link
        });
      }
      
      // Remove platforms that have gone off screen
      newPlatforms = newPlatforms.filter(platform => 
        platform.position.x + platform.size.width > -100
      );
      
      // Check for collisions with platforms
      let activePopup = prevState.activePopup;
      if (!activePopup) {
        newPlatforms.forEach(platform => {
          if (detectCollision(
            { x: ball.position.x, y: newY }, 
            ball.size, 
            platform.position, 
            platform.size
          )) {
            activePopup = platform;
          }
        });
      }
      
      return {
        ...prevState,
        ball: {
          ...ball,
          position: { ...ball.position, y: newY },
          velocity: { ...ball.velocity, y: newVelocityY },
          isJumping: newVelocityY < 0
        },
        platforms: newPlatforms,
        activePopup,
        isPaused: activePopup !== null
      };
    });
  }, [gameState.isPaused, gameState.isGameOver, floorHeight, gameSize.width, platformHeight]);

  // Set up game loop
  useGameLoop(updateGame, !gameState.isPaused && !gameState.isGameOver);

  // Handle jump action
  const handleJump = useCallback(() => {
    if (gameState.isPaused || gameState.isGameOver) return;
    
    setGameState(prevState => {
      // Only allow jumping if the ball is on the ground
      if (prevState.ball.position.y + prevState.ball.size >= floorHeight - 2) {
        return {
          ...prevState,
          ball: {
            ...prevState.ball,
            velocity: { ...prevState.ball.velocity, y: JUMP_FORCE },
            isJumping: true
          }
        };
      }
      return prevState;
    });
  }, [gameState.isPaused, gameState.isGameOver, floorHeight]);

  // Handle closing popup and resetting game
  const handleClosePopup = () => {
    setGameState(initialGameState());
    generateInitialPlatforms();
  };

  // Handle learn more action
  const handleLearnMore = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div 
      ref={gameContainerRef}
      className="relative bg-[#FAF5F2] w-full h-full"
      onClick={handleJump}
    >
      {/* Game elements */}
      <Ball ball={gameState.ball} />
      
      {gameState.platforms.map(platform => (
        <Platform key={platform.id} platform={platform} />
      ))}
      
      <Floor width={gameSize.width} />
      
      {/* Popup when ball hits platform */}
      {gameState.activePopup && (
        <Popup 
          project={gameState.activePopup} 
          onClose={handleClosePopup}
          onLearnMore={handleLearnMore}
        />
      )}
      
      {/* Game instructions */}
      <div className="absolute bottom-4 left-4 text-sm text-gray-600">
        Click or tap to jump
      </div>
    </div>
  );
};

export default Game;