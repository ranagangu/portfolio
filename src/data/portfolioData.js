/**
 * Consolidated Portfolio Copy Data
 * Edit this file to correct or update any text, links, or skills across the website.
 */
export const portfolioData = {
  personalInfo: {
    name: "Debpriya Ganguly",
    title: "AI Trainer | Data Scientist | Python Developer",
    subtitle: "WELCOME TO MY PORTFOLIO",
    intro: "Passionate technologist driving AI integration and data literacy. I design advanced Python applications, analyze complex datasets, and empower corporate teams and students to build the next generation of intelligent systems.",
    email: "[EMAIL_ADDRESS]",
    location: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/debpriya-ganguly/",
    github: "https://github.com/ranagangu",
    resumeUrl: "/assets/resume/Debpriya_Ganguly_Resume.pdf"
  },

  about: {
    bioParagraph1: "I am an AI Trainer, Data Scientist, and Python Developer with a robust background in delivering technical education and building analytical models. My approach is centered on bridging the gap between cutting-edge research and real-world industrial implementations.",
    bioParagraph2: "Over the years, I have trained hundreds of developers and corporate executives in machine learning techniques, modern Python systems, and data pipelines. I build and optimize models to solve real-world problems in predictive analytics, NLP, and diagnostic AI.",
    stats: [
      { number: "2+", label: "Years of Exp" },
      { number: "1k+", label: "Trainees Taught" }
    ],
    coreFocus: "Currently driving technical excellence in Agentic AI frameworks (LangChain, CrewAI, LangGraph), deep diagnostic analytics for healthcare, and optimizing LLM chains for corporate operational tools."
  },

  education: [
    {
      period: "2022 - 2024",
      degree: "Master of Computer Application",
      institution: "Amity University, Kolkata"
    },
    {
      period: "2019 - 2022",
      degree: "Bachelor of Computer Application",
      institution: "B.B. College, Asansol affiliated to Kazi Nazrul University"
    }
  ],

  skills: [
    {
      category: "Programming",
      iconClass: "fa-solid fa-code",
      list: [
        { name: "Python", percent: "95%" },
        { name: "SQL", percent: "88%" },
        { name: "JavaScript", percent: "80%" },
        { name: "R", percent: "75%" }
      ]
    },
    {
      category: "AI & ML",
      iconClass: "fa-solid fa-brain",
      list: [
        { name: "Machine Learning", percent: "92%" },
        { name: "Deep Learning", percent: "85%" },
        { name: "Generative AI", percent: "90%" },
        { name: "Agentic AI (LangChain)", percent: "88%" }
      ]
    },
    {
      category: "Data Science",
      iconClass: "fa-solid fa-chart-line",
      list: [
        { name: "Pandas & NumPy", percent: "95%" },
        { name: "Scikit-learn", percent: "90%" },
        { name: "TensorFlow", percent: "80%" },
        { name: "Power BI & Tableau", percent: "85%" }
      ]
    },
    {
      category: "Cloud & Tools",
      iconClass: "fa-solid fa-screwdriver-wrench",
      list: [
        { name: "AWS Cloud", percent: "80%" },
        { name: "Git & GitHub", percent: "90%" },
        { name: "Docker", percent: "85%" },
        { name: "Linux OS", percent: "82%" }
      ]
    }
  ],

  projects: [
    {
      title: "MERN Investment Platform",
      categories: ["python-web"],
      desc: "A full-stack investment tracking platform built using the MERN stack. Features portfolio balance analytics, transaction tracking logs, and dynamic asset visualization dashboards.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      githubUrl: "https://github.com/ranagangu/mern-investment-platform",
      demoUrl: "https://investflowroi.netlify.app/",
      imageName: "project-crm.svg"
    },
    {
      title: "CloudLab Deployment Engine",
      categories: ["data-science"],
      desc: "A repository designed for establishing cloud development labs. Features automated server environments configurations, containerized application setups, and deployment automation.",
      techStack: ["AWS", "Docker", "Linux OS", "Shell Scripting"],
      githubUrl: "https://github.com/ranagangu/CloudLab",
      demoUrl: "https://oscplab.certificationscenter.com/",
      imageName: "project-farm.svg"
    },
    {
      title: "Python Restaurant Automation",
      categories: ["python-web"],
      desc: "An object-oriented Python application designing restaurant automation systems. Integrates client table reservation algorithms, custom menu billing nodes, and order database log syncing.",
      techStack: ["Python", "OOP", "SQLite", "Data Structures"],
      githubUrl: "https://github.com/ranagangu/restaurent",
      imageName: "project-hygiene.svg"
    },
    {
      title: "AI Research Assistant",
      categories: ["ai-ml", "python-web"],
      desc: "A production-ready AI Research Assistant leveraging RAG & LangGraph to build a context-aware document analysis workflow with ChromaDB.",
      techStack: ["Python", "LangGraph", "ChromaDB", "FastAPI", "React"],
      githubUrl: "https://github.com/ranagangu/ai-research-assistant",
      demoUrl: "https://assistant-ai-research.netlify.app/",
      imageName: "project-cancer.svg"
    }
  ],

  experience: [
    {
      period: "2025 - PRESENT",
      role: "AI Trainer & Corporate Consultant",
      company: "Webasha Technologies",
      points: [
        "Directing advanced courses in Python Core, Data Pipelines, and SQL querying modules.",
        "Instructing executive courses on Machine Learning, Deep Learning architectures, and NLP applications.",
        "Providing consultation and training on Generative AI pipelines including LangChain, CrewAI agent orchestration, and LangGraph memory models.",
        "Mentoring over 1,000 corporate clients and developers to transition into artificial intelligence engineering."
      ]
    },
    {
      period: "2025-2025",
      role: "IT Trainer",
      company: "IT DESK PVT LTD",
      points: [
        "Delivered comprehensive training sessions on fundamental IT concepts to corporate employees.",
        "Conducted hands-on workshops covering software installation, system troubleshooting, and basic networking principles.",
        "Collaborated with the IT support team to develop training materials and user documentation."
      ]
    },
    {
      period: "2024-2025",
      role: "Python Trainer",
      company: "PVR Bituminous Pvt Ltd",
      points: [
        "Led in-house training for employees on Python fundamentals and automated task scripting using Python.",
        "Developed internal automation tools using Python to streamline daily workflows and reduce manual workload.",
        "Conducted workshops to upskill team members in basic data analysis and reporting using Pandas and Excel automation."
      ]
    }
  ],

  certifications: [
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "Issued Jan 2024",
      iconClass: "fa-brands fa-aws"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google Developers",
      date: "Issued Oct 2023",
      iconClass: "fa-solid fa-award"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "Issued Jul 2023",
      iconClass: "fa-solid fa-brain"
    }
  ]
};
