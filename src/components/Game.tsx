import React, { useState, useEffect, useCallback, useRef } from 'react';
import Ball from './Ball';
import Platform from './Platform';
import ScrollingText from './ScrollingText';
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
  IDLE_BOUNCE_FORCE,
  PLATFORM_WIDTH, 
  PLATFORM_HEIGHT,
  PLATFORM_SPEED,
  PLATFORM_GAP,
  MIN_PLATFORM_Y,
  PROJECTS
} from '../utils/constants';

const FLOOR_OFFSET = 200;
const PLATFORM_OFFSET = 400;

const Game: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [gameSize, setGameSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [shouldJumpHigher, setShouldJumpHigher] = useState(false);
  
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
    activePopup: null,
    currentProjectIndex: 0
  });

  const [gameState, setGameState] = useState<GameState>(initialGameState());

  const floorHeight = gameSize.height - FLOOR_OFFSET;
  const platformHeight = floorHeight - PLATFORM_OFFSET;

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

  useEffect(() => {
    generateInitialPlatforms();
  }, [gameSize.width]);

  const generateInitialPlatforms = () => {
    const newPlatforms: PlatformData[] = [];
    let xPosition = gameSize.width;
    
    PROJECTS.forEach((project) => {
      newPlatforms.push({
        id: generatePlatformId(),
        position: { x: xPosition, y: platformHeight },
        size: { width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT },
        type: project.type as 'blue' | 'green' | 'yellow',
        title: project.title,
        description: project.description,
        mobileDescription: project.mobileDescription,
        link: project.link
      });
      
      xPosition += PLATFORM_WIDTH + PLATFORM_GAP;
    });
    
    setGameState(prevState => ({
      ...prevState,
      platforms: newPlatforms
    }));
  };

  const updateGame = useCallback((time: number, deltaTime: number) => {
    if (gameState.isPaused || gameState.isGameOver) return;
    
    setGameState(prevState => {
      const { ball, platforms, currentProjectIndex } = prevState;
      
      let newY = ball.position.y + ball.velocity.y;
      let newVelocityY = ball.velocity.y + GRAVITY;
      
      if (newY + ball.size > floorHeight) {
        newY = floorHeight - ball.size;
        newVelocityY = shouldJumpHigher ? JUMP_FORCE : IDLE_BOUNCE_FORCE;
        setShouldJumpHigher(false);
      }
      
      const updatedPlatforms = platforms.map(platform => ({
        ...platform,
        position: {
          ...platform.position,
          x: platform.position.x - PLATFORM_SPEED
        }
      }));
      
      const lastPlatform = updatedPlatforms[updatedPlatforms.length - 1];
      let newPlatforms = [...updatedPlatforms];
      
      if (lastPlatform && lastPlatform.position.x < gameSize.width) {
        const nextIndex = (currentProjectIndex + 1) % PROJECTS.length;
        const project = PROJECTS[nextIndex];
        
        newPlatforms.push({
          id: generatePlatformId(),
          position: { 
            x: lastPlatform.position.x + PLATFORM_WIDTH + PLATFORM_GAP,
            y: platformHeight
          },
          size: { width: PLATFORM_WIDTH, height: PLATFORM_HEIGHT },
          type: project.type as 'blue' | 'green' | 'yellow',
          title: project.title,
          description: project.description,
          mobileDescription: project.mobileDescription,
          link: project.link
        });
        
        return {
          ...prevState,
          currentProjectIndex: nextIndex,
          platforms: newPlatforms.filter(platform => 
            platform.position.x + platform.size.width > -100
          )
        };
      }
      
      newPlatforms = newPlatforms.filter(platform => 
        platform.position.x + platform.size.width > -100
      );
      
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
  }, [gameState.isPaused, gameState.isGameOver, floorHeight, gameSize.width, platformHeight, shouldJumpHigher]);

  useGameLoop(updateGame, !gameState.isPaused && !gameState.isGameOver);

  const handleJump = useCallback(() => {
    if (gameState.isPaused || gameState.isGameOver) return;
    setShouldJumpHigher(true);
  }, [gameState.isPaused, gameState.isGameOver]);

  const handleClosePopup = () => {
    setGameState(initialGameState());
    generateInitialPlatforms();
  };

  const handleLearnMore = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div 
      ref={gameContainerRef}
      className="relative bg-[#FAF5F2] w-full h-full"
      style={{ fontFamily: "'Outfit', sans-serif" }}
      onClick={handleJump}
    >
      <div className="absolute left-1/2 -translate-x-1/2 text-center w-full px-4 text-2xl text-gray-600 md:text-2xl sm:text-xl" style={{ top: `${floorHeight + 60}px` }}>
        Click or tap to jump
      </div>

      <Ball ball={gameState.ball} />
      
      <ScrollingText width={gameSize.width} top={floorHeight} />
      
      {gameState.platforms.map(platform => (
        <Platform key={platform.id} platform={platform} />
      ))}
      
      {gameState.activePopup && (
        <Popup 
          project={gameState.activePopup} 
          onClose={handleClosePopup}
          onLearnMore={handleLearnMore}
        />
      )}
    </div>
  );
};

export default Game;