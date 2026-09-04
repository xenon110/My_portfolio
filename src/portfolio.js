import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1800
};

// Hero & Greeting Section
const greeting = {
  username: "Mayank Raj",
  tagline: "SOFTWARE ENGINEER | DATA SCIENCE & AWS ENTHUSIAST",
  title: "Building scalable software, data science solutions & AWS Cloud infrastructure",
  subTitle:
    "Software Engineer with a deep passion for Data Science, Machine Learning, and AWS Cloud Architecture. Experienced in building robust software systems, data pipelines, ML models, and deploying scalable cloud applications on AWS.",
  resumeLink:
    "https://drive.google.com/file/d/1udg0oY2RuPLh2rD2_bMb9wX_DeoL8MvX/view",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/xenon110",
  linkedin: "https://www.linkedin.com/in/mayank-raj-b8b312272/",
  gmail: "mayankrajdto@gmail.com",
  display: true
};

// Technologies I Work With
const technologiesIWorkWith = [
  { name: "Machine Learning", icon: "brain", color: "#FF9900" },
  { name: "Data Science", icon: "chart", color: "#0284C7" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "SQL", icon: "sql", color: "#336791" },
  { name: "Pandas", icon: "pandas", color: "#150458" },
  { name: "NumPy", icon: "numpy", color: "#013243" },
  { name: "Scikit-learn", icon: "sklearn", color: "#F7931E" },
  { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00" },
  { name: "PyTorch", icon: "pytorch", color: "#EE4C2C" },
  { name: "AWS", icon: "aws", color: "#FF9900" },
  { name: "Git", icon: "git", color: "#F05032" }
];

// Detailed Skills Section
const detailedSkills = [
  {
    title: "Python & Data Science",
    usedIn: "MediSkin, Scan2Eat & Sales Forecasting",
    icon: "python",
    whatIBuilt: [
      "Scan2Eat image-processing & nutritional insight algorithms",
      "Sales forecasting dashboards using Pandas & Streamlit",
      "Data preprocessing, ETL & feature engineering pipelines"
    ],
    whatIGained:
      "Deep practical experience in data analysis, statistical modeling, and extracting actionable business insights."
  },
  {
    title: "Deep Learning & AI Applications",
    usedIn: "MediSkin AI, Veyra & Soul AI",
    icon: "tensorflow",
    whatIBuilt: [
      "MediSkin AI skin disease classification model (MobileNetV2, 88.92% accuracy)",
      "Veyra NLP email categorization & inbox summarization using Gemini API",
      "Evaluated 1,000+ LLM responses at Soul AI (+18% output quality improvement)"
    ],
    whatIGained:
      "End-to-end expertise in training CNNs, computer vision, natural language processing, and LLM evaluation."
  },
  {
    title: "Backend & Software Systems",
    usedIn: "Anantech & Enterprise Task Platform",
    icon: "code",
    whatIBuilt: [
      "Enterprise Task Management platform with PostgreSQL & Firebase",
      "Automated Telegram campaign data extraction pipeline at Anantech",
      "Scalable REST APIs using FastAPI & Node.js with role-based access control"
    ],
    whatIGained:
      "Strong capability in designing production backend microservices, database schemas, and API workflows."
  },
  {
    title: "AWS Cloud & Deployment",
    usedIn: "AWS Pipeline & Production Apps",
    icon: "aws",
    whatIBuilt: [
      "AWS ML pipeline utilizing S3, Lambda, SageMaker & CloudWatch",
      "Docker containerized microservices for environment portability",
      "Deployed Veyra AI Email platform to production serving 50+ active users"
    ],
    whatIGained:
      "Hands-on skills in deploying scalable ML systems, serverless functions, and containerized cloud applications."
  }
];

// Cloud & ML Workflow
const cloudWorkflow = {
  title: "Cloud & ML Workflow I Follow",
  steps: [
    {
      name: "Data Ingestion",
      tech: "AWS S3",
      icon: "s3"
    },
    {
      name: "Processing",
      tech: "AWS Lambda",
      icon: "lambda"
    },
    {
      name: "Model Training",
      tech: "Amazon SageMaker",
      icon: "sagemaker"
    },
    {
      name: "Monitoring",
      tech: "Amazon CloudWatch",
      icon: "cloudwatch"
    },
    {
      name: "Visualization",
      tech: "QuickSight",
      icon: "quicksight"
    }
  ],
  footerText: "I design, build and deploy end-to-end machine learning solutions on AWS."
};

// Engineering Philosophy & Pillars
const engineeringPhilosophy = {
  display: false,
  title: "Core Engineering Principles",
  subtitle: "How I approach Software Development, Data Science & AWS Infrastructure",
  pillars: [
    {
      icon: "code",
      title: "Scalable Software Engineering",
      badge: "Software Architecture",
      desc: "Writing clean, maintainable, modular code in Python, JavaScript, and SQL following SOLID principles, robust REST API design, and automated testing."
    },
    {
      icon: "aws",
      title: "AWS Cloud & Cloud-Native Deployment",
      badge: "Cloud Infrastructure",
      desc: "Architecting cloud-native solutions on AWS using S3, Lambda, SageMaker, PostgreSQL, and Docker containerization for maximum availability and scalability."
    },
    {
      icon: "brain",
      title: "Data-Driven Engineering & Analytics",
      badge: "Data Science",
      desc: "Leveraging statistical modeling, feature engineering, and automated ETL pipelines to extract actionable business insights from complex datasets."
    },
    {
      icon: "chart",
      title: "Continuous ML & Model Quality",
      badge: "AI/ML Engineering",
      desc: "Systematic model evaluation, hyperparameter tuning, and error analysis to ensure production AI systems perform with high accuracy and minimal latency."
    }
  ]
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Anantech Venture Limited, Mumbai",
      companylogo: "anantech",
      date: "April 2026 – Present",
      desc: "Developing data-driven software applications and automated data extraction pipelines using Python, React, PostgreSQL, and Firebase.",
      descBullets: [
        "Built enterprise task management & attendance tracking platforms with structured PostgreSQL data models.",
        "Automated Telegram campaign data extraction pipeline, eliminating manual data-entry effort.",
        "Designed high-performance backend REST APIs following production software engineering best practices."
      ]
    },
    {
      role: "AI Analyst",
      company: "Soul AI",
      companylogo: "soulai",
      date: "November 2025 – February 2026",
      desc: "Evaluated 1,000+ LLM model outputs, conducted error analysis, and optimized prompt strategies.",
      descBullets: [
        "Evaluated 1,000+ LLM responses for accuracy, contextual relevance, factual consistency & instruction following.",
        "Performed systematic root-cause error analysis, driving an 18% improvement in model output quality.",
        "Collaborated with ML engineers to refine prompts and evaluation benchmarks across 3 model iterations."
      ]
    },
    {
      role: "Technical Volunteer",
      company: "Google Developer Student Club (GDSC), VIT-AP",
      companylogo: "gdsc",
      date: "December 2022 – February 2026",
      desc: "Mentored 300+ students in Machine Learning, Deep Learning, and Python through workshops and hackathons.",
      descBullets: [
        "Organized 15+ hackathons & 10+ hands-on workshops in Machine Learning, Deep Learning & Python.",
        "Delivered technical training on data preprocessing, neural networks, model training & deployment.",
        "Guided student teams in structuring datasets, ML model selection & performance evaluation."
      ]
    }
  ]
};

