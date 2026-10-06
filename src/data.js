/**
 * ALL SITE CONTENT LIVES HERE.
 * Edit text, projects, links and certifications in this one file.
 * Anything written as "[PLACEHOLDER: ...]" is highlighted on the page so you
 * can spot what still needs your real content. Search this file for PLACEHOLDER.
 */

export const site = {
  name: 'Mahammad Haroon',
  headline: 'Data Analyst | Business Analyst | Project Manager | Digital Marketer',
  tagline: 'Turning data into decisions.',
  availability: 'Open to full-time roles and freelance projects',

  heroSummary:
    'I turn complex datasets into KPI dashboards and business reports, and manage projects from requirement gathering to delivery.',

  location: 'Mangaluru / Bengaluru, Karnataka, India',

  email: 'mahammadharoon14@gmail.com',

  phone: '+91-7022199558',
  phoneHref: 'tel:+917022199558',

  linkedin:
    'https://www.linkedin.com/in/haroon-data-analyst-business-analyst',

  linkedinLabel:
    'linkedin.com/in/haroon-data-analyst-business-analyst',

  github:
    'https://github.com/Mahammad-Haroon',

  githubLabel:
    'github.com/Mahammad-Haroon',

  // Put your PDF in /public with this exact name.
  resume: '/mahammedharoon_cv.pdf',

  // Put a photo in /public, e.g. /profile.jpg
  // Leave empty to show initials.
  photo: '/profile.jpg  ',

  photoAlt: '',
};


/* =========================================================
   NAVIGATION
========================================================= */

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];


/* =========================================================
   HERO RESULTS
========================================================= */

export const heroResults = [
  {
    value: '85%',
    label: 'Churn prediction accuracy',
    context: 'Logistic Regression model, CDAC',
    meter: 85,
  },

  {
    value: '90%',
    label: 'Sales forecast accuracy',
    context: 'Power BI dashboard, CDAC',
    meter: 90,
  },

  {
    value: '25%',
    label: 'Less time spent on reporting',
    context: 'Same dashboard, CDAC',
    meter: 25,
  },

  {
    value: '450+',
    label: 'Students analysed and mentored',
    context: 'Data Science and Analytics, Kalvium',
  },
];


/* =========================================================
   ABOUT
========================================================= */

export const about = {
  paragraphs: [
    'I am a Data Analyst and Business Analyst with an MCA in Data Science and hands-on experience in Python, SQL, Power BI, Excel and Google Analytics.',

    'I turn complex datasets into KPI dashboards and business reports, and I manage projects from requirement gathering to delivery. Alongside analytics, I run OceaneX Technology, where I lead a team of 4 developers and act as the bridge between clients and the people building their product.',

    'That mix gives me practical digital marketing skills too: SEO, GA4 and GTM tracking, and web development.',
  ],

  stats: [
    {
      end: 50,
      suffix: '+',
      label: 'videos shot, edited, and delivered in the past year',
    },

    {
      end: 11,
      suffix: '+',
      label: 'client projects delivered',
    },

    {
      end: 4,
      suffix: '',
      label: 'developers led as project manager',
    },

    {
      end: 9.2,
      decimals: 1,
      suffix: '',
      label: 'CGPA in MCA, Data Science',
    },
  ],

  education: [
    {
      degree: 'MCA, Data Science & Big Data Analytics',
      school: 'Yenepoya University',
      score: 'CGPA 9.2',
    },

    {
      degree: 'BCA',
      school: 'Mangalore University',
      score: 'CGPA 8.0',
    },
  ],
};


/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    title: 'Data analysis and dashboards',

    text:
      'KPI dashboards and business reports that show stakeholders what is working and what is not, built with Power BI, Excel, SQL and Python.',

    tools:
      'Power BI, SQL, Python, Excel, Tableau',
  },

  {
    title: 'Web development',

    text:
      'Fast, responsive websites and web apps, from custom MERN builds to WordPress and WooCommerce stores. 11 client projects delivered through OceaneX.',

    tools:
      'React, Node.js, MongoDB, WordPress, WooCommerce',
  },

  {
    title: 'SEO and analytics tracking',

    text:
      'Technical and on-page SEO audits, plus GA4, Search Console and Tag Manager setup so you can see which pages and campaigns bring real leads.',

    tools:
      'GA4, GTM, Search Console, Semrush, Ahrefs, Screaming Frog',
  },

  {
    title: 'Project management',

    text:
      'Requirements, task allocation, timelines and delivery handled end to end. I lead a team of 4 developers and keep clients informed at every step.',

    tools:
      'Agile/Scrum, stakeholder communication, process mapping',
  },
];


