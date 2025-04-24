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
export const PLATFORM_SPEED = 2; // Increased from 2 to 3 (1.5x faster)
export const PLATFORM_GAP = 300;
export const MIN_PLATFORM_Y = 200;
export const MAX_PLATFORM_Y = 100; // Same as MIN to keep platforms at consistent height

// Game settings
export const SCROLL_SPEED = 2;
export const GRAVITY_ENABLED = true;
export const PLATFORM_TYPES = ['blue', 'green', 'yellow'] as const;

// Projects data
export const PROJECTS = [
  {
    type: 'blue',
    title: 'Housing Solution',
    description: 'Bronze-winged jacanas are found singly or in pairs foraging on aquatic vegetation. They balance on their long legs and long toes, and feed on plant material (claimed to be purely incidental[24]), insects and other invertebrates picked from the floating vegetation or the water's surface. Call is a wheezy piping seek-seek-seek given mostly in alarm. When threatened they sometimes hide by submerging themselves. The breeding season starts after the rains (June to September in India but occasional breeding in March rains reported in Rajasthan[25]). Males defend territories from other males with open wing and neck stretched displays which can escalate to pecking.[26] The territory maintenance activities are at a maximum from around 9 to 11 a.m.[27] The nest is a small platform of stems and leaves of Pistia, Nymphoides, Hydrilla, and Eichhornia placed on a mat of vegetation but eggs may also be laid directly on the leaf of a lotus plant. The usual clutch is four, the eggs are very conical, glossy brown with irregular black zig-zag markings. Incubation and care of the young is entirely left to males. The eggs hatch in 29 days. Predation rates of eggs are high, up to 94% were lost in one study to various predators including birds and turtles.[22] Young chicks may be sheltered between the wings and carried to safety.[19] They become independent of their father when they are about ten weeks old.[22]

The nematode parasites Gongylonema indica and Stellocaronema alii,[28] and the feather louse Rallicola indicus[29][30] have been described from specimens of the bronze-winged jacana.[31]\',
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
