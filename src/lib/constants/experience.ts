import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Agilepoint",
    positions: [
      {
        title: "Senior Software Engineer",
        year: "April 2026 - Present",
        description: `
- Contributing to the core product team developing an **enterprise-grade no-code workflow automation platform**, enabling organizations to build, automate, and orchestrate complex business processes.
- Designing and implementing full-stack features using **React** and **Spring Boot**, translating business requirements into scalable, maintainable, and production-ready solutions.
- Driving end-to-end feature development across frontend and backend systems, collaborating with cross-functional teams to enhance **platform capabilities**, **user experience**, and **system reliability**.`,
        skills: [
          "Java",
          "SpringBoot",
          "ReactJS",
          "AWS",
          "Docker",
          "Kubernetes",
        ]
      },
    ],
  },
  {
    company: "Tata Consultancy Services (TCS iON)",
    positions: [
      {
        title: "Software Engineer",
        year: "Aug 2023 - April 2026",
        description: `
- Spearheaded platform scalability to reliably support **1M+ daily assessment transactions** by decomposing the monolithic evaluation engine into **domain-driven microservices**, establishing clear service boundaries and enforcing idempotent REST interfaces.
- Accelerated system throughput by **35%** and eliminated workflow bottlenecks by orchestrating the transition of core evaluation flows to a **distributed event-driven architecture**, leveraging **Kafka/RabbitMQ** with asynchronous message queues.
- Reduced database query latency by **40%** and improved data throughput for **1M+ candidate records** by restructuring workloads across **MySQL** (transactional) and **MongoDB** (document storage), optimizing indexes, and integrating **Redis-based hot-cache layers**.
- Increased deployment reliability and minimized environment drift by adopting **immutable Docker image builds**, standardizing environment parity, and enabling **zero-downtime rolling deployments on AWS EC2** through automated CI/CD pipelines.
- Reduced response time by **25%** and strengthened operational security by refactoring core modules using scalable design patterns and implementing **RSA/AES encrypted logging** with automated key rotation.`,
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
  {
    company: "Education",
    positions: [
      {
        title: "Computer Science and Engineering | University Institute of Technology RGPV",
        year: "May 2019 – Jun 2023",
        description: `CGPA: **8.23**`,
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