// Featured Projects Section
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Real-world AI/ML applications and scalable data-driven systems",
  projects: [
    {
      badgeType: "brain",
      category: "AI & Computer Vision",
      projectName: "MediSkin - AI-Based Skin Disease Detection",
      projectDesc:
        "AI-powered medical image classification system for identifying skin diseases using CNNs and transfer learning (MobileNetV2) with 88.92% accuracy, integrated with real-time inference and healthcare platform.",
      techStack: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "React.js", "Firebase"],
      githubUrl: "https://github.com/xenon110/Mediskin",
      liveUrl: "https://github.com/xenon110/Mediskin",
      metrics: [
        { label: "Classification Accuracy", value: "88.92%" },
        { label: "Inference Latency", value: "< 120ms" },
        { label: "Model Architecture", value: "MobileNetV2" },
        { label: "Disease Classes", value: "7 Types" }
      ],
      highlights: [
        "Implemented MobileNetV2 CNN transfer learning optimized for medical image diagnostic accuracy.",
        "Created image augmentation pipelines to handle class imbalance across diverse clinical datasets.",
        "Integrated Firebase backend with React frontend for real-time diagnostic reporting."
      ]
    },
    {
      badgeType: "aws",
      category: "NLP & LLMs",
      projectName: "Veyra - AI Email Analytics Platform",
      projectDesc:
        "AI email processing system leveraging LLMs for natural language analysis, semantic categorization, inbox organization, and user analytics with 50+ active users in production.",
      techStack: ["Python", "FastAPI", "NLP", "Gemini API", "Gmail API", "PostgreSQL", "Supabase"],
      githubUrl: "https://github.com/xenon110/Veyra",
      liveUrl: "https://github.com/xenon110/Veyra",
      metrics: [
        { label: "Active Users", value: "50+ Users" },
        { label: "LLM Backend", value: "Gemini 1.5" },
        { label: "Categorization Precision", value: "94.5%" },
        { label: "Emails Processed", value: "10,000+" }
      ],
      highlights: [
        "Utilized Gemini 1.5 Pro API for zero-shot email categorization and automatic priority tagging.",
        "Built async FastAPI ingestion pipeline connecting OAuth Gmail API with Supabase PostgreSQL.",
        "Deployed to production serving 50+ daily active users with sub-second response times."
      ]
    },
    {
      badgeType: "brain",
      category: "AI & Computer Vision",
      projectName: "Scan2Eat - AI Nutrition & Food Safety Analyzer",
      projectDesc:
        "AI-powered application processing food images, ingredient information, and barcodes using OpenCV and ML to analyze nutritional characteristics and dietary risks.",
      techStack: ["Python", "Machine Learning", "OpenCV", "Computer Vision", "React Native"],
      githubUrl: "https://github.com/xenon110/Scan2Eat",
      liveUrl: "https://github.com/xenon110/Scan2Eat",
      metrics: [
        { label: "OCR Accuracy", value: "91.2%" },
        { label: "Ingredient DB", value: "5,000+ Items" },
        { label: "Risk Analysis Time", value: "0.4s" },
        { label: "Platform", value: "Cross-Platform" }
      ],
      highlights: [
        "Integrated OpenCV & Tesseract OCR for extracting raw text from complex food label images.",
        "Engineered nutritional scoring algorithms evaluating additive toxicity and allergen risks.",
        "Built responsive mobile application layout using React Native."
      ]
    },
    {
      badgeType: "chart",
      category: "Cloud & Backend",
      projectName: "Task Management Platform",
      projectDesc:
        "Data-driven enterprise collaboration system for collecting employee activity, attendance, workflow status, automated escalation, and real-time operational analytics.",
      techStack: ["Python", "React.js", "Node.js", "PostgreSQL", "Firebase", "REST APIs"],
      githubUrl: "https://github.com/xenon110/Task_Management_BKM",
      liveUrl: "https://github.com/xenon110/Task_Management_BKM",
      metrics: [
        { label: "User Roles", value: "RBAC System" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Sync Speed", value: "< 50ms" },
        { label: "Escalation Automation", value: "100%" }
      ],
      highlights: [
        "Designed relational database schema in PostgreSQL with role-based authorization rules.",
        "Implemented real-time notification engine for task escalation and status reporting.",
        "Built interactive analytics dashboard tracking organizational task velocity."
      ]
    }
  ],
  display: true
};

