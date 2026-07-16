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
        icon: <Code size={24} />, 
        desc: 'Programming fundamentals with C and C++', 
        color: '#4F46E5',
        duration: '6 Months',
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
        icon: <Layout size={24} />, 
        desc: 'Create stunning websites with HTML, CSS, JavaScript', 
        color: '#7C3AED',
        duration: '6 Months',
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
        icon: <Megaphone size={24} />, 
        desc: 'SEO, Social Media, and online marketing strategies', 
        color: '#EC4899',
        duration: '4 Months',
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
        icon: <Coffee size={24} />, 
        desc: 'Full-stack development with Java and Python', 
        color: '#EF4444',
        duration: '8 Months',
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
        icon: <Globe size={24} />, 
        desc: 'Modern JavaScript for web and app development', 
        color: '#F59E0B',
        duration: '6 Months',
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
        icon: <Brain size={24} />, 
        desc: 'AI and machine learning algorithms', 
        color: '#10B981',
        duration: '8 Months',
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
        icon: <Wifi size={24} />, 
        desc: 'Internet of Things and smart devices', 
        color: '#3B82F6',
        duration: '6 Months',
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
        icon: <Network size={24} />, 
        desc: 'Computer networks and security fundamentals', 
        color: '#8B5CF6',
        duration: '6 Months',
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
        icon: <Database size={24} />, 
        desc: 'Data analytics and visualization techniques', 
        color: '#14B8A6',
        duration: '8 Months',
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
        icon: <Layout size={24} />, 
        desc: '2D drafting and 3D modeling with AutoCAD', 
        color: '#4F46E5',
        duration: '4 Months',
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
        icon: <Box size={24} />, 
        desc: '3D CAD design and product modeling', 
        color: '#7C3AED',
        duration: '6 Months',
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
        icon: <Settings size={24} />, 
        desc: 'Advanced 3D design and engineering', 
        color: '#EC4899',
        duration: '8 Months',
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
        icon: <Sparkles size={24} />, 
        desc: 'Parametric 3D modeling software', 
        color: '#EF4444',
        duration: '6 Months',
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
        icon: <Zap size={24} />, 
        desc: 'Computer numerical control programming', 
        color: '#F59E0B',
        duration: '6 Months',
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
        icon: <Shield size={24} />, 
        desc: 'Engineering simulation and analysis', 
        color: '#10B981',
        duration: '8 Months',
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
        icon: <Box size={24} />, 
        desc: '3D mechanical design and engineering', 
        color: '#3B82F6',
        duration: '6 Months',
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
        icon: <Layout size={24} />, 
        desc: 'Architectural and structural drafting', 
        color: '#4F46E5',
        duration: '4 Months',
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
        icon: <Layers size={24} />, 
        desc: 'Building Information Modeling (BIM)', 
        color: '#7C3AED',
        duration: '6 Months',
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
        icon: <Shield size={24} />, 
        desc: 'Structural analysis and design', 
        color: '#EC4899',
        duration: '6 Months',
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
        icon: <Sparkles size={24} />, 
        desc: '3D visualization and rendering', 
        color: '#EF4444',
        duration: '6 Months',
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
        icon: <Layout size={24} />, 
        desc: '3D modeling for architecture and design', 
        color: '#F59E0B',
        duration: '4 Months',
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
        icon: <Cpu size={24} />, 
        desc: 'Embedded hardware and software design', 
        color: '#4F46E5',
        duration: '6 Months',
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
        icon: <Settings size={24} />, 
        desc: 'Industrial automation and control systems', 
        color: '#7C3AED',
        duration: '6 Months',
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
        icon: <BarChart size={24} />, 
        desc: 'Technical computing and simulation', 
        color: '#EC4899',
        duration: '6 Months',
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
        icon: <Bot size={24} />, 
        desc: 'Robotics design and programming', 
        color: '#EF4444',
        duration: '8 Months',
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
        icon: <Network size={24} />, 
        desc: 'Computer and communication networks', 
        color: '#F59E0B',
        duration: '6 Months',
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
        icon: <Smartphone size={24} />, 
        desc: 'Android app development for mobile', 
        color: '#10B981',
        duration: '6 Months',
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
          <div className="dc-courses-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDomain}
                className="dc-courses-grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {courses[selectedDomain].map((course, index) => (
                  <motion.div
                    key={course.name}
                    className="dc-course-card"
                    onClick={() => openModal(course)}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.05,
                        duration: 0.4,
                        type: 'spring',
                        stiffness: 200
                      }
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -6,
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      '--card-color': course.color,
                      cursor: 'pointer'
                    }}
                  >
                    <div className="dc-course-icon">{course.icon}</div>
                    <div className="dc-course-info">
                      <h3>{course.name}</h3>
                      <p>{course.desc}</p>
                    </div>
                    <div className="dc-course-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="dc-course-glow"></div>
                    <div className="dc-click-hint">Click to learn more →</div>
                  </motion.div>
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