/* =========================================================
   SKILLS
========================================================= */

export const skillGroups = [
  {
    title: 'Data Analytics',

    items: [
      'Python',
      'Pandas',
      'SQL',
      'MySQL',
      'Excel (Pivot Tables, Dashboards)',
      'Power BI',
      'Tableau',
      'Google Analytics',
      'EDA',
      'A/B testing',
      'Hypothesis testing',
      'Forecasting',
      'KPI reporting',
      'Data cleaning',
      'ETL basics',
      'IBM SPSS Modeler',
    ],
  },

  {
    title: 'Business Analysis & Project Management',

    items: [
      'Requirement gathering',
      'Process mapping',
      'Gap analysis',
      'Stakeholder communication',
      'Agile/Scrum',
      'Team leadership',
      'Client relationship management',
      'Lead generation',
    ],
  },

  {
    title: 'Web Development',

    items: [
      'MERN stack',
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'PHP',
      'Vite',
      'Firebase',
      'Vercel',
      'Git/GitHub',
      'Postman',
    ],
  },

  {
    title: 'WordPress & E-commerce',

    items: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'Divi',
      'Payment gateway integration',
      'Theme customization',
      'Website migration',
    ],
  },

  {
    title: 'SEO & Digital Marketing',

    items: [
      'Technical SEO',
      'On-page SEO',
      'Off-page SEO',
      'Keyword research',
      'SEO audits',
      'Semrush',
      'Ahrefs',
      'Screaming Frog',
      'Yoast',
      'Rank Math',
    ],
  },

  {
    title: 'Analytics & Tracking',

    items: [
      'GA4',
      'Google Search Console',
      'Google Tag Manager',
      'Google Business Profile',
      'Conversion tracking',
      'Event tracking',
      'UTM tracking',
    ],
  },

  {
    title: 'AI Tools',

    items: [
      'ChatGPT',
      'Gemini',
      'Claude',
      'Prompt engineering',
      'AI-assisted coding',
      'AI content creation',
      'AI SEO tools',
    ],
  },

  {
    title: 'Design',

    items: [
      'Canva',
      'UI design',
      'Branding',
      'Logo design',
      'Social media creatives',
      'Basic video editing (Premiere Pro)',
    ],
  },
];


/* =========================================================
   EXPERIENCE
========================================================= */

export const experience = [
  {
    role: 'Data Analyst',

    org: 'Kalvium',

    place: 'Bengaluru',

    period: '2025 – Present',

    points: [
      'Analyze and interpret performance data of 450+ students, identifying learning trends, performance gaps, and at-risk areas to provide actionable insights for improving student outcomes.',

      'Collect, clean, transform, and validate student data from multiple sources, ensuring data accuracy and consistency for reporting, analysis, and decision-making.',

      'Build KPI reports and interactive dashboards using Power BI and Excel to monitor student performance, attendance, assessments, and learning progress, delivering data-driven insights to academic and management stakeholders.',
    ],
  },

  {
    role: 'Founder & Project Manager',

    org: 'OceaneX Technology',

    place: 'Mangaluru',

    period: '2024/25 – Present',

    points: [
      'Delivered 11 client projects across web development, analytics and digital solutions.',

      'Lead a team of 4 developers by managing project planning, task allocation, timelines, and delivery.',

      'Act as the bridge between clients and developers by handling requirements, progress tracking, communication, and project delivery.',

      'Use SQL and Excel to track project delivery, team performance, and operational data.',
    ],
  },

  {
    role: 'Data Science Intern',

    org: 'CDAC',

    place: 'Bengaluru',

    period: 'Apr 2025 – Sep 2025',

    points: [
      'Built a customer churn prediction model using Logistic Regression, achieving 85% accuracy.',

      'Built a Power BI sales forecasting dashboard with 90% forecast accuracy and 25% less reporting time.',

      'Presented analytical findings and business insights to stakeholders.',
    ],
  },
];