// Research & Publications
const researchSection = {
  display: true,
  title: "Research & Publications",
  paper: {
    title: "Energy Optimization in Data Centers: Reducing Consumption While Maintaining Efficiency",
    institution: "Vellore Institute of Technology AP (VIT-AP University)",
    desc: "Conducted research on data-driven approaches for reducing energy consumption in large-scale data centers while maintaining computational performance, reliability, and service efficiency.",
    highlights: [
      "Investigated optimization techniques for analyzing energy-consumption patterns and resource utilization.",
      "Implemented energy-efficient algorithms to reduce power consumption while preserving computational accuracy."
    ]
  }
};

// Education Info
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vellore Institute of Technology AP (VIT-AP University)",
      logo: "vitap",
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "September 2022 – June 2026",
      desc: "CGPA: 8.66 / 10.0 | Specialization in Data Science, Machine Learning, and Software Engineering.",
      bullets: [
        "CGPA: 8.66 / 10.0",
        "Top 10 AI/ML Projects Award Recipient",
        "Technical Volunteer at Google Developer Student Club (GDSC)"
      ]
    },
    {
      schoolName: "MKC (Senior Secondary School)",
      logo: "school",
      subHeader: "Class XII (Senior Secondary)",
      duration: "2020 – 2022",
      desc: "Percentage: 87% | Senior Secondary Education with Science & Mathematics specialization.",
      bullets: [
        "Percentage: 87%",
        "Focus on Mathematics, Physics, Chemistry, and Computer Science"
      ]
    },
    {
      schoolName: "JNV Palamu (Jawahar Navodaya Vidyalaya, Palamu)",
      logo: "jnv",
      subHeader: "Class X (Secondary School Education)",
      duration: "2019 – 2020",
      desc: "Percentage: 85% | Secondary School Certificate Education.",
      bullets: [
        "Percentage: 85%",
        "Academic excellence and science foundation at Jawahar Navodaya Vidyalaya"
      ]
    }
  ]
};

