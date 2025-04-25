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
    title: 'Housing Solution',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    mobileDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    link: 'https://example.com/housing'
  },
  {
    type: 'green',
    title: 'Real Estate Platform',
    description: 'Our team created a comprehensive real estate management system that simplifies property transactions and improves client communication. The platform features AI-powered property matching and automated document processing.',
    mobileDescription: 'Comprehensive real estate system with AI-powered matching and automated processing.',
    link: 'https://example.com/realestate'
  },
  {
    type: 'yellow',
    title: 'Marketing for Kidzink',
    description: 'We implemented a targeted marketing strategy for Kidzink that increased their brand visibility and customer engagement by over 200%. The campaign included interactive social media content and gamified educational elements.',
    mobileDescription: 'Targeted marketing strategy increasing brand visibility by 200% through interactive content.',
    link: 'https://example.com/kidzink'
  },
  {
    type: 'blue',
    title: 'Healthcare App',
    description: 'Developed a revolutionary healthcare application that connects patients with healthcare providers in real-time. Features include AI-powered symptom checking and secure video consultations.',
    mobileDescription: 'Revolutionary healthcare app with real-time connections and AI symptom checking.',
    link: 'https://example.com/healthcare'
  },
  {
    type: 'green',
    title: 'E-learning Platform',
    description: 'Created an adaptive learning platform that personalizes content based on student performance. Implemented advanced analytics to track progress and suggest optimal learning paths.',
    mobileDescription: 'Adaptive learning platform with personalized content and advanced analytics.',
    link: 'https://example.com/elearning'
  }
];