// Game physics
export const GRAVITY = 0.5;
export const JUMP_FORCE = -15;
export const IDLE_BOUNCE_FORCE = -8;
export const GROUND_FRICTION = 0.8;
export const BOUNCE_FACTOR = 0.7;

// Ball properties
export const BALL_SIZE = 50;
export const BALL_INITIAL_VELOCITY = { x: 0, y: -8 };
export const BALL_POSITION_X = 150;

// Platform properties
export const PLATFORM_WIDTH = 400;
export const PLATFORM_HEIGHT = 150;
export const PLATFORM_SPEED = 3;
export const PLATFORM_GAP = 300;
export const MIN_PLATFORM_Y = 200;
export const MAX_PLATFORM_Y = 200;

// Line properties
export const LINE_OFFSET = 10;

// Game settings
export const SCROLL_SPEED = 2;
export const GRAVITY_ENABLED = true;
export const PLATFORM_TYPES = ['blue', 'green', 'yellow'] as const;

// Projects data
export const PROJECTS = [
  {
    type: 'blue',
    title: 'Positioning design firms in public infrastructure',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project1'
  },
  {
    type: 'green',
    title: 'Building digital communities around terrain mapping',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project2'
  },
  {
    type: 'yellow',
    title: 'Using AI to reshape real estate valuation',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project3'
  },
  {
    type: 'blue',
    title: 'Helping breeders sell livestock products digitally',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project4'
  },
  {
    type: 'green',
    title: 'Crafting brand strategies for B2B solar lead generation',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project5'
  },
  {
    type: 'yellow',
    title: 'Building integrated platforms for education operations',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project6'
  },
  {
    type: 'blue',
    title: 'Bringing traditional dance to global audiences',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project7'
  },
  {
    type: 'green',
    title: 'Repositioning bespoke metal fabrication brands',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project8'
  },
  {
    type: 'yellow',
    title: 'Creating agentic workflows for finance operations',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project9'
  },
  {
    type: 'blue',
    title: 'Launching STEAM-focused design and tech labs',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project10'
  },
  {
    type: 'green',
    title: 'Amplifying commercial interiors through material-driven design',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project11'
  },
  {
    type: 'yellow',
    title: 'Optimizing housing startup workflows through design algorithms',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project12'
  },
  {
    type: 'blue',
    title: 'Reimagining suburban housing with prefab solutions',
    description: 'Placeholder description for project overview. Summarizes the objective and impact.',
    mobileDescription: 'Brief summary for mobile view.',
    link: 'https://example.com/project13'
  }
];