// Achievements Section
const achievementSection = {
  display: true,
  title: "Certifications & Achievements",
  subtitle: "Competitive exams qualified, AWS & tech certifications, and honors",
  achievementsCards: [
    {
      title: "GATE 2025 & GATE 2026 Qualified",
      subtitle: "Qualified Graduate Aptitude Test in Engineering (Computer Science)",
      tag: "National Exam",
      icon: "certificate"
    },
    {
      title: "BARC Exam Qualified",
      subtitle: "Bhabha Atomic Research Centre (BARC) Scientific Officer Exam Qualified",
      tag: "Government Exam",
      icon: "atom"
    },
    {
      title: "AWS Academy Cloud Architecting",
      subtitle: "Amazon Web Services (AWS) Academy Certification",
      tag: "AWS Certified",
      icon: "aws"
    },
    {
      title: "Cybersecurity Essentials",
      subtitle: "Cisco Networking Academy Certification",
      tag: "Cisco Academy",
      icon: "shield"
    },
    {
      title: "Data Science Professional Certification",
      subtitle: "Comprehensive Data Science & Analytics Certification - Udemy",
      tag: "Data Science",
      icon: "chart"
    },
    {
      title: "500+ LeetCode DSA Problems Solved",
      subtitle: "Solved 500+ Data Structures & Algorithms problems across various difficulty levels",
      tag: "DSA & Problem Solving",
      icon: "code"
    },
    {
      title: "Top 10 AI/ML Projects Award & Hackathon Winner",
      subtitle: "Top 10 AI/ML Projects Award at VIT-AP & Hackathon Winner for Innovation in Applied Machine Learning",
      tag: "Awards & Honors",
      icon: "trophy"
    }
  ]
};

// Key Stats Bar
const statsBar = [
  {
    number: "4+",
    label: "Featured AI/ML Projects",
    subtext: "MediSkin, Task Platform, Scan2Eat, Veyra",
    icon: "cube"
  },
  {
    number: "1,000+",
    label: "LLM Outputs Validated",
    subtext: "18% model quality improvement achieved",
    icon: "database"
  },
  {
    number: "500+",
    label: "LeetCode Solved",
    subtext: "Strong DSA and algorithmic foundation",
    icon: "leetcode"
  },
  {
    number: "GATE",
    label: "2025 & 2026 Qualified",
    subtext: "CS & Information Technology",
    icon: "gate"
  },
  {
    number: "8.66",
    label: "CGPA at VIT-AP",
    subtext: "B.Tech in Computer Science & Engineering",
    icon: "graduation-cap"
  }
];

// Contact Info
const contactInfo = {
  title: "Let's Connect",
  email_address: "mayankrajdto@gmail.com",
  phone: "9508303814",
  location: "Palamu, JH, India",
  linkedin: "linkedin.com/in/mayank-raj-b8b312272",
  github: "github.com/xenon110"
};

const skillsSection = { display: true };
const blogSection = { display: false };
const talkSection = { display: false };
const illustration = { animated: false };
const openSource = { display: false };
const techStack = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };
const isHireable = true;
const resumeSection = { display: true };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  technologiesIWorkWith,
  detailedSkills,
  cloudWorkflow,
  engineeringPhilosophy,
  bigProjects,
  researchSection,
  statsBar,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
