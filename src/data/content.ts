// content.ts
// Single source of truth for all text on the portfolio.
// Edit this file to update the website — no UI code changes needed.

export interface ExperienceProject {
  title: string;
  domain: string;
  stack: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location?: string;
  duration: string;
  summary?: string;
  // Either grouped by client project (projects) or a flat list (highlights)
  projects?: ExperienceProject[];
  highlights?: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string[];
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: 'ai' | 'data' | 'cloud' | 'code' | 'tools' | 'web';
  note?: string;
  items: string[];
}

export interface AcademicItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  current?: boolean;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;          // shown as-is; the last 4-digit year is used for timeline grouping
  credentialId?: string;
  link: string;          // leave "" if you don't have a public URL — the item will show without a link
  tags?: string[];       // e.g. ["AI"] highlights the entry
}

export interface VolunteerItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export const portfolioData = {
  meta: {
    siteTitle: "Shubham Raj | Data Engineer & AI/ML Enthusiast",
  },

  hero: {
    name: "Shubham Raj",
    headline: "Data Engineer · AI & ML Enthusiast",
    location: "Mumbai, India",
    certification: "Google Cloud Certified Professional Data Engineer",
    tagline:
      "I build reliable, large-scale data platforms on Google Cloud — and I'm taking that foundation into AI & machine learning: ML-ready data, LLM-powered applications and intelligent agents.",
    availability: "Open to remote full-time roles & freelance work",
    avatar: "/images/avatar.jpg",
    navAvatar: "/images/pfp-face.png",
    banner: "/images/banner.jpg",
    resumeLink: "/Shubham_Resume.pdf",
    stats: [
      { value: "3+ yrs", label: "Data engineering on GCP" },
      { value: "1,300+", label: "Enterprise tables migrated" },
      { value: "98%", label: "Faster query runtimes" },
      { value: "150+", label: "Airflow DAGs orchestrated" }
    ]
  },

  about: {
    paragraphs: [
      "I'm a Data Engineer with 3+ years of experience designing and modernizing enterprise-scale data platforms on Google Cloud. I've migrated thousands of tables off legacy systems, modeled analytics-ready Data Vaults with dbt, orchestrated hundreds of Airflow pipelines and tuned SQL from hours down to minutes — across healthcare, insurance, finance and data-center domains.",
      "Good AI starts with good data, and that's where my career is heading. I'm pursuing an M.Tech in Artificial Intelligence & Machine Learning at BITS Pilani, and building hands-on with Vertex AI, BigQuery ML, vector search and Google's Agent Development Kit — turning clean, well-modeled data into ML features, LLM-powered apps and AI agents.",
      "Earlier in my career I worked across the stack — APIs, databases and frontends — which still helps me ship things end to end. I'm open to remote full-time roles and freelance projects in data engineering, ML engineering and applied AI."
    ],
    currently: [
      { label: "Working", text: "Data Engineer at Quantiphi" },
      { label: "Studying", text: "M.Tech in AI & ML at BITS Pilani" },
      { label: "Exploring", text: "AI agents (Google ADK), RAG & vector search, BigQuery ML" }
    ]
  },

