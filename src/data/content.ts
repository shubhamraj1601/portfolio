// content.ts
// This file contains all the content for your portfolio website.
// Update the values here, and they will automatically reflect on the site.

export const portfolioData = {
  hero: {
    name: "Shubham Raj",
    role: "Data Engineer",
    tagline: "Building digital experiences that combine beautiful design with robust engineering.",
    resumeLink: "/Shubham_Resume.pdf",
  },

  about: {
    paragraphs: [
      "I'm a passionate data engineer with over 2 years of experience in enterprise-scale cloud migrations, ETL pipeline development, and EDW modernization on GCP, backed by a strong foundation in software engineering and full-stack development.",
      "Committed to continuous learning and am looking to contribute in challenging projects, known for developing creative and effective solutions. I am actively strengthening my current skills, exploring new ways of machine learning and aspiring to be a part of the ever-growing technical field.",
      "I believe that data is the key to unlocking business value, and I am passionate about using my skills to help organizations make better decisions and achieve their goals."
    ],
  },

  experience: [
    {
      id: 1,
      role: "Data Engineer",
      company: "Quantiphi Analytics",
      duration: "Jan 2023 - Present",
      description: "Worked on Data Migration projects for global clients, migrating terabytes of data from legacy on-premises data centers to cloud platforms like Snowflake and Google Cloud. Orchestrated complex ETL/ELT pipelines using Apache Airflow & DBT, ensuring data integrity and minimal downtime during migration windows.",
      technologies: ["Google Cloud Platform", "Apache Airflow", "PySpark/Apache Spark", "DBT", "Snowflake", "Data Migration", "ETL/ELT", "Python", "SQL"]
    },
    {
      id: 2,
      role: "Full Stack Developer - Intern",
      company: "Mudrika Finance Pvt Ltd.",
      duration: "Apr 2022 - Jun 2022",
      description: "Full-stack developer experienced in building responsive React Native apps, optimizing web dashboards, designing robust APIs and database models, and implementing secure JWT authentication.",
      technologies: ["React Native", "React", "Node.js", "PHP", "MySQL", "JWT"]
    },
    {
      id: 3,
      role: "Backend Developer - Intern",
      company: "Dr. Reddys Laboratories Pvt Ltd.",
      duration: "Jul 2021 - Nov 2021",
      description: "Developed a reactive web application featuring secure, role-based data access and efficient API pipelines optimized to fetch, cache, and display millions of data points seamlessly.",
      technologies: ["React.js", "Node.js", "Express", "BigQuery", "Firebase"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Career Choice Questionnaire - Yancha",
      description: ["Engineered a full-stack career assessment web application featuring dynamic question generation, robust state management, secure user authentication, and automated report generation.",
        "Architected a backend API and MySQL database to store user data, implementing a behavioral analysis model (RAPD) that evaluates traits to deliver tailored career recommendations."
      ],
      image: "/yancha.png",
      technologies: ["Vue.js", "Tailwind CSS", "Flask", "MySQL", "Deployment", "Session Storage", "State Management"],
      // githubUrl: "#",
      liveUrl: "https://www.yancha.in/"
    },
    {
      id: 2,
      title: "Claims Automation",
      description: ["Developed scalable .NET Core 8.0 APIs following SOLID and MVC principles, alongside intuitive Blazor WebAssembly user interfaces and reusable components for a seamless user experience.",
        "Designed the complete database schema, dependencies, and complex stored procedures, delivering a system projected to reduce average insurance claims processing time by 90%."
      ],
      image: "/claims.png",
      technologies: [".NET Core 8.0", "Blazor WebAssembly", "SQL Server", "MSSQL", "MVC", "Entity Framework"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ],

  skills: {
    frontend: ["React", "TypeScript", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "GraphQL"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"]
  },

  academics: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "2017 - 2019",
      description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Graduated with Honors."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Technology",
      duration: "2013 - 2017",
      description: "Dean's List all semesters. Capstone project focused on distributed systems."
    }
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "/cert1.txt"
    },
    {
      id: 2,
      name: "Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2022",
      link: "/cert2.txt"
    }
  ],

  volunteerism: [
    {
      id: 1,
      role: "Code Mentor",
      organization: "Tech for Good",
      duration: "2020 - Present",
      description: "Mentoring underprivileged youth in web development fundamentals."
    }
  ],

  contact: {
    email: "shubhamraj.nitd@gmail.com",
    github: "https://github.com/shubhamraj1601",
    linkedin: "https://www.linkedin.com/in/shubham-raj-4a9025196/"
    // twitter: "https://twitter.com"
  }
};
