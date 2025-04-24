// Game physics
export const GRAVITY = 0.5;
export const JUMP_FORCE = -15;
export const GROUND_FRICTION = 0.8;
export const BOUNCE_FACTOR = 0.7;

// Ball properties
export const BALL_SIZE = 50;
export const BALL_INITIAL_VELOCITY = { x: 0, y: 0 };
export const BALL_POSITION_X = 150;

// Platform properties
export const PLATFORM_WIDTH = 200;
export const PLATFORM_HEIGHT = 150;
export const PLATFORM_SPEED = 2; // Increased from 2 to 3 (1.5x faster)
export const PLATFORM_GAP = 600;
export const MIN_PLATFORM_Y = 300;
export const MAX_PLATFORM_Y = 200; // Same as MIN to keep platforms at consistent height

// Game settings
export const SCROLL_SPEED = 2;
export const GRAVITY_ENABLED = true;
export const PLATFORM_TYPES = ['blue', 'green', 'yellow'] as const;

// Projects data
export const PROJECTS = [
  {
    type: 'blue',
    title: 'Housing Solution',
    description: 'We developed an innovative platform that connects homeowners with renters, streamlining the housing search process and making it more accessible. Our solution increased successful matches by 45% and reduced average search time by 30%.',
    link: 'https://example.com/housing'
  },
  {
    type: 'green',
    title: 'Real Estate Platform',
    description: 'Our team created a comprehensive real estate management system that simplifies property transactions and improves client communication. The platform features AI-powered property matching and automated document processing.',
    link: 'https://example.com/realestate'
  },
  {
    type: 'yellow',
    title: 'Marketing for Kidzink',
    description: 'We implemented a targeted marketing strategy for Kidzink that increased their brand visibility and customer engagement by over 200%. The campaign included interactive social media content and gamified educational elements.',
    link: 'https://example.com/kidzink'
  },
  {
    type: 'blue',
    title: 'Healthcare App',
    description: 'Developed a revolutionary healthcare application that connects patients with healthcare providers in real-time. Features include AI-powered symptom checking and secure video consultations.',
    link: 'https://example.com/healthcare'
  },
  {
    type: 'green',
    title: 'E-learning Platform',
    description: 'Created an adaptive learning platform that personalizes content based on student performance. Implemented advanced analytics to track progress and suggest optimal learning paths.',
    link: 'https://example.com/elearning'
  }
];