/* =========================================================
   PROJECT FILTERS
========================================================= */

export const projectFilters = [
  'All',
  'Data Analytics',
  'AI / Machine Learning',
  'Web Development',
  'SEO & Marketing',
];


/* =========================================================
   PROJECTS
========================================================= */

export const projects = [
  {
    title: 'Customer Churn Prediction Model',

    category: 'Data Analytics',

    tags: [
      'Python',
      'Logistic Regression',
      'Power BI',
    ],

    problem:
      'Spot which customers are likely to leave, so retention effort goes where it matters.',

    approach:
      'Trained a Logistic Regression model in Python and presented the insights to stakeholders through Power BI.',

    result:
      '85% prediction accuracy.',

    live: '',

    github: '',
  },

  {
    title: 'Sales Analysis & Forecasting Dashboard',

    category: 'Data Analytics',

    tags: [
      'Power BI',
      'Python',
      'Excel',
    ],

    problem:
      'Turn sales history into a forecast the business can plan against.',

    approach:
      'Built a Power BI forecasting dashboard supported by Python and Excel.',

    result:
      '90% forecast accuracy and 25% less time spent on reporting.',

    live: '',

    github: '',
  },

  {
    title: 'Exploratory Data Analysis',

    category: 'Data Analytics',

    tags: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
    ],

    problem:
      'Analyze a real-world dataset to identify important patterns, trends, relationships, and data-quality issues that can support better decision-making.',

    approach:
      'Cleaned and preprocessed the dataset using Pandas, performed exploratory and statistical analysis, and created visualizations with Matplotlib and Seaborn to identify meaningful patterns and trends.',

    result:
      'Identified key trends, relationships, outliers, and data-quality issues through systematic exploratory analysis and transformed raw data into actionable insights.',

    live: '',

    github:
      'https://github.com/Mahammad-Haroon/Data-Analysis-Projects',
  },

  {
    title: 'HR Analytics Dashboard',

    category: 'Data Analytics',

    tags: [
      'Power BI',
      'Excel',
    ],

    problem:
      'Help HR teams understand employee attrition, workforce composition, performance, and other key HR metrics through a centralized reporting solution.',

    approach:
      'Cleaned and transformed HR data in Excel and developed an interactive Power BI dashboard with KPI cards, charts, filters, and department-level analysis.',

    result:
      'Created a centralized HR analytics dashboard that makes workforce trends, attrition patterns, and performance indicators easier to monitor and compare.',

    live: '',

    github: '',
  },

  {
    title: 'E-Commerce Sales Analysis',

    category: 'Data Analytics',

    tags: [
      'Python',
      'SQL',
      'Power BI',
    ],

    problem:
      'Analyze e-commerce sales data to understand revenue trends, product performance, customer behavior, and the factors contributing to overall sales.',

    approach:
      'Used SQL for data extraction and aggregation, Python for data cleaning and analysis, and Power BI to create interactive sales reports and visualizations.',

    result:
      'Identified high-performing products, sales trends, revenue patterns, and business opportunities through data-driven analysis and interactive reporting.',

    live: '',

    github: '',
  },

  {
    title: 'Indian Currency Notes Detection',

    subtitle: 'AI/ML & Computer Vision Project',

    category: 'AI / Machine Learning',

    tags: [
      'Python',
      'CNN',
      'YOLO',
      'TensorFlow',
      'OpenCV',
    ],

    problem:
      'Develop a system that can recognize Indian currency denominations and provide accessible identification for visually impaired users.',

    approach:
      'Built a computer vision pipeline using CNN and YOLO-based object detection to identify ₹10, ₹20, ₹50, ₹100, ₹200, and ₹500 currency notes, with a planned voice-based output system.',

    result:
      'Developed a trained currency recognition model and integrated the detection workflow into a prototype application for real-time denomination identification.',

    live: '',

    github:
      'https://github.com/Mahammad-Haroon',
  },

  {
    title: 'Online Payment Fraud Detection',

    subtitle: 'Machine Learning & Flask Dashboard',

    category: 'AI / Machine Learning',

    tags: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Flask',
      'Machine Learning',
    ],

    problem:
      'Detect potentially fraudulent online payment transactions from a large-scale transaction dataset and provide a practical interface for prediction and analysis.',

    approach:
      'Processed a dataset containing millions of transactions, performed feature preparation and model training, evaluated classification performance, and deployed the prediction workflow through a Flask dashboard.',

    result:
      'Developed a machine-learning-based fraud detection system with a web dashboard for transaction prediction and model-driven analysis.',

    live: '',

    github:
      'https://github.com/Mahammad-Haroon',
  },

  {
    title: 'Student Management System',

    subtitle: 'Full-Stack Web Application',

    category: 'Web Development',

    tags: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],

    problem:
      'Create a web-based system to manage student information and perform common student record operations efficiently.',

    approach:
      'Built a full-stack CRUD application using React for the frontend, Node.js and Express.js for REST APIs, and MongoDB for data storage.',

    result:
      'Developed a functional full-stack student management application with database integration and API-based communication between the frontend and backend.',

    live: '',

    github:
      'https://github.com/Mahammad-Haroon/Student-managment',
  },

  {
    title: 'Client Website Development',

    subtitle: 'OceaneX Client Project',

    category: 'Web Development',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Web Design',
    ],

    problem:
      'Help a client establish a professional online presence with a responsive website aligned with their brand, services, and business objectives.',

    approach:
      'Designed and developed a responsive website with structured content, modern UI components, mobile-friendly layouts, and optimized user navigation.',

    result:
      'Delivered a professional, responsive web presence tailored to the client’s branding and business requirements.',

    showImage: false,

    live: '',

    github: '',
  },

  {
    title: 'WordPress / WooCommerce Development',

    subtitle: 'OceaneX Client Project',

    category: 'Web Development',

    tags: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'SEO',
    ],

    problem:
      'Help a business establish or improve its online store and provide customers with a simple and responsive shopping experience.',

    approach:
      'Configured and customized a WordPress/WooCommerce website, structured product pages and categories, optimized the user experience, and implemented essential website and SEO settings.',

    result:
      'Delivered a functional e-commerce website with product management, responsive layouts, and an improved customer browsing and purchasing experience.',

    showImage: false,

    live: '',

    github: '',
  },

  {
    title: 'SEO & Digital Marketing',

    subtitle: 'OceaneX Client Project',

    category: 'SEO & Marketing',

    tags: [
      'SEO',
      'Google Analytics',
      'Google Search Console',
      'Content Strategy',
    ],

    problem:
      'Improve a website’s search visibility, organic reach, and overall digital presence through structured SEO and digital marketing activities.',

    approach:
      'Performed website and SEO audits, improved on-page elements, optimized content and metadata, addressed technical SEO issues, and monitored performance using analytics and search tools.',

    result:
      'Improved the website’s search-readiness and established a structured SEO and performance-monitoring process focused on increasing organic visibility and qualified traffic.',

    showImage: false,
  

    live: '',

    github: '',
  },
];


/* =========================================================
   CERTIFICATIONS
========================================================= */

export const certifications = [
  {
    name: 'Data Analysis with Python',
    issuer: 'Infosys Springboard',
  },

  {
    name: 'Python 101 for Data Science',
    issuer: 'IBM',
  },

  {
    name: 'Python Fundamentals',
    issuer: 'Infosys Springboard',
  },

  {
    name: 'SQL Developer',
    issuer: 'Infosys Springboard',
  },

  {
    name: 'Advanced Microsoft Power BI',
    issuer: 'Coursera',
  },

  {
    name: 'Mastering Advanced Data and Analytics Features in Tableau',
    issuer: 'Coursera',
  },

  {
    name: 'GenAI for Business Analysts',
    issuer: 'Coursera',
  },

  {
    name: 'IBM SPSS Modeler V18.2.x Essentials',
    issuer: '',
  },

  {
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
  },
];