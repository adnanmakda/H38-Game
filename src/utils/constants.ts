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
export const PLATFORM_HEIGHT = 120;
export const PLATFORM_SPEED = 3; // 1.5x faster
export const PLATFORM_GAP = 300;
export const MIN_PLATFORM_Y = 200;
export const MAX_PLATFORM_Y = 200; // Same as MIN for consistency

// Game settings
export const SCROLL_SPEED = 2;
export const GRAVITY_ENABLED = true;
export const PLATFORM_TYPES = ['blue', 'green', 'yellow'] as const;

// Project cards data
export const PROJECTS = [
  {
    type: 'blue',
    title: 'Housing Solution',
    description: `Bronze-winged jacanas are found singly or in pairs foraging on aquatic vegetation. They balance on their long legs and long toes, and feed on plant material (claimed to be purely incidental), insects and other invertebrates picked from the floating vegetation or the water's surface. Call is a wheezy piping seek-seek-seek given mostly in alarm. When threatened they sometimes hide by submerging themselves.

The breeding season starts after the rains (June to September in India but occasional breeding in March rains reported in Rajasthan). Males defend territories from other males with open wing and neck stretched displays which can escalate to pecking. The territory maintenance activities are at a maximum from around 9 to 11 a.m.

The nest is a small platform of stems and leaves of Pistia, Nymphoides, Hydrilla, and Eichhornia placed on a mat of vegetation, but eggs may also be laid directly on the leaf of a lotus plant. The usual clutch is four. The eggs are very conical, glossy brown with irregular black zig-zag markings. Incubation and care of the young is entirely left to males. The eggs hatch in 29 days.

Predation rates of eggs are high—up to 94% were lost in one study to various predators including birds and turtles. Young chicks may be sheltered between the wings and carried to safety. They become independent of their father when they are about ten weeks old.

The nematode parasites Gongylonema indica and Stellocaronema alii, and the feather louse Rallicola indicus have been described from specimens of the bronze-winged jacana.`,
    link: 'https://example.com/housing'
  },
  {
    type: 'green',
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate management system featuring AI-powered property matching, client communications, and automated document processing.',
    link: 'https://example.com/realestate'
  },
  {
    type: 'yellow',
    title: 'Marketing for Kidzink',
    description: 'An engaging marketing campaign that boosted Kidzink’s visibility and client engagement through interactive media and gamified education tools.',
    link: 'https://example.com/kidzink'
  },
  {
    type: 'blue',
    title: 'Healthcare App',
    description: 'A telemedicine platform connecting patients and providers with features like AI symptom checkers and secure video consultations.',
    link: 'https://example.com/healthcare'
  },
  {
    type: 'green',
    title: 'E-learning Platform',
    description: 'An adaptive education platform that personalizes learning paths based on student performance, with real-time analytics and progress tracking.',
    link: 'https://example.com/elearning'
  }
];
