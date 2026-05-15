// ADITHYA SANKALP REDDY KONDA'S Portfolio Data
// All content for Adithya's portfolio website

const portfolioData = {
  personalInfo: {
    name: "ADITHYA SANKALP REDDY KONDA",
    title: "Software Engineer",
    location: "Salt Lake City, UT",
    phone: "+1 (707) 771-8009",
    email: "adithyasankalpreddyk@gmail.com",
    github: "https://github.com/adithyardy",
    linkedin: "https://www.linkedin.com/in/adithyakonda/",
    profileImage: "/profile.png",
    resume: "#" // Link to resume if available
  },

  summary: "Software Engineer with 2+ years of experience building Backend and Fullstack web applications using Node.js, React, Spring Boot, MongoDB, AWS, and Python, delivering REST APIs and real-time WebSocket-based application workflows in U.S.-based environments. Improved production reliability through structured logging, health checks, retry-safe synchronization pipelines, and CI/CD automation using GitHub Actions and Docker, enabling stable releases and faster issue resolution. Contributed to scalable Backend and Front-end application features that reduced latency by 25% and supported 100+ concurrent users across distributed web platforms.",

  skills: {
    programmingLanguages: [
      "Python",
      "JavaScript",
      "Java",
      "C#"
    ],
    backendDevelopment: [
      "Node.js",
      "Spring Boot",
      "REST API development",
      "WebSockets",
      "Microservices fundamentals",
      "Event-driven processing",
      "Retry logic",
      "Idempotency handling",
      "Backend application development"
    ],
    frontendDevelopment: [
      "React.js",
      "Responsive web interfaces",
      "Component-based architecture",
      "Front-end application integration"
    ],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL query optimization",
      "Backend data modelling"
    ],
    cloudPlatformTechnologies: [
      "AWS (Lambda, API Gateway, S3, CloudFront, EC2, CloudWatch)",
      "Azure fundamentals",
      "Backend service deployment",
      "Platform reliability improvements"
    ],
    softwareEngineeringPractices: [
      "Application design",
      "Fullstack web development",
      "Offline-first workflow handling",
      "Structured logging",
      "Telemetry",
      "Health checks",
      "Error handling strategies",
      "Software reliability improvements"
    ],
    devOpsCicd: [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Release automation pipelines"
    ],
    testingObservability: [
      "Monitoring",
      "Performance debugging",
      "Load testing",
      "Service diagnostics"
    ],
    developerTools: [
      "Linux/Unix",
      "GitHub",
      "Jira",
      "Postman"
    ]
  },

  experience: [
    {
      company: "Andbounds",
      role: "Software Engineer",
      location: "Jul 2025 - Present",
      duration: "Present",
      achievements: [
        "Designed a Backend application upload pipeline using Node.js and MongoDB that stored scan data locally and synchronized automatically after connectivity recovery, preventing field data loss and improving capture reliability by 38%.",
        "Implemented Software Engineer-level structured logging and telemetry workflows using CloudWatch and service diagnostics, reducing incident triage time for support teams by 27%.",
        "Engineered REST API retry and idempotency handling across mobile-to-backend integrations, improving transaction consistency during unstable network conditions.",
        "Optimized Backend service restart strategies using PM2 process management, reducing deployment-related downtime across production environments by 22%.",
        "Strengthened Application reliability by introducing health-check endpoints and service monitoring integrations that improved production visibility for Platform engineering stakeholders.",
        "Collaborated with Frontend developers and hardware integration teams to stabilize scan lifecycle workflows across mobile capture devices and backend processing services.",
        "Automated deployment validation pipelines using GitHub Actions and Docker to support consistent release workflows across staging and production environments.",
        "Supported cross-team backlog delivery planning in Jira by identifying API dependencies early and coordinating release sequencing across Web, mobile, and backend application layers."
      ]
    },
    {
      company: "The Piper LLC",
      role: "Software Development Engineer",
      location: "Sep 2024 - May 2025",
      duration: "2024 - 2025",
      achievements: [
        "Developed Backend WebSocket-based ride lifecycle synchronization services using Node.js that maintained real-time trip state transitions across rider-driver sessions.",
        "Implemented Front-end session persistence logic using React state recovery workflows that restored active ride status after app reconnection events, improving booking continuity by 31%.",
        "Built Application-level event-driven status propagation pipelines supporting match-to-completion ride workflows across distributed service endpoints.",
        "Validated API contract handling between Backend microservices and mobile clients using structured response verification, reducing edge-case failures during reconnection scenarios by 24%.",
        "Enhanced Fullstack Developer collaboration with backend teams to align WebSocket payload formats and lifecycle state transitions across trip orchestration modules.",
        "Reduced application failure states by introducing reconnect-safe retry handling inside frontend service adapters supporting intermittent connectivity scenarios.",
        "Integrated monitoring checkpoints across Backend ride-processing endpoints enabling Platform engineering teams to trace lifecycle anomalies faster.",
        "Partnered with cross-functional product stakeholders to refine trip-state transition logic supporting consistent user experience across Web and mobile application layers."
      ]
    },
    {
      company: "Arizona State University",
      role: "Software Engineer",
      location: "Jan 2024 - Nov 2024",
      duration: "2024",
      achievements: [
        "Engineered Spring Boot Backend REST API integrations supporting live classroom attendance ingestion workflows connected to ASU ID scanner devices, reducing manual attendance tracking time by 70%.",
        "Developed React-based Front-end application components with reusable state-controlled UI modules improving maintainability across instructor session workflows.",
        "Collaborated with university infrastructure teams to integrate scanner hardware inputs with Backend session validation services supporting lecture hall deployments.",
        "Optimized SQL-backed attendance retrieval endpoints improving Web dashboard load performance by 25% during concurrent classroom access periods.",
        "Implemented CI/CD automation pipelines using GitHub Actions supporting controlled deployment of application updates across testing environments.",
        "Executed load testing simulations for 100+ concurrent classroom users validating service stability across peak attendance submission windows.",
        "Strengthened Backend data modeling workflows supporting reliable student-session mapping across lecture ingestion pipelines.",
        "Partnered with academic stakeholders and Platform technologists to align application behavior with classroom operational requirements and institutional reporting workflows."
      ]
    }
  ],

  projects: [
    {
      title: "Real-Time Delivery Tracking System",
      description: "Architected a real-time Web tracking application using Node.js and WebSockets to stream live vehicle location updates, enabling continuous trip visibility across active delivery sessions. Implemented a React-based Front-end mapping interface integrated with route visualization APIs.",
      technologies: ["Node.js", "WebSockets", "React", "AWS", "EC2", "CloudWatch"],
      liveUrl: "#",
      repoUrl: "https://github.com/adithyardy",
      image: "/delivery_tracking.png"
    },
    {
      title: "AI Resume & Job Match Analyzer",
      description: "Designed a Python-based semantic similarity pipeline using embeddings to evaluate resume-job alignment and generate structured improvement insights. Developed a Node.js Backend processing service integrated with AWS Lambda, API Gateway, and S3.",
      technologies: ["Python", "Node.js", "AWS Lambda", "API Gateway", "S3", "React"],
      liveUrl: "#",
      repoUrl: "https://github.com/adithyardy",
      image: "/ai_resume_analyzer.png"
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      duration: "May 2021 - May 2025"
    }
  ],

  certifications: [
    {
      name: "Developing Cloud Applications with Node.js and React",
      provider: "Coursera",
      year: "2024",
      credentialUrl: "#"
    },
    {
      name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Continuous Integration and Continuous Delivery (CI/CD)",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Introduction to Cloud Computing",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    },
    {
      name: "Programming for Everybody",
      provider: "Coursera",
      year: "2022",
      credentialUrl: "#"
    },
    {
      name: "Server-side Development with NodeJS, Express and MongoDB",
      provider: "Coursera",
      year: "2023",
      credentialUrl: "#"
    }
  ],

  contact: {
    email: "adithyasankalpreddyk@gmail.com",
    phone: "+1 (707) 771-8009",
    github: "https://github.com/adithyardy",
    linkedin: "https://www.linkedin.com/in/adithyakonda/",
    location: "Salt Lake City, UT"
  }
};

export default portfolioData;
