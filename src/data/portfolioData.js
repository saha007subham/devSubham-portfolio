export const developerData = {
  name: "Subham Saha",
  title: "Frontend Engineer",
  subtitle: "Crafting scalable digital experiences",
  tagline: "Building high-performance interactive interfaces, immersive 3D graphics, and pixel-perfect design systems with cinematic physics-based animations.",
  email: "subham.saha@example.com",
  location: "Kolkata, India",
  availability: "Available for new projects",
  resumeUrl: "#",
  socials: [
    { name: "GitHub", url: "https://github.com", iconName: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", iconName: "Twitter" },
    { name: "Dribbble", url: "https://dribbble.com", iconName: "Dribbble" }
  ]
};

export const menuItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" }
];

export const experienceTimeline = [
  {
    company: "Vercel",
    role: "Lead Frontend Engineer",
    duration: "2024 - Present",
    description: "Architecting the future of developer tools and standardizing core components. Leading the performance optimization of core React server-rendered dashboards.",
    achievements: [
      "Optimized dashboard initial load time by 34% using custom Web Worker bundles.",
      "Redesigned the serverless deployment logs interface into an interactive WebGL-accelerated stream.",
      "Maintained key UI layout patterns for Vercel's global design system."
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Rust"]
  },
  {
    company: "Linear",
    role: "Senior Interactive Developer",
    duration: "2022 - 2024",
    description: "Engineered smooth desktop-app grade micro-interactions, complex project canvas, and dynamic custom animations for productivity metrics.",
    achievements: [
      "Built custom physics-driven keyboard shortcuts navigation engine to facilitate absolute keyboard usability.",
      "Developed high-fidelity kanban drag-and-drop mechanics using custom matrix transformations for zero layout shift.",
      "Collaborated on fluid design tokens for their highly acclaimed dark & light themes."
    ],
    tech: ["React.js", "GSAP", "Framer Motion", "CSS Shaders", "TypeScript"]
  },
  {
    company: "Apple Store",
    role: "UI/UX Engineering Intern",
    duration: "2021 - 2022",
    description: "Developed marketing experience web modules for hardware announcements and refined accessibility standards across commerce panels.",
    achievements: [
      "Engineered fluid scroll-scrub animations for Apple flagship hardware pages utilizing high-density sequence frames.",
      "Refined screen-reader elements and accessible navigation overlays for global accessibility compliance."
    ],
    tech: ["Vanilla JS", "GSAP", "Webkit Animations", "Sass", "ARIA Standards"]
  }
];

export const skillsData = [
  { name: "React.js", level: 96, category: "Frontend" },
  { name: "JavaScript", level: 98, category: "Language" },
  { name: "TypeScript", level: 92, category: "Language" },
  { name: "Three.js", level: 85, category: "WebGL" },
  { name: "Framer Motion", level: 95, category: "Animation" },
  { name: "GSAP ScrollTrigger", level: 90, category: "Animation" },
  { name: "Tailwind CSS", level: 98, category: "Styling" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "HTML5 / CSS3", level: 99, category: "Foundation" }
];

export const projectsData = [
  {
    id: 1,
    title: "Neural Canvas Shader",
    description: "An Awwwards-winning WebGL interactive digital studio. Generating stunning physics-based shader dynamics and particle vectors mapped directly to ambient sound frequencies.",
    longDescription: "An immersive creative playground allowing artists to manipulate mathematically perfect fractals, generative organic forms, and mouse-reactive particle storms directly in-browser. Fully optimized using GPGPU particles and complex custom vertex shaders.",
    tech: ["Three.js", "React Three Fiber", "GLSL Shaders", "GSAP"],
    github: "https://github.com",
    live: "https://example.com",
    size: "large", // for bento layout
    bgGradient: "from-cyan-400/20 via-blue-500/10 to-violet-600/5",
    accentColor: "#00D9FF"
  },
  {
    id: 2,
    title: "Linear Velocity Flow",
    description: "High-performance collaborative roadmap editor. Implements fluid physics-based drag bento dashboards with multi-user presence.",
    longDescription: "A productivity tool that replicates native application interactions in a web browser. Features sub-millisecond local-first updates, dynamic layout animations, keyboard-driven navigation, and magnetic grid snap overlays.",
    tech: ["React.js", "Framer Motion", "Zustand", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
    bgGradient: "from-violet-400/10 via-pink-500/10 to-transparent",
    accentColor: "#8B5CF6"
  },
  {
    id: 3,
    title: "Etheria SaaS Platform",
    description: "Premium fintech banking interface. Features custom smooth scroll systems, beautiful glassmorphism graphics, and premium micro-interactions.",
    longDescription: "A high-end visualizer for complex multi-chain assets. Featuring smooth-scroll dashboard animations, beautiful canvas financial analytics charts, soft shadow gradients, and Vercel-inspired interactive billing card visualizers.",
    tech: ["React.js", "Lenis Scroll", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
    bgGradient: "from-blue-400/10 via-cyan-500/10 to-transparent",
    accentColor: "#3B82F6"
  },
  {
    id: 4,
    title: "Quantum Browser Compiler",
    description: "A minimalist coding playground compiling WebAssembly and displaying real-time metrics with glowing cybernetic terminal logs.",
    longDescription: "An online sandbox dedicated to compiling low-level web-assembly packages. Equipped with syntax-highlighted code editors, real-time CPU profiling dashboards, and gorgeous glass-panel logs with glow focus indicator lines.",
    tech: ["TypeScript", "WASM", "React", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    size: "small",
    bgGradient: "from-cyan-400/10 to-violet-500/15",
    accentColor: "#00D9FF"
  }
];

export const statsData = [
  { value: "3+", label: "Years Experience", description: "In top product companies" },
  { value: "20+", label: "Projects Completed", description: "Bespoke digital platforms" },
  { value: "1K+", label: "Active Users Served", description: "With optimized dashboards" },
  { value: "99.9%", label: "Lighthouse Score", description: "Obsessive about performance" }
];