  experience: [
    {
      id: 1,
      role: "Data Engineer",
      company: "Quantiphi Analytics Solutions Pvt. Ltd.",
      location: "Mumbai, India",
      duration: "Jan 2023 – Present",
      summary:
        "Designing, migrating and modernizing enterprise data platforms on Google Cloud for clients across four industry domains — and leading a team of data engineers on parallel data-model delivery.",
      projects: [
        {
          title: "Enterprise Data Platform Modernization",
          domain: "Data Center",
          stack: "GCP · dbt · Data Vault",
          highlights: [
            "Migrated 1,300+ enterprise tables, built 200+ business views and delivered 400+ Tableau reports by integrating Oracle, Exasol, DB2 and other sources into BigQuery.",
            "Led a team of data engineers — planning deliverables, reviewing code, resolving blockers and coordinating parallel development across multiple data models.",
            "Designed Data Vault (Raw, Business, Gold) models in dbt for a scalable, analytics-ready architecture.",
            "Built multi-stage validation and reconciliation logic for enterprise revenue reporting, ensuring 100% data accuracy."
          ]
        },
        {
          title: "Legacy Data Modernization",
          domain: "Insurance",
          stack: "BigQuery · PySpark",
          highlights: [
            "Converted Mainframe (COBOL) programs into optimized BigQuery SQL, migrating billions of records across 30+ enterprise processes with 100% reconciliation accuracy.",
            "Built scalable PySpark transformation frameworks on Dataproc Serverless for distributed processing of high-volume datasets.",
            "Tuned Spark workloads with partitioning strategies and query optimization, improving performance and cutting execution costs by 25%."
          ]
        },
        {
          title: "Healthcare Data Platform Modernization",
          domain: "Healthcare",
          stack: "BigQuery · Apache Airflow",
          highlights: [
            "Built and operated Airflow (Cloud Composer) ETL pipelines migrating data from Teradata to BigQuery.",
            "Reduced a critical SQL transformation from 12+ hours to under 10 minutes through query tuning and execution-plan optimization.",
            "Implemented centralized monitoring and alerting for 150–200 DAGs across 10–15 business teams, improving SLA compliance."
          ]
        },
        {
          title: "Cloud Data Migration",
          domain: "Finance",
          stack: "Snowflake → BigQuery",
          highlights: [
            "Built and deployed end-to-end migration pipelines from Snowflake to BigQuery using Informatica IICS.",
            "Automated data transfers with Python ETL scripts and Cloud Functions, processing 1M+ rows of diverse data files.",
            "Validated production readiness through SQL reconciliation and functional testing across Dev and QA, and built Tableau dashboards for post-migration analytics."
          ]
        }
      ],
      technologies: ["Google Cloud", "BigQuery", "Apache Airflow", "dbt", "Data Vault", "PySpark", "Dataproc", "Python", "SQL", "Snowflake", "Informatica IICS", "Tableau"]
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Mudrika Finance Pvt. Ltd.",
      location: "Remote",
      duration: "May 2022 – Jul 2022",
      highlights: [
        "Modeled MySQL schemas and fact tables for processed user data, setting up dependencies for downstream analytics.",
        "Built Node.js and PHP APIs with JWT-based authentication, and redesigned 70% of the dashboard UI in React Native."
      ],
      technologies: ["MySQL", "Node.js", "PHP", "React Native", "JWT"]
    },
    {
      id: 3,
      role: "Backend Developer Intern",
      company: "Dr. Reddy's Laboratories Ltd.",
      location: "Hyderabad, India",
      duration: "Jul 2021 – Nov 2021",
      highlights: [
        "Built APIs to fetch and analyze millions of BigQuery records for analytical dashboards.",
        "Cut cloud compute costs with caching and browser-side storage for frequently queried data, and added filtering, pagination and search."
      ],
      technologies: ["BigQuery", "Node.js", "Express", "React", "Firebase"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 1,
      title: "Claims Automation Platform",
      subtitle: "Freelance Project",
      description: [
        "Built scalable backend APIs in ASP.NET Core 8.0 following SOLID and MVC principles.",
        "Designed database schemas, fact tables and stored procedures in MS SQL Server for heavy data operations.",
        "Delivered Blazor WebAssembly interfaces for a workflow projected to cut insurance claim turnaround by ~90%."
      ],
      image: "/images/claims.jpg",
      technologies: ["ASP.NET Core 8", "C#", "MS SQL Server", "Blazor", "Entity Framework"]
    },
    {
      id: 2,
      title: "Career Choice Questionnaire",
      subtitle: "Freelance Project · Yancha",
      description: [
        "Career-guidance app that profiles users with the RAPD behavioral model (Resource utilization, Attitude, Personality, Decision making).",
        "Dynamic question generation based on earlier answers, plus automated PDF report generation.",
        "Flask APIs and MySQL models capture responses for downstream behavioral analysis."
      ],
      image: "/images/yancha.jpg",
      technologies: ["Python", "Flask", "MySQL", "Vue.js"],
      liveUrl: "https://www.yancha.in/"
    },
    {
      id: 3,
      title: "Story of Life Simulation",
      subtitle: "Freelance Project · Yancha",
      description: [
        "Interactive simulation that tracks a user's decisions and turns them into an analytical life report.",
        "Dashboard views in Vue 3 with persistent session analytics."
      ],
      image: "/images/story-of-life.jpg",
      technologies: ["Vue 3", "JavaScript", "Session Analytics"]
    },
    {
      id: 4,
      title: "Codeial",
      subtitle: "Personal Project",
      description: [
        "Social profile-building web app with secure login/logout and cookie-based sessions.",
        "REST APIs on Node.js and Express with a MongoDB data layer."
      ],
      image: "/images/codeial.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"]
    }
  ] as ProjectItem[],

