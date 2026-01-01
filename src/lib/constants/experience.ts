import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Tata Consultancy Services (TCS iON)",
    positions: [
      {
        title: "Software Engineer",
        year: "Aug 2023 - Present",
        description: `
• Spearheaded platform scalability to reliably support 1M+ daily assessment transactions by decomposing the monolithic evaluation
engine into domain‑driven microservices, establishing clear service boundaries and enforcing idempotent REST interfaces for predictable
request handling.\n
• Accelerated system throughput by 35% and eliminated workflow bottlenecks by orchestrating the transition of core evaluation flows to
a distributed event‑driven architecture, leveraging Kafka/RabbitMQ with asynchronous message queues, consumer groups, and resilient
dead‑letter mechanisms.\n
• Reduced database query latency by 40% and improved data throughput for 1M+ candidate records by restructuring workloads across
MySQL (transactional) and MongoDB (document storage), optimizing indexes, implementing read/write separation, and integrating Redis‑
based hot‑cache layers for high‑frequency operations.\n
• Increased deployment reliability and minimized environment drift by adopting immutable Docker image builds, standardizing
environment parity, and enabling zero‑downtime rolling deployments on AWS EC2 through automated CI/CD pipelines.\n
• Reduced response time by 25% and strengthened operational security by refactoring core modules using scalable design patterns and
implementing RSA/AES encrypted logging with automated key rotation.
`,
        skills: [
          "Java",
          "SpringBoot",
          "SQL",
          "JavaScript",
          "Jenkins",
          "Git",
        ]
      },
    ],
  },
  //   {
  //     company: "BIGmama Technology",
  //     positions: [
  //       {
  //         title: "Fullstack Engineer",
  //         year: "04.2024 - 04.2025",
  //         description: `
  // - ♦ Developed **end-to-end features** across the stack using **Next.js,  Zustand, React Query, FastAPI and Mongodb**.
  // - ♦ Conducted **code reviews**, mentored junior developers, and provided guidance on best practices.
  // - ♦ Collaborated with **UI/UX designers** to translate **Figma designs** into **accessible, pixel-perfect, and responsive UIs**.
  // - ♦ Worked closely with **DevOps engineers** to deploy backend infrastructure on **Kubernetes**.
  // - ♦ Partnered with **AI engineers** to integrate **OpenAI models (text completion + embeddings)** and built a **RAG system using Elasticsearch**.
  //             `,
  //         skills: [
  //           "Next.js",
  //           "React",
  //           "ShadCN UI",
  //           "Zustand",
  //           "React Query",
  //           "Python",
  //           "FastAPI",
  //           "MongoDB",
  //           "Docker",
  //           "Redis",
  //           "Kubernetes",
  //           "S3",
  //           "Elasticsearch",
  //           "ARQ",
  //         ],
  //       },
  //       {
  //         title: "Backend Engineer",
  //         year: "01.2024 - 04.2024",
  //         description: `
  // - ♦ Implemented **backend functionalities**, designed **database models**, and optimized APIs using **FastAPI, Python, and MongoDB**.
  // - ♦ Developed and maintained a **background worker system** using **ARQ and Redis**.
  // - ♦ Brainstormed and debugged **new features and functionalities** with the engineering team.
  // - ♦ Refactored and cleaned code, implementing **better coding patterns** and enforcing **formatting & linting rules** using **Ruff**.
  // - ♦ Deployed backend services using **Docker & Docker Compose** and improved **CI/CD pipelines** with **GitHub Actions**.
  //             `,
  //         skills: [
  //           "Python",
  //           "FastAPI",
  //           "MongoDB",
  //           "Docker",
  //           "Redis",
  //           "ARQ",
  //           "GoLang",
  //           "Next.js",
  //           "React",
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     company: "Freelance | Upwork | Locally",
  //     positions: [
  //       {
  //         title: "MERN Stack Developer",
  //         year: "01.2023 - 01.2024",
  //         description: `
  // - ♦ Developed **landing pages and business websites** for local businesses and personal brands.
  // - ♦ Built **full-stack MERN applications** for university students, helping them launch **MVPs** for grading projects and startups.
  // - ♦ Assisted **university professors** in creating **demo applications** to serve as case studies for students.
  //             `,
  //         skills: [
  //           "React",
  //           "Express.js",
  //           "MongoDB",
  //           "Node.js",
  //           "Docker",
  //           "Tailwind CSS",
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     company: "Fennec Digital",
  //     positions: [
  //       {
  //         title: "Frontend Developer Intern",
  //         year: "01.2023 - 03.2023",
  //         description: `
  // - ♦ Redesigned and developed a **conceptual landing page** for the company using **Next.js, React, and Tailwind CSS**.
  // - ♦ Collaborated with **full-stack engineers**, gaining insights into **best practices** in a professional development environment.
  // - ♦ Received feedback from **UI/UX and graphic designers** to refine and enhance the visual and user experience of my designs.
  //             `,
  //         skills: ["Next.js", "React", "Tailwind CSS", "Figma", "Node.js"],
  //       },
  //     ],
  //   },

  {
    company: "Education",
    positions: [
      {
        title: "Computer Science and Engineering | University Institute of Technology RGPV",
        year: "May 2019 – Jun 2023",
        description: `
        CGPA: 8.23
            `,
        skills: [
          "Java",
          "C/C++",
          "Data Structures",
          "SQL / MySQL",
          "MongoDB",
          "Linux",
          "UI/UX Foundation",
          "Networking",
          "Algorithms",
          "Relational Databases",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];

