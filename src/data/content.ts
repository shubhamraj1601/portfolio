// content.ts
// This file contains all the content for your portfolio website.
// Update the values here, and they will automatically reflect on the site.

export const portfolioData = {
  hero: {
    name: "Shubham Raj",
    role: "Data Engineer",
    tagline: "Building digital experiences that combine beautiful design with robust engineering.",
    resumeLink: "/resume.txt",
  },

  about: {
    summary: "I'm a passionate data engineer with over 2 years of experience in enterprise-scale cloud migrations, ETL pipeline development, and EDW modernization on GCP, backed by a strong foundation in software engineering and full-stack development.",
  },

  experience: [
    {
      id: 1,
      role: "Data Engineer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2022 - Present",
      description: "Led the development of a next-generation dashboard using React and TypeScript. Improved performance by 40% and mentored junior developers.",
      technologies: ["React", "TypeScript", "Vite", "Zustand"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Digital Solutions LLC",
      duration: "Jun 2019 - Dec 2021",
      description: "Developed and maintained full-stack web applications. Implemented RESTful APIs and integrated third-party payment gateways.",
      technologies: ["Node.js", "Express", "MongoDB", "Vue.js"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully featured e-commerce platform with real-time inventory management and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates using WebSockets.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React", "Node.js", "Socket.io", "Redis"],
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