  skills: [
    {
      title: "AI & Machine Learning",
      icon: "ai",
      note: "Current focus",
      items: [
        "Generative AI", "LLMs & Prompt Design", "Vertex AI & Gemini", "AI Agents (Google ADK)",
        "Vector Search & Embeddings", "BigQuery ML", "Feature Engineering", "Responsible AI"
      ]
    },
    {
      title: "Data Engineering",
      icon: "data",
      items: [
        "ETL / ELT Pipelines", "Data Modeling (Data Vault)", "dbt", "Apache Airflow",
        "PySpark / Spark", "Data Migration", "Data Quality & Reconciliation", "SQL Optimization"
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: "cloud",
      items: [
        "Google Cloud Platform", "BigQuery", "Cloud Composer", "Dataproc Serverless",
        "Cloud Run", "Cloud Storage", "Dataflow", "Snowflake"
      ]
    },
    {
      title: "Languages",
      icon: "code",
      items: ["Python (Pandas)", "SQL", "PySpark", "JavaScript / TypeScript", "C++", "C#", "COBOL (legacy)"]
    },
    {
      title: "Databases & Tools",
      icon: "tools",
      items: [
        "Teradata", "Exasol", "DB2", "MySQL", "MS SQL Server",
        "Tableau", "Informatica IICS", "Git & GitHub Actions", "CI/CD"
      ]
    },
    {
      title: "Software Engineering",
      icon: "web",
      items: ["REST APIs", "Flask", "Node.js", "ASP.NET Core", "React", "Vue.js"]
    }
  ] as SkillCategory[],

  domains: ["Healthcare", "Insurance", "Finance", "Data Centers"],

  academics: [
    {
      id: 1,
      degree: "M.Tech in Artificial Intelligence & Machine Learning",
      institution: "BITS Pilani (Work Integrated Learning Programme)",
      duration: "Jul 2026 – Jun 2028 (expected)",
      description: "Advanced coursework in machine learning, deep neural networks, AI system design and intelligent data processing, pursued alongside full-time work.",
      current: true
    },
    {
      id: 2,
      degree: "B.Tech in Metallurgical and Materials Engineering",
      institution: "National Institute of Technology (NIT) Durgapur",
      duration: "Jul 2019 – Jun 2023",
      description: "CGPA 7.87/10. Undergraduate thesis on Extract-Transform-Load (ETL), exploring automation in cloud data migration and legacy EDW modernization."
    },
    {
      id: 3,
      degree: "Intermediate (Class 12) — TSBIE",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      duration: "2017 – 2019",
      description: "93.7% (937/1000) in Mathematics, Physics and Chemistry."
    },
    {
      id: 4,
      degree: "Secondary School (Class 10) — CBSE",
      institution: "D.A.V Public School",
      duration: "2017",
      description: "CGPA 9.8/10 (93.1%)."
    }
  ] as AcademicItem[],

  // Ordered newest first. To add/edit a certificate, change an entry below.
  certifications: [
    {
      id: 1,
      name: "AI Agents with Agent Development Kit (ADK) — Skill Badges",
      issuer: "Google Cloud",
      date: "Jul 2026",
      credentialId: "Deploy & Evaluate ADK Agents",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a",
      tags: ["AI"]
    },
    {
      id: 2,
      name: "Engineer Data for Predictive Modeling with BigQuery ML",
      issuer: "Google Cloud",
      date: "Jul 2026",
      credentialId: "Skill Badge",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a",
      tags: ["AI"]
    },
    {
      id: 3,
      name: "Mastering Google Dataform: Beginner to Pro",
      issuer: "Udemy",
      date: "Sep 2025",
      credentialId: "UC-f3253392-49fa-4350-9a70-2e767628864a",
      link: "https://www.udemy.com/certificate/UC-f3253392-49fa-4350-9a70-2e767628864a/"
    },
    {
      id: 4,
      name: "Google Cloud Certified — Professional Data Engineer",
      issuer: "Google Cloud",
      date: "Dec 2024",
      credentialId: "27b328d7cad04a7cad547c3997276c84",
      link: "https://drive.google.com/file/d/1C5UUnTtIAcMRFOdA44tZmAnAS3tjJ3Z9/view?usp=drivesdk"
    },
    {
      id: 5,
      name: "Generative AI for Developers — Vertex AI, LLMs, Vector Search (Skill Badges)",
      issuer: "Google Cloud",
      date: "Feb – Sep 2024",
      credentialId: "Multiple badges",
      link: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a",
      tags: ["AI"]
    },
    {
      id: 6,
      name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Nov 2023",
      credentialId: "100417117OCI23AIFCA",
      link: "https://drive.google.com/file/d/1AL5xaZt9WvB9pX_76y2Hbx18BhfUdtEn/view?usp=drivesdk",
      tags: ["AI"]
    },
    {
      id: 7,
      name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Nov 2023",
      credentialId: "100417117OCIF2023CA",
      link: "https://drive.google.com/file/d/1BG_mESwk6FcE8i-KWs93oQrBaN1B_7q7/view?usp=drivesdk"
    },
    {
      id: 8,
      name: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp & Microsoft",
      date: "Sep 2023",
      credentialId: "fcc955cbbd8-f37c-4dd4-9603-419674ad7de8",
      link: "https://www.freecodecamp.org/certification/fcc955cbbd8-f37c-4dd4-9603-419674ad7de8/foundational-c-sharp-with-microsoft"
    },
    {
      id: 9,
      name: "Google Cloud Certified — Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "May 2023",
      credentialId: "5356308cf4bb441abd9028cf46bcf3c5",
      link: "https://drive.google.com/file/d/1_peCe0zwCYnYiLYUoWE_Hi2DA28ufs8m/view?usp=drivesdk"
    },
    {
      id: 10,
      name: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      date: "Apr 2023",
      credentialId: "UC-249ee538-8ea8-441f-a882-de4b1206816e",
      link: "https://www.udemy.com/certificate/UC-249ee538-8ea8-441f-a882-de4b1206816e/"
    },
    {
      id: 11,
      name: "Back End Development",
      issuer: "Coding Ninjas",
      date: "2023",
      link: ""
    },
    {
      id: 12,
      name: "Data Structures and Algorithms in Python",
      issuer: "Udemy",
      date: "Dec 2021",
      credentialId: "UC-cc3d38d1-a8b8-4e94-8fb4-2c326868d924",
      link: "https://www.udemy.com/certificate/UC-cc3d38d1-a8b8-4e94-8fb4-2c326868d924/"
    }
  ] as CertificationItem[],

  volunteer: [
    {
      id: 1,
      role: "Head — Entrepreneurship Cell (E-Cell)",
      organization: "Centre for Cognitive Activities, NIT Durgapur",
      duration: "Apr 2022 – May 2023",
      description: "Led a cross-functional team of 50+ members to build an entrepreneurial culture on campus. Mentored 500+ students through webinars, B-Plan competitions and workshops, and served as Fest Secretary for Aarohan 2022."
    },
    {
      id: 2,
      role: "Sponsorship Head",
      organization: "Darpan (Cultural Club), NIT Durgapur",
      duration: "2021 – 2022",
      description: "Promoted Hindi language and cultural initiatives, securing sponsorships to fund club activities and cultural events."
    },
    {
      id: 3,
      role: "Open Source Contributor",
      organization: "GirlScript Winter of Contribution (GWOC '21)",
      duration: "Sep 2021 – Nov 2021",
      description: "Contributed well-documented solutions for Data Structures, C/C++ and Competitive Programming topics to shared community repositories."
    },
    {
      id: 4,
      role: "Senior Fest Coordinator",
      organization: "Aarohan Fest, NIT Durgapur",
      duration: "2020 – 2021",
      description: "Coordinated 150+ peers under Team Aavishkar to deliver large-scale techno-management events, and raised funds for NGOs through sponsorship drives."
    }
  ] as VolunteerItem[],

  contact: {
    email: "shubhamraj.nitd@gmail.com",
    location: "Mumbai, India",
    github: "https://github.com/shubhamraj1601",
    linkedin: "https://www.linkedin.com/in/shubham-raj-4a9025196/",
    googleBadges: "https://partner.skills.google/public_profiles/d414ca52-79f4-4db1-b315-fe4ff09d582a"
  }
};
