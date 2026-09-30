
// src/pages/DomainsCourses.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Megaphone, 
  Coffee, 
  Globe, 
  Bot,
  Wifi,
  Network,
  Database,
  Cpu,
  Settings,
  Layers,
  Box,
  Sparkles,
  Zap,
  Shield,
  Layout,
  Smartphone,
  BarChart,
  Brain,
  X,
  Clock,
  Award,
  Users,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DomainsCourses.css';

// Load all course images from src/assets/images/courses
const courseImages = import.meta.glob(
  '../assets/images/courses/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

// Convert the stored image path into the Vite-generated URL
const getCourseImage = (imagePath, courseName) => {
  // If an image path is already provided
  if (imagePath) {
    const fileName = imagePath.split('/').pop();

    const foundImage = Object.entries(courseImages).find(
      ([path]) => path.endsWith(`/${fileName}`)
    );

    if (foundImage) {
      return foundImage[1];
    }
  }

  // Automatic fallback based on course name
  const fallbackName = courseName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const extensions = ['jpg', 'jpeg', 'png', 'webp'];

  for (const extension of extensions) {
    const foundImage = Object.entries(courseImages).find(
      ([path]) =>
        path.endsWith(`/${fallbackName}.${extension}`)
    );

    if (foundImage) {
      return foundImage[1];
    }
  }

  return '';
};


export default function DomainsCourses() {
  const [selectedDomain, setSelectedDomain] = useState('cse');
  const [selectedCourse, setSelectedCourse] = useState(null); // Keep as null initially
  const [showModal, setShowModal] = useState(false);


  

  const domains = [
    { id: 'cse', name: 'CSE/IT', icon: <Code size={20} /> },
    { id: 'mechanical', name: 'Mechanical', icon: <Settings size={20} /> },
    { id: 'civil', name: 'Civil', icon: <Layers size={20} /> },
    { id: 'ece', name: 'ECE & Electrical', icon: <Zap size={20} /> }
  ];

  const courses = {
    cse: [
      { 
        name: 'C/C++', 
        image: '/assets/images/courses/c-cpp.jpg',
        icon: <Code size={24} />, 
        desc: 'Programming fundamentals with C and C++', 
        color: '#4F46E5',
        duration: '6 Months & 45 days',
        students: '500+',
        level: 'Beginner to Advanced',
        overview: 'Master the fundamentals of programming with C and C++. This comprehensive course covers everything from basic syntax to advanced concepts like pointers, memory management, and object-oriented programming.',
        curriculum: [
          'Introduction to C Programming',
          'Variables, Data Types & Operators',
          'Control Structures (if, switch, loops)',
          'Functions & Arrays',
          'Pointers & Memory Management',
          'Structures & Unions',
          'File Handling',
          'Introduction to C++',
          'Object-Oriented Programming',
          'Classes & Objects',
          'Inheritance & Polymorphism',
          'Templates & STL'
        ],
        outcomes: [
          'Write efficient C and C++ programs',
          'Understand memory management and pointers',
          'Implement object-oriented programming concepts',
          'Build real-world applications',
          'Prepare for competitive programming'
        ]
      },
      { 
        name: 'Web Designing', 
        image: '/assets/images/courses/web-designing.jpg',
        icon: <Layout size={24} />, 
        desc: 'Create stunning websites with HTML, CSS, JavaScript', 
        color: '#7C3AED',
        duration: '6 Months & 45 days',
        students: '400+',
        level: 'Beginner to Intermediate',
        overview: 'Learn to create beautiful, responsive websites using modern web technologies. This course covers HTML5, CSS3, JavaScript, and essential design principles.',
        curriculum: [
          'HTML5 Fundamentals',
          'CSS3 Styling & Layouts',
          'Responsive Web Design',
          'Flexbox & Grid',
          'CSS Animations',
          'JavaScript Basics',
          'DOM Manipulation',
          'Event Handling',
          'Forms & Validation',
          'Website Project'
        ],
        outcomes: [
          'Create responsive websites',
          'Design modern user interfaces',
          'Implement interactive features',
          'Build a complete portfolio website',
          'Understand web design principles'
        ]
      },
      { 
        name: 'Digital Marketing', 
        image: '/assets/images/courses/digital-marketing.jpg',
        icon: <Megaphone size={24} />, 
        desc: 'SEO, Social Media, and online marketing strategies', 
        color: '#EC4899',
        duration: '6 Months & 45 days',
        students: '300+',
        level: 'Beginner',
        overview: 'Master the art of digital marketing. This course covers SEO, social media marketing, content marketing, email marketing, and analytics.',
        curriculum: [
          'Digital Marketing Fundamentals',
          'Search Engine Optimization (SEO)',
          'Social Media Marketing',
          'Content Marketing Strategy',
          'Email Marketing Campaigns',
          'Google Analytics',
          'Pay-Per-Click Advertising',
          'Conversion Rate Optimization',
          'Digital Marketing Strategy'
        ],
        outcomes: [
          'Create effective digital marketing strategies',
          'Optimize websites for search engines',
          'Run social media campaigns',
          'Analyze marketing data',
          'Build brand awareness online'
        ]
      },
      { 
        name: 'Java/Python', 
        image: '/assets/images/courses/java-python.jpg',
        icon: <Coffee size={24} />, 
        desc: 'Full-stack development with Java and Python', 
        color: '#EF4444',
        duration: '6 Months & 45 days',
        students: '350+',
        level: 'Beginner to Advanced',
        overview: 'Become a full-stack developer with Java and Python. This comprehensive course covers backend development, APIs, database integration, and modern web frameworks.',
        curriculum: [
          'Python Fundamentals',
          'Java Fundamentals',
          'Object-Oriented Programming',
          'Data Structures & Algorithms',
          'Database Integration',
          'REST API Development',
          'Spring Boot Framework',
          'Django Framework',
          'Frontend Integration',
          'Full-Stack Project'
        ],
        outcomes: [
          'Build full-stack web applications',
          'Create REST APIs',
          'Work with databases',
          'Use modern frameworks',
          'Deploy applications'
        ]
      },
      { 
        name: 'JavaScript', 
        image: '/assets/images/courses/javascript.jpg',
        icon: <Globe size={24} />, 
        desc: 'Modern JavaScript for web and app development', 
        color: '#F59E0B',
        duration: '6 Months & 45 days',
        students: '450+',
        level: 'Intermediate',
        overview: 'Master modern JavaScript for web and mobile app development. Learn ES6+, React, Node.js, and build full-stack applications.',
        curriculum: [
          'ES6+ Features',
          'DOM Manipulation',
          'Asynchronous JavaScript',
          'API Integration',
          'React.js Fundamentals',
          'State Management',
          'Routing & Navigation',
          'Node.js & Express',
          'Full-Stack Applications'
        ],
        outcomes: [
          'Build interactive web applications',
          'Create React apps',
          'Develop Node.js APIs',
          'Work with modern JavaScript',
          'Build full-stack projects'
        ]
      },
      { 
        name: 'Machine Learning', 
        image: '/assets/images/courses/machine-learning.jpg',
        icon: <Brain size={24} />, 
        desc: 'AI and machine learning algorithms', 
        color: '#10B981',
        duration: '6 Months & 45 days',
        students: '200+',
        level: 'Advanced',
        overview: 'Learn machine learning algorithms, data preprocessing, model building, and deployment. Build real-world AI applications.',
        curriculum: [
          'Mathematics for ML',
          'Python for Data Science',
          'Data Preprocessing',
          'Supervised Learning',
          'Unsupervised Learning',
          'Deep Learning',
          'Neural Networks',
          'Model Deployment',
          'ML Project'
        ],
        outcomes: [
          'Build machine learning models',
          'Work with real-world data',
          'Deploy ML applications',
          'Understand AI concepts',
          'Create intelligent systems'
        ]
      },
      { 
        name: 'IoT Training', 
        image: '/assets/images/courses/iot.jpg',
        icon: <Wifi size={24} />, 
        desc: 'Internet of Things and smart devices', 
        color: '#3B82F6',
        duration: '6 Months & 45 days',
        students: '150+',
        level: 'Intermediate',
        overview: 'Learn to build smart devices and IoT solutions. This course covers sensors, microcontrollers, cloud integration, and IoT application development.',
        curriculum: [
          'IoT Fundamentals',
          'Arduino & Raspberry Pi',
          'Sensor Integration',
          'Communication Protocols',
          'Cloud Integration',
          'IoT Application Development',
          'Data Analytics',
          'Smart Device Projects'
        ],
        outcomes: [
          'Build IoT projects',
          'Work with sensors and microcontrollers',
          'Integrate with cloud platforms',
          'Create smart solutions',
          'Understand IoT architecture'
        ]
      },
      { 
        name: 'Networking', 
        image: '/assets/images/courses/networking.jpg',
        icon: <Network size={24} />, 
        desc: 'Computer networks and security fundamentals', 
        color: '#8B5CF6',
        duration: '6 Months & 45 days',
        students: '250+',
        level: 'Beginner',
        overview: 'Master networking concepts including TCP/IP, routing, switching, network security, and troubleshooting. Prepare for certification.',
        curriculum: [
          'Network Fundamentals',
          'OSI Model & TCP/IP',
          'IP Addressing & Subnetting',
          'Routing & Switching',
          'Network Security',
          'Firewall Management',
          'Wireless Networks',
          'Network Troubleshooting'
        ],
        outcomes: [
          'Configure network devices',
          'Implement network security',
          'Troubleshoot network issues',
          'Understand networking protocols',
          'Prepare for certification'
        ]
      },
      { 
        name: 'Data Science', 
        image: '/assets/images/courses/data-science.jpg',
        icon: <Database size={24} />, 
        desc: 'Data analytics and visualization techniques', 
        color: '#14B8A6',
        duration: '6 Months & 45 days',
        students: '180+',
        level: 'Advanced',
        overview: 'Learn data science techniques including data analysis, visualization, statistics, and predictive modeling. Use Python and real-world datasets.',
        curriculum: [
          'Data Science Fundamentals',
          'Statistics for Data Science',
          'Data Visualization',
          'Exploratory Data Analysis',
          'Machine Learning for Data Science',
          'SQL for Data Science',
          'Big Data Technologies',
          'Data Science Project'
        ],
        outcomes: [
          'Analyze complex datasets',
          'Create data visualizations',
          'Build predictive models',
          'Work with big data',
          'Drive data-based decisions'
        ]
      },
      { 
        name: 'Artificial Intelligence', 
        image: '/assets/images/courses/artificial-intelligence.jpg',
        icon: <Cpu size={24} />, 
        desc: 'AI concepts and real-world applications', 
        color: '#F472B6',
        duration: '10 Months',
        students: '120+',
        level: 'Advanced',
        overview: 'Learn artificial intelligence concepts, neural networks, natural language processing, computer vision, and build AI applications.',
        curriculum: [
          'AI Fundamentals',
          'Neural Networks',
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning',
          'AI Ethics & Safety',
          'AI Project'
        ],
        outcomes: [
          'Build AI-powered applications',
          'Work with neural networks',
          'Implement NLP solutions',
          'Create computer vision systems',
          'Understand AI ethics'
        ]
      }
    ],
    mechanical: [
      { 
        name: 'AutoCAD 2D, 3D', 
        image: '/assets/images/courses/autocad-civil.jpg',
        icon: <Layout size={24} />, 
        desc: '2D drafting and 3D modeling with AutoCAD', 
        color: '#4F46E5',
        duration: '6 Months & 45 days',
        students: '400+',
        level: 'Beginner',
        overview: 'Master AutoCAD for 2D drafting and 3D modeling. Learn to create precise technical drawings and 3D models for engineering and design.',
        curriculum: [
          'AutoCAD Interface',
          '2D Drafting Commands',
          'Precision Drawing',
          'Dimensioning & Annotations',
          'Layers & Properties',
          '3D Modeling Basics',
          'Surface & Solid Modeling',
          'Rendering & Visualization',
          'Project: Complete Drawing'
        ],
        outcomes: [
          'Create 2D technical drawings',
          'Build 3D models',
          'Use AutoCAD professionally',
          'Understand engineering drawings',
          'Complete design projects'
        ]
      },
      { 
        name: 'SolidWorks', 
        image: '/assets/images/courses/solidworks.jpg',
        icon: <Box size={24} />, 
        desc: '3D CAD design and product modeling', 
        color: '#7C3AED',
        duration: '6 Months & 45 days',
        students: '300+',
        level: 'Intermediate',
        overview: 'Learn SolidWorks for 3D CAD design, product modeling, and engineering simulation. Build complex assemblies and detailed designs.',
        curriculum: [
          'SolidWorks Interface',
          'Sketching & Features',
          'Part Modeling',
          'Assembly Design',
          'Detailing & Drawings',
          'Surface Modeling',
          'Sheet Metal Design',
          'Simulation & Analysis',
          'Design Project'
        ],
        outcomes: [
          'Create 3D product models',
          'Build assemblies',
          'Generate engineering drawings',
          'Perform design analysis',
          'Use SolidWorks professionally'
        ]
      },
      { 
        name: 'CATIA', 
        image: '/assets/images/courses/catia.jpg',
        icon: <Settings size={24} />, 
        desc: 'Advanced 3D design and engineering', 
        color: '#EC4899',
        duration: '6 Months & 45 days',
        students: '150+',
        level: 'Advanced',
        overview: 'Master CATIA for advanced 3D design, surface modeling, and engineering analysis. Used in aerospace and automotive industries.',
        curriculum: [
          'CATIA Fundamentals',
          'Part Design',
          'Assembly Design',
          'Surface Design',
          'Drafting & Detailing',
          'Generative Shape Design',
          'DMU & Kinematics',
          'Complex Design Projects'
        ],
        outcomes: [
          'Master CATIA for advanced design',
          'Create complex surfaces',
          'Build assemblies',
          'Perform kinematic analysis',
          'Prepare for engineering roles'
        ]
      },
      { 
        name: 'Pro-E / Creo', 
        image: '/assets/images/courses/pro-e-creo.jpg',
        icon: <Sparkles size={24} />, 
        desc: 'Parametric 3D modeling software', 
        color: '#EF4444',
        duration: '6 Months & 45 days',
        students: '200+',
        level: 'Intermediate',
        overview: 'Learn Parametric modeling with Pro-E and Creo. Master 3D modeling, assemblies, and design documentation.',
        curriculum: [
          'Pro-E/Creo Interface',
          'Part Modeling',
          'Advanced Features',
          'Assembly Design',
          'Drafting & Detailing',
          'Surface Modeling',
          'Design Projects'
        ],
        outcomes: [
          'Create parametric models',
          'Build assemblies',
          'Generate detailed drawings',
          'Use Pro-E/Creo professionally',
          'Complete design projects'
        ]
      },
      { 
        name: 'CNC Programming', 
        image: '/assets/images/courses/cnc-programming.jpg',
        icon: <Zap size={24} />, 
        desc: 'Computer numerical control programming', 
        color: '#F59E0B',
        duration: '6 Months & 45 days',
        students: '180+',
        level: 'Intermediate',
        overview: 'Master CNC programming for manufacturing. Learn G-code, machine operations, and precision manufacturing techniques.',
        curriculum: [
          'CNC Fundamentals',
          'G-Code Programming',
          'Machine Operations',
          'Tool Path Optimization',
          'Work Holding & Fixtures',
          'Precision Measurement',
          'Manufacturing Projects'
        ],
        outcomes: [
          'Write CNC programs',
          'Operate CNC machines',
          'Optimize manufacturing processes',
          'Understand precision manufacturing',
          'Create production parts'
        ]
      },
      { 
        name: 'ANSYS', 
        image: '/assets/images/courses/ansys.jpg',
        icon: <Shield size={24} />, 
        desc: 'Engineering simulation and analysis', 
        color: '#10B981',
        duration: '6 Months & 45 days',
        students: '120+',
        level: 'Advanced',
        overview: 'Learn engineering simulation and analysis with ANSYS. Master FEA, thermal analysis, fluid dynamics, and structural analysis.',
        curriculum: [
          'ANSYS Workbench',
          'Finite Element Analysis',
          'Structural Analysis',
          'Thermal Analysis',
          'Fluid Dynamics',
          'Modal & Harmonic Analysis',
          'Optimization Techniques',
          'Simulation Projects'
        ],
        outcomes: [
          'Perform FEA analysis',
          'Simulate engineering problems',
          'Analyze structures and fluids',
          'Optimize designs',
          'Use ANSYS professionally'
        ]
      },
      { 
        name: 'Inventor / Fusion', 
        image: '/assets/images/courses/inventor-fusion.jpg',
        icon: <Box size={24} />, 
        desc: '3D mechanical design and engineering', 
        color: '#3B82F6',
        duration: '6 Months & 45 days',
        students: '250+',
        level: 'Intermediate',
        overview: 'Master Inventor and Fusion for 3D mechanical design, engineering, and simulation. Build complete mechanical designs and assemblies.',
        curriculum: [
          'Autodesk Inventor Fundamentals',
          'Part Modeling',
          'Assembly Design',
          'Fusion 360 Interface',
          '3D Modeling in Fusion',
          'Simulation & Analysis',
          'Manufacturing & CAM',
          'Design Projects'
        ],
        outcomes: [
          'Create 3D mechanical designs',
          'Build assemblies',
          'Perform simulation',
          'Use Inventor/Fusion professionally',
          'Complete engineering projects'
        ]
      }
    ],
    civil: [
      { 
        name: 'AutoCAD 2D, 3D', 
        image: '/assets/images/courses/autocad-civil.jpg',
        icon: <Layout size={24} />, 
        desc: 'Architectural and structural drafting', 
        color: '#4F46E5',
        duration: '6 Months & 45 days',
        students: '350+',
        level: 'Beginner',
        overview: 'Learn AutoCAD for architectural and structural drafting. Master 2D drawings and 3D models for civil engineering projects.',
        curriculum: [
          'AutoCAD for Civil',
          '2D Drafting',
          'Architectural Plans',
          'Structural Drawings',
          'Site Plans',
          '3D Modeling',
          'Project: Complete Building Plan'
        ],
        outcomes: [
          'Create architectural drawings',
          'Develop structural plans',
          'Use AutoCAD for civil projects',
          'Understand building design',
          'Complete construction drawings'
        ]
      },
      { 
        name: 'Revit', 
        image: '/assets/images/courses/revit.jpg',
        icon: <Layers size={24} />, 
        desc: 'Building Information Modeling (BIM)', 
        color: '#7C3AED',
        duration: '6 Months & 45 days',
        students: '200+',
        level: 'Intermediate',
        overview: 'Master Revit for Building Information Modeling. Learn architectural design, structural modeling, and MEP systems integration.',
        curriculum: [
          'Revit Interface',
          'Architectural Modeling',
          'Structural Modeling',
          'MEP Systems',
          'Family Creation',
          'Documentation & Detailing',
          'BIM Collaboration',
          'Project: Complete Building'
        ],
        outcomes: [
          'Create BIM models',
          'Design buildings',
          'Coordinate with MEP',
          'Generate construction documents',
          'Use Revit professionally'
        ]
      },
      { 
        name: 'STAAD Pro', 
        image: '/assets/images/courses/staad-pro.jpg',
        icon: <Shield size={24} />, 
        desc: 'Structural analysis and design', 
        color: '#EC4899',
        duration: '6 Months & 45 days',
        students: '150+',
        level: 'Intermediate',
        overview: 'Learn structural analysis and design with STAAD Pro. Master structural calculations, load analysis, and design of steel and concrete structures.',
        curriculum: [
          'STAAD Pro Interface',
          'Structural Modeling',
          'Load Analysis',
          'Steel Structure Design',
          'Concrete Structure Design',
          'Foundation Design',
          'Dynamic Analysis',
          'Structural Projects'
        ],
        outcomes: [
          'Analyze structures',
          'Design steel and concrete',
          'Perform load calculations',
          'Use STAAD Pro professionally',
          'Complete structural projects'
        ]
      },
      { 
        name: '3ds Max', 
        image: '/assets/images/courses/3ds-max.jpg',
        icon: <Sparkles size={24} />, 
        desc: '3D visualization and rendering', 
        color: '#EF4444',
        duration: '6 Months & 45 days',
        students: '180+',
        level: 'Beginner',
        overview: 'Master 3ds Max for 3D visualization, architectural rendering, and animation. Create stunning visualizations for projects.',
        curriculum: [
          '3ds Max Interface',
          '3D Modeling',
          'Materials & Textures',
          'Lighting Setup',
          'Architectural Visualization',
          'Animation Basics',
          'Rendering & Output',
          'Visualization Projects'
        ],
        outcomes: [
          'Create 3D visualizations',
          'Render architectural projects',
          'Design interiors and exteriors',
          'Use 3ds Max professionally',
          'Build portfolio of renderings'
        ]
      },
      { 
        name: 'Google SketchUp', 
        image: '/assets/images/courses/sketchup.jpg',
        icon: <Layout size={24} />, 
        desc: '3D modeling for architecture and design', 
        color: '#F59E0B',
        duration: '6 Months & 45 days',
        students: '250+',
        level: 'Beginner',
        overview: 'Learn Google SketchUp for 3D modeling, architectural design, and visualization. Quick and intuitive 3D modeling for design.',
        curriculum: [
          'SketchUp Interface',
          '3D Modeling Basics',
          'Architectural Modeling',
          'Components & Groups',
          'Materials & Textures',
          'Scenes & Animation',
          'Rendering with V-Ray',
          'Design Projects'
        ],
        outcomes: [
          'Create 3D models',
          'Design buildings',
          'Present design concepts',
          'Use SketchUp professionally',
          'Complete design projects'
        ]
      }
    ],
    ece: [
      { 
        name: 'Embedded System', 
        image: '/assets/images/courses/embedded-system.jpg',
        icon: <Cpu size={24} />, 
        desc: 'Embedded hardware and software design', 
        color: '#4F46E5',
        duration: '6 Months & 45 days',
        students: '150+',
        level: 'Intermediate',
        overview: 'Learn embedded systems design, microcontroller programming, and hardware-software integration for smart devices and IoT solutions.',
        curriculum: [
          'Embedded Systems Fundamentals',
          'Microcontroller Programming',
          'Hardware Design',
          'Software Integration',
          'Real-Time Operating Systems',
          'Communication Protocols',
          'IoT Applications',
          'Embedded Projects'
        ],
        outcomes: [
          'Design embedded systems',
          'Program microcontrollers',
          'Integrate hardware and software',
          'Build IoT devices',
          'Understand real-time systems'
        ]
      },
      { 
        name: 'Automation', 
        image: '/assets/images/courses/automation.jpg',
        icon: <Settings size={24} />, 
        desc: 'Industrial automation and control systems', 
        color: '#7C3AED',
        duration: '6 Months & 45 days',
        students: '120+',
        level: 'Intermediate',
        overview: 'Master industrial automation, PLC programming, SCADA systems, and control systems for manufacturing and process control.',
        curriculum: [
          'Automation Fundamentals',
          'PLC Programming',
          'SCADA Systems',
          'Control Systems',
          'Industrial Networks',
          'Process Automation',
          'Robotics Integration',
          'Automation Projects'
        ],
        outcomes: [
          'Program PLC systems',
          'Design automation solutions',
          'Implement SCADA systems',
          'Understand industrial control',
          'Create automation projects'
        ]
      },
      { 
        name: 'MATLAB', 
        image: '/assets/images/courses/matlab.jpg',
        icon: <BarChart size={24} />, 
        desc: 'Technical computing and simulation', 
        color: '#EC4899',
        duration: '6 Months & 45 days',
        students: '180+',
        level: 'Intermediate',
        overview: 'Learn MATLAB for technical computing, simulation, and data analysis. Master programming, mathematical modeling, and engineering applications.',
        curriculum: [
          'MATLAB Fundamentals',
          'Programming & Scripting',
          'Matrix Operations',
          'Data Visualization',
          'Simulation & Modeling',
          'Signal Processing',
          'Control Systems',
          'MATLAB Projects'
        ],
        outcomes: [
          'Program in MATLAB',
          'Create simulations',
          'Analyze data',
          'Use for engineering applications',
          'Complete technical projects'
        ]
      },
      { 
        name: 'Robotics', 
        image: '/assets/images/courses/robotics.jpg',
        icon: <Bot size={24} />, 
        desc: 'Robotics design and programming', 
        color: '#EF4444',
        duration: '6 Months & 45 days',
        students: '100+',
        level: 'Advanced',
        overview: 'Master robotics design, programming, and control. Learn robot kinematics, sensor integration, and autonomous systems.',
        curriculum: [
          'Robotics Fundamentals',
          'Robot Kinematics',
          'Sensor Integration',
          'Motor Control',
          'Robot Programming',
          'Autonomous Systems',
          'Robotics Simulation',
          'Robotics Projects'
        ],
        outcomes: [
          'Design robots',
          'Program robotic systems',
          'Integrate sensors',
          'Create autonomous systems',
          'Build robotics projects'
        ]
      },
      { 
        name: 'Networking', 
        image: '/assets/images/courses/networking.jpg',
        icon: <Network size={24} />, 
        desc: 'Computer and communication networks', 
        color: '#F59E0B',
        duration: '6 Months & 45 days',
        students: '200+',
        level: 'Beginner',
        overview: 'Master computer networks, communication protocols, network security, and wireless technologies for modern communication systems.',
        curriculum: [
          'Network Fundamentals',
          'Communication Protocols',
          'Wireless Technologies',
          'Network Security',
          'Voice & Data Communication',
          'Optical Networks',
          'Network Management',
          'Networking Projects'
        ],
        outcomes: [
          'Design communication networks',
          'Configure network devices',
          'Implement network security',
          'Understand wireless systems',
          'Manage communication networks'
        ]
      },
      { 
        name: 'Android', 
        image: '/assets/images/courses/android.jpg',
        icon: <Smartphone size={24} />, 
        desc: 'Android app development for mobile', 
        color: '#10B981',
        duration: '6 Months & 45 days',
        students: '250+',
        level: 'Intermediate',
        overview: 'Learn Android app development with Java and Kotlin. Build native Android apps with modern UI and backend integration.',
        curriculum: [
          'Android Fundamentals',
          'Java/Kotlin Programming',
          'UI/UX Design',
          'Activity & Fragments',
          'Database Integration',
          'API Integration',
          'Firebase & Cloud Services',
          'App Deployment'
        ],
        outcomes: [
          'Build Android apps',
          'Design mobile interfaces',
          'Integrate with backend',
          'Publish apps on Play Store',
          'Create professional apps'
        ]
      }
    ]
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSelectedCourse(null);
    }, 300);
  };

  return (
    <>
      <Navbar />
      
      <section className="dc-section">
        <div className="dc-container">
          {/* Header */}
          <motion.div 
            className="dc-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="dc-tag">EXPLORE OUR PROGRAMS</span>
            <h1>Domains & <span className="dc-gradient">Courses</span></h1>
            <p>Choose your domain and discover the courses we offer</p>
          </motion.div>

          {/* Domain Tabs */}
          <div className="dc-domains">
            {domains.map((domain) => (
              <motion.button
                key={domain.id}
                className={`dc-domain-btn ${selectedDomain === domain.id ? 'active' : ''}`}
                onClick={() => setSelectedDomain(domain.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="domain-icon">{domain.icon}</span>
                <span>{domain.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Courses Grid */}
          {/* Courses Grid */}
<div className="dc-courses-wrapper">
  <AnimatePresence mode="wait">
    <motion.div
      key={selectedDomain}
      className="dc-courses-grid"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.45 }}
    >
      {courses[selectedDomain].map((course, index) => (
        <motion.article
          key={course.name}
          className="dc-course-card"
          onClick={() => openModal(course)}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: index * 0.06,
            duration: 0.45
          }}
          whileHover={{
            y: -8
          }}
          style={{
            '--card-color': course.color
          }}
        >

          {/* =====================================
              HOVER POPUP
          ====================================== */}
          <div className="dc-hover-popup">

            <div className="dc-popup-top">
              <span
                className="dc-popup-number"
                style={{
                  background: course.color
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="dc-popup-category">
                {domains.find(
                  (domain) => domain.id === selectedDomain
                )?.name}
              </span>
            </div>

            <h4>{course.name}</h4>

            <p className="dc-popup-overview">
              {course.overview}
            </p>

            <div className="dc-popup-details">

              <div>
                <Clock size={15} />
                <span>{course.duration}</span>
              </div>

              <div>
                <Award size={15} />
                <span>{course.level}</span>
              </div>

              <div>
                <Users size={15} />
                <span>{course.students} learners</span>
              </div>

            </div>

            <div className="dc-popup-learning">

              <strong>You'll learn</strong>

              <ul>
                {course.outcomes
                  .slice(0, 3)
                  .map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>

            </div>

            <div
              className="dc-popup-arrow"
              style={{
                color: course.color
              }}
            >
              Explore course
              <span>→</span>
            </div>

          </div>


          {/* =====================================
              COURSE IMAGE
          ====================================== */}
          <div className="dc-card-image">

           <img
  src={getCourseImage(course.image, course.name)}
  alt={course.name}
  loading="lazy"
/>
            <div className="dc-image-overlay"></div>

            <span
              className="dc-card-badge"
              style={{
                background: course.color
              }}
            >
              {domains.find(
                (domain) => domain.id === selectedDomain
              )?.name}
            </span>

            <span className="dc-card-number">
              {String(index + 1).padStart(2, '0')}
            </span>

          </div>


          {/* =====================================
              CARD CONTENT
          ====================================== */}
          <div className="dc-card-content">

            <div className="dc-card-icon">
              {course.icon}
            </div>

            <h3>{course.name}</h3>

            <p className="dc-card-description">
              {course.desc}
            </p>


            {/* Course information */}
            <div className="dc-card-meta">

              <div className="dc-meta-item">
                <Clock size={15} />
                <span>{course.duration}</span>
              </div>

              <div className="dc-meta-item">
                <Award size={15} />
                <span>{course.level}</span>
              </div>

            </div>


            {/* Explore */}
            <div
              className="dc-explore"
              style={{
                '--explore-color': course.color
              }}
            >
              <span>Explore More</span>

              <span className="dc-explore-arrow">
                <span>→</span>
              </span>
            </div>

          </div>

        </motion.article>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

         
        </div>
      </section>

      {/* Course Modal */}
      <AnimatePresence>
        {showModal && selectedCourse && (
          <motion.div
            className="dc-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="dc-modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                '--modal-color': selectedCourse.color
              }}
            >
              <button className="dc-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="dc-modal-header" style={{ borderBottomColor: selectedCourse.color }}>
                <div className="dc-modal-icon" style={{ background: selectedCourse.color }}>
                  {selectedCourse.icon}
                </div>
                <div>
                  <h2>{selectedCourse.name}</h2>
                  <p>{selectedCourse.desc}</p>
                </div>
              </div>

              <div className="dc-modal-body">
                <div className="dc-modal-stats">
                  <div className="dc-modal-stat">
                    <Clock size={18} />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="dc-modal-stat">
                    <Users size={18} />
                    <span>{selectedCourse.students} Students</span>
                  </div>
                  <div className="dc-modal-stat">
                    <Award size={18} />
                    <span>{selectedCourse.level}</span>
                  </div>
                </div>

                <div className="dc-modal-section">
                  <h4>Overview</h4>
                  <p>{selectedCourse.overview}</p>
                </div>

                <div className="dc-modal-section">
                  <h4>Course Curriculum</h4>
                  <ul className="dc-modal-list">
                    {selectedCourse.curriculum.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dc-modal-section">
                  <h4>What You'll Learn</h4>
                  <ul className="dc-modal-list">
                    {selectedCourse.outcomes.map((item, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dc-modal-footer">
                <Link to="/register" className="dc-modal-btn">
                  <BookOpen size={18} />
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </>
  );
}