export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface BallState {
  position: Position;
  velocity: Velocity;
  size: number;
  isJumping: boolean;
}

export interface PlatformData {
  id: string;
  position: Position;
  size: Size;
  type: 'blue' | 'green' | 'yellow';
  title: string;
  description: string;
  link: string;
}

export interface GameState {
  ball: BallState;
  platforms: PlatformData[];
  score: number;
  isGameOver: boolean;
  isPaused: boolean;
  activePopup: PlatformData | null;
}