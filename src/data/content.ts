// content.ts
// This file contains all the content for your portfolio website.
// Automatically synchronized with latest career data from artifacts.

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location?: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string[];
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface AcademicItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
}

export interface LeadershipItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export const portfolioData = {
  hero: {
    name: "Shubham Raj",
    role: "Google Cloud Certified Professional Data Engineer",
    tagline: "Specializing in enterprise cloud migrations, ETL pipeline orchestration, Data Vault modeling on GCP, and high-performance full-stack web applications.",
    resumeLink: "/Shubham_Resume.pdf",
    stats: [
      { value: "3+ Yrs", label: "GCP Data Eng Experience" },
      { value: "1,300+", label: "Enterprise Tables Migrated" },
      { value: "90%", label: "Claims Processing Time Cut" },
      { value: "98%", label: "Query Speedup Achieved" }
    ]
  },

  about: {
    paragraphs: [
      "I am a Data Engineer and Full-Stack Developer with 3+ years of experience designing and modernizing enterprise-scale cloud data platforms on Google Cloud Platform (GCP). My technical expertise spans large-scale data migrations, high-throughput ETL/ELT pipelines, distributed data processing using PySpark on Dataproc Serverless, and architecting analytics-ready Data Vault models with dbt and BigQuery.",
      "Complementing my data engineering background, I bring strong software engineering skills with hands-on experience developing production-ready APIs, microservices, and interactive frontends using .NET Core 8.0, Node.js, React, Vue.js, and Blazor WebAssembly. I have led engineering deliverables across healthcare, insurance, finance, and data center analytics domains.",
      "I hold a B.Tech from NIT Durgapur, am pursuing an M.Tech in AI & Machine Learning from BITS Pilani (WILP), and hold certifications including Google Cloud Professional Data Engineer, Associate Cloud Engineer, and Oracle Cloud certifications. I am passionate about applying software architecture and machine learning to build resilient, data-driven systems."
    ],
  },

  experience: [
    {
      id: 1,
      role: "Framework Engineer – Data Engineer",
      company: "Quantiphi Analytics Solutions Pvt. Ltd.",
      location: "Mumbai, Maharashtra, India",
      duration: "Jan 2024 – Present",
      highlights: [
        "Spearheaded a team of data engineers, managing task allocation, code reviews, and resolving technical blockers for parallel development of multiple data models.",
        "Architected end-to-end ETL/ELT pipelines to migrate 1,300+ enterprise tables, 200+ business views, and 400+ Tableau reports from legacy sources (Teradata, Mainframe/COBOL, Exasol, DB2) into Google BigQuery.",
        "Engineered scalable Data Vault (Raw, Business, Gold layers) models using dbt for maintainable, analytics-ready cloud data architecture.",
        "Optimized high-compute SQL scripts, achieving 98%+ query runtime performance improvement (reducing 12+ hour jobs to under 10 minutes).",
        "Built automated orchestration workflows using Apache Airflow (Cloud Composer) for 150–200 DAGs across 10–15 business teams with automated SLA alerting.",
        "Modernized legacy insurance platforms by converting COBOL programs and LUA scripts into optimized BigQuery SQL, migrating billions of records with 100% reconciliation accuracy.",
        "Implemented distributed PySpark transformation jobs on Dataproc Serverless, lowering execution costs by 25%."
      ],
      technologies: ["Google Cloud Platform", "BigQuery", "Apache Airflow", "dbt", "Data Vault", "PySpark", "Dataproc", "COBOL", "LUA", "SQL", "Python", "Tableau", "Git"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "VMax e-Solutions India Pvt. Ltd.",
      location: "Hyderabad, Telangana, India",
      duration: "Sep 2023 – Present",
      highlights: [
        "Architected robust backend APIs using .NET Core 8.0 adhering to SOLID and MVC design principles to ensure high maintainability and system extensibility.",
        "Developed smooth, intuitive user interfaces in a Blazor WebAssembly project by creating reusable UI components and multi-page layouts.",
        "Executed bi-directional rendering of React components within the Blazor framework, enhancing interoperability between frontend technologies.",
        "Spearheaded the IIISLA Claims Automation Platform, expected to reduce insurance claims turnaround time by 90% for millions of users."
      ],
      technologies: [".NET Core 8.0", "C#", "ASP.NET MVC", "Blazor WebAssembly", "React", "MS SQL Server", "Entity Framework"]
    },
    {
      id: 3,
      role: "Data Engineer Intern",
      company: "Quantiphi Analytics Solutions Pvt. Ltd.",
      location: "Remote / Hybrid",
      duration: "Jan 2023 – Jan 2024",
      highlights: [
        "Engineered end-to-end data migration pipelines using Informatica Intelligent Cloud Services (IICS) to move enterprise datasets from Snowflake to BigQuery.",
        "Automated data transfers by developing Python-based ETL scripts and Google Cloud Functions, processing over 1,000,000 rows of diverse data files.",
        "Validated production readiness through SQL reconciliation and functional testing across Dev and QA environments, ensuring zero data loss.",
        "Built Tableau dashboards and analytical reports to provide business stakeholders with post-migration insights."
      ],
      technologies: ["Google Cloud Platform", "BigQuery", "Snowflake", "Informatica IICS", "Python", "Cloud Functions", "Tableau", "SQL"]
    },
    {
      id: 4,
      role: "Full Stack Developer Intern",
      company: "Mudrika Finance Pvt. Ltd.",
      location: "Remote",
      duration: "May 2022 – July 2022",
      highlights: [
        "Redesigned 70% of the user dashboard UI using React Native to create responsive mobile application screens and enhance user experience.",
        "Developed a suite of backend APIs in Node.js and PHP for secure user-data processing, integrating JWT tokens for authentication and authorization.",
        "Modeled relational databases in MySQL to store processed user data, creating fact tables and data dependencies for downstream analytics."
      ],
      technologies: ["React Native", "React", "Node.js", "PHP", "MySQL", "JWT"]
    },
    {
      id: 5,
      role: "Backend Developer Intern",
      company: "Dr. Reddy’s Laboratories Pvt. Ltd.",
      location: "Hyderabad, Telangana, India",
      duration: "July 2021 – Nov 2021",
      highlights: [
        "Developed a high-performance web application to display and analyze millions of records fetched reactively from a Node server.",
        "Reduced cloud compute costs by implementing temporary cache storage and local browser storage for frequently queried data from BigQuery.",
        "Enhanced application functionality with advanced features including column filtering, pagination, search bars, and session-state management."
      ],
      technologies: ["React.js", "Node.js", "Express", "BigQuery", "Firebase", "Material UI"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 1,
      title: "Claims Automation Platform (IIISLA)",
      subtitle: "VMax e-Solutions / Freelance",
      description: [
        "Architected scalable backend APIs using ASP.NET Core 8.0, adhering to SOLID and MVC design principles to ensure maintainability and high availability.",
        "Designed database schemas, fact tables, and complex stored procedures in MS SQL Server to handle heavy data operations seamlessly.",
        "Collaborated on Blazor WebAssembly interfaces and reusable UI components, creating a system projected to cut average insurance claim processing duration by 90% for millions of users."
      ],
      image: "/claims.png",
      technologies: [".NET Core 8.0", "C#", "Blazor WebAssembly", "MS SQL Server", "Entity Framework", "MVC"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Enterprise Data Platform Modernization (Equinix)",
      subtitle: "Quantiphi Analytics",
      description: [
        "Spearheaded data migration and data modeling for 1,300+ enterprise tables from Oracle, Exasol, DB2, and legacy warehouses to Google BigQuery.",
        "Designed and implemented Data Vault (Raw, Business, Gold) models using dbt, delivering 200+ business views and 400+ Tableau reports for executive analytics.",
        "Optimized high-compute SQL transformations, reducing query runtimes from 12+ hours to under 10 minutes."
      ],
      image: "/yancha.png",
      technologies: ["Google Cloud Platform", "BigQuery", "dbt", "Data Vault", "Apache Airflow", "Tableau", "Exasol"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Career Choice Questionnaire (Yancha)",
      subtitle: "Freelance Project",
      description: [
        "Engineered a full-stack career guidance application evaluating user traits via the RAPD (Resource utilization, Attitude, Personality, Decision making) behavioral model.",
        "Implemented dynamic question generation, user state management, session storage, and automated PDF report generation.",
        "Developed backend APIs in Flask and MySQL database models to store user data for analytical guidance."
      ],
      image: "/yancha.png",
      technologies: ["Vue.js", "Flask", "MySQL", "Session Storage", "State Management", "RAPD Model"],
      githubUrl: "#",
      liveUrl: "https://www.yancha.in/"
    },
    {
      id: 4,
      title: "Story of Life Simulation (Yancha)",
      subtitle: "Freelance Project",
      description: [
        "Built a web-based simulation that tracks user decisions and choices to generate comprehensive analytical life reports.",
        "Developed interactive dashboard views using Vue 3 and session storage for persistent user analytics."
      ],
      image: "/yancha.png",
      technologies: ["Vue 3", "JavaScript", "Session Storage", "State Management", "CSS3"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Codeial - Social Profile Builder",
      subtitle: "Full Stack Project",
      description: [
        "Created a social profile-building web application with integrated user authentication and session security.",
        "Implemented secure login/logout flows, cookie-based session state management, and relational database schemas."
      ],
      image: "/claims.png",
      technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JWT", "CSS Modules"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ] as ProjectItem[],

  skills: {
    cloudBigData: [
      "Google Cloud Platform (GCP)", "BigQuery", "Cloud Storage", "Cloud Composer", 
      "Cloud Run", "Dataproc Serverless", "Dataflow", "Snowflake"
    ],
    dataEngineering: [
      "ETL / ELT Pipelines", "Data Vault (Raw, Business, Gold)", "dbt (Data Build Tool)", 
      "Apache Airflow", "PySpark / Apache Spark", "Data Migration", "SQL Optimization", 
      "Data Validation & Reconciliation", "EDW Modernization"
    ],
    programming: [
      "Python (Pandas)", "SQL (BigQuery, T-SQL)", "C#", "C++", "C", 
      "Java", "JavaScript (ES6+)", "TypeScript", "PHP", "COBOL (Legacy)", "LUA"
    ],
    frameworks: [
      ".NET Core 8.0", "ASP.NET MVC", "Blazor WebAssembly", "ReactJS", 
      "React Native", "Vue.js / Vue 3", "Node.js", "ExpressJS", "Flask", "Entity Framework"
    ],
    devOpsTools: [
      "Git / GitHub", "GitHub Actions", "Bitbucket", "CI/CD", "Tableau", 
      "Informatica IICS", "MS SQL Server", "MySQL", "MongoDB", "Firebase", "Exasol", "Teradata"
    ],
    leadershipDomain: [
      "Healthcare Data Systems", "Insurance Claims Automation", "Finance / Banking Migration", 
      "Data Center Analytics", "Team Leadership (50+ members)", "Technical Mentorship", "Agile Methodologies"
    ]
  },

  academics: [
    {
      id: 1,
      degree: "M.Tech in Artificial Intelligence & Machine Learning",
      institution: "BITS Pilani (WILP)",
      duration: "July 2026 – June 2028 (Anticipated)",
      description: "Work Integrated Learning Programme focusing on advanced machine learning algorithms, deep neural networks, AI system design, and intelligent data processing."
    },
    {
      id: 2,
      degree: "B.Tech in Metallurgical and Materials Engineering",
      institution: "National Institute of Technology (NIT) Durgapur",
      duration: "July 2019 – June 2023",
      description: "Graduated with 7.87/10 CGPA. Completed Undergraduate Thesis on Extract-Transform-Load (ETL) exploring automation in cloud data migration and legacy EDW modernization."
    },
    {
      id: 3,
      degree: "Intermediate (Class 12 - TSBIE Board)",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      duration: "Mar 2017 – May 2019",
      description: "Scored 93.7% (937/1000) with a focus on Mathematics, Physics, and Chemistry."
    },
    {
      id: 4,
      degree: "Secondary School (Class 10 - CBSE Board)",
      institution: "D.A.V Public School",
      duration: "Graduated 2017",
      description: "Achieved 9.8/10 CGPA (93.1%). Recognized for academic excellence across mathematics and physical sciences."
    }
  ] as AcademicItem[],

  certifications: [
    {
      id: 1,
      name: "Google Cloud Certified – Professional Data Engineer",
      issuer: "Google Cloud",
      date: "Dec 2024",
      credentialId: "27b328d7cad04a7cad547c3997276c84",
      link: "https://drive.google.com/file/d/1C5UUnTtIAcMRFOdA44tZmAnAS3tjJ3Z9/view?usp=drivesdk"
    },
    {
      id: 2,
      name: "Google Cloud Certified – Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "May 2023",
      credentialId: "5356308cf4bb441abd9028cf46bcf3c5",
      link: "https://drive.google.com/file/d/1_peCe0zwCYnYiLYUoWE_Hi2DA28ufs8m/view?usp=drivesdk"
    },
    {
      id: 3,
      name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Nov 2023",
      credentialId: "100417117OCI23AIFCA",
      link: "https://drive.google.com/file/d/1AL5xaZt9WvB9pX_76y2Hbx18BhfUdtEn/view?usp=drivesdk"
    },
    {
      id: 4,
      name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Nov 2023",
      credentialId: "100417117OCIF2023CA",
      link: "https://drive.google.com/file/d/1BG_mESwk6FcE8i-KWs93oQrBaN1B_7q7/view?usp=drivesdk"
    },
    {
      id: 5,
      name: "Generative AI for Developers (Multiple Badges)",
      issuer: "Google Cloud",
      date: "Feb – Sep 2024",
      credentialId: "Google Skill Badges Profile",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
    },
    {
      id: 6,
      name: "Foundational C# with Microsoft",
      issuer: "FreeCodeCamp & Microsoft",
      date: "Sep 2023",
      credentialId: "fcc955cbbd8-f37c-4dd4-9603-419674ad7de8",
      link: "https://www.freecodecamp.org/certification/fcc955cbbd8-f37c-4dd4-9603-419674ad7de8/foundational-c-sharp-with-microsoft"
    },
    {
      id: 7,
      name: "Mastering Google Dataform: Beginner to Pro",
      issuer: "Udemy",
      date: "Sep 2025",
      credentialId: "UC-f3253392-49fa-4350-9a70-2e767628864a",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
    },
    {
      id: 8,
      name: "Data Structures and Algorithms in Python",
      issuer: "Coding Ninjas / Udemy",
      date: "Dec 2021",
      credentialId: "UC-cc3d38d1-a8b8-4e94-8fb4-2c326868d924",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
    },
    {
      id: 9,
      name: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      date: "April 2023",
      credentialId: "UC-249ee538-8ea8-441f-a882-de4b1206816e",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
    },
    {
      id: 10,
      name: "Back End Development Certified",
      issuer: "Coding Ninjas",
      date: "2023",
      credentialId: "Certified",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
    }
  ] as CertificationItem[],

  leadership: [
    {
      id: 1,
      role: "Head – Entrepreneurship Cell (E-Cell)",
      organization: "Centre for Cognitive Activities (CCA), NIT Durgapur",
      duration: "April 2022 – May 2023",
      description: "Spearheaded a cross-functional team of 50+ members to foster an entrepreneurial culture on campus. Mentored 500+ students, conducted high-impact webinars, B-Plan competitions, workshops, and served as Fest Secretary for Aarohan 2022."
    },
    {
      id: 2,
      role: "Senior Fest Coordinator",
      organization: "Aarohan Fest, NIT Durgapur",
      duration: "2020 – 2021",
      description: "Managed a team of 150+ peers under Team Aavishkar to deliver large-scale techno-management events and seminars. Raised funds for NGOs through coordinated sponsorship drives."
    },
    {
      id: 3,
      role: "Sponsorship Head",
      organization: "Darpan (Cultural Club), NIT Durgapur",
      duration: "2021 – 2022",
      description: "Took charge of promoting Hindi language and cultural initiatives, securing key sponsorships to fund club activities and organize engaging cultural events."
    },
    {
      id: 4,
      role: "Open Source Contributor",
      organization: "Girlscript Winter of Contribution (GWOC'21)",
      duration: "Sep 2021 – Nov 2021",
      description: "Contributed well-documented solutions for Data Structures, C/C++, and Competitive Programming topics to shared community repositories."
    }
  ] as LeadershipItem[],

  contact: {
    email: "shubhamraj.nitd@gmail.com",
    altEmail: "shubhamraj1601@gmail.com",
    phone: "+91 99630 47317",
    location: "Mumbai, Maharashtra, India",
    github: "https://github.com/shubhamraj1601",
    linkedin: "https://www.linkedin.com/in/shubham-raj-4a9025196/",
    googleBadges: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
  }
};
