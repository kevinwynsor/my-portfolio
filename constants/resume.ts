export const profile = {
  name: "Kevin Wynsor U. Kong",
  role: "Mainframe & Full-Stack Developer",
  summary:
    "Programmer with experience in banking batch interface development and full-stack software development. Hands-on experience developing and testing COBOL programs and JCL job components for z/OS, validating batch outputs with business stakeholders, coordinating component turnovers through ServiceNow, and supporting UAT and production operations.",
  email: "kevinwynsor@gmail.com",
  github: "https://github.com/kevinwynsor",
  linkedin: "https://www.linkedin.com/in/kevin-wynsor-kong-048741236/",
};

export const experience = [
  {
    company: "BPI",
    title: "Programmer",
    period: "August 2022 – Present",
    points: [
      "Develop and modify COBOL programs and JCL job components for z/OS to implement banking batch interfaces.",
      "Independently develop and test 6–10 batch interfaces, typically involving 3–5 COBOL programs and 10+ JCL job components per interface.",
      "Present interface outputs to business stakeholders, gather feedback, and implement requested changes.",
      "Coordinate turnover of batch components to UAT and production through ServiceNow, working with multiple IT support groups.",
      "Schedule and execute UAT batch jobs with Zeke Scheduler; write ad hoc JCL jobs to address production processing errors.",
      "Monitor deployed production batch jobs for 4–6 months before handover. No critical production errors were encountered during the monitoring periods.",
      "Execute GoAnywhere file transfers and test contractor-developed Zena migration jobs.",
    ],
  },
  {
    company: "Bayanichain",
    title: "Web3 Full Stack Developer (Contractual)",
    period: "February 2023 – November 2025",
    points: [
      "Implemented features, translated designs, resolved bugs, and integrated changes across ReactJS front ends and Node.js/Azure Functions back ends.",
      "Worked with Azure Cloud Platform, Hardhat JS, blockchain technologies, and internal SDKs.",
      "Presented development changes to clients and collaborated with software engineers, designers, and product managers.",
      "Connected front-end and back-end repositories while learning and applying Web3 and Solidity concepts.",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    period: "May 2022 – July 2022",
    points: [
      "Collaborated with developers and designers to deliver work aligned with client requirements.",
      "Learned and applied new skills and frameworks as client requirements called for them.",
    ],
  },
  {
    company: "Symph",
    title: "Full Stack Web Developer Intern",
    period: "January 2022 – May 2022",
    points: [
      "Assisted full-stack developers across projects by fixing bugs, implementing new functionality, and building web pages.",
      "Connected web applications to databases including Firestore and Google Cloud Platform services.",
      "Assisted fellow interns with debugging and presented completed changes during client meetings.",
    ],
  },
];

export const projects = [
  {
    name: "E-Commerce Site for Aplaya",
    period: "July 2026 – Present",
    description:
      "Designed and built a full-stack e-commerce site, with order notifications, customer emails, and order records automated through Discord, Gmail, and Google Sheets.",
    tags: ["Next.js", "Supabase", "Discord", "Gmail", "Google Sheets"],
  },
  {
    name: "Wagging Tails Database",
    period: "May 2024 – June 2024",
    description:
      "A web application that retrieves dog pictures from a public API and displays them in paginated grids.",
    tags: ["ReactJS", "Public API"],
  },
  {
    name: "LC Masonary Home Website",
    period: "May 2022 – June 2022",
    description: "A website page with an emailer implemented through an API.",
    tags: ["ReactJS", "Chakra UI"],
  },
  {
    name: "Missing and Found Persons System",
    period: "April 2021 – December 2021",
    description:
      "Back end for a Philippine National Police project applying the ITIL service desk framework and Agile methodology. Best in Capstone, Service Management batch.",
    tags: ["PHP", "Laravel", "ITIL", "Agile"],
  },
  {
    name: "Sales and Inventory System for Baked by Julia",
    period: "October 2021 – December 2021",
    description:
      "A web-based sales and inventory system built with two team members; connected the front end to Firestore.",
    tags: ["ReactJS", "Firebase", "MUI"],
  },
  {
    name: "Inventory System for Keto Kita PH",
    period: "August 2020 – March 2021",
    description:
      "Served as project manager, back-end developer, and system analyst; connected MySQL data to the front end through EJS.",
    tags: ["Node.js", "MySQL", "EJS"],
  },
  {
    name: "PocketSaver",
    period: "September 2020 – December 2020",
    description:
      "Implemented back-end functionality including user authentication and CRUD operations.",
    tags: ["Node.js", "EJS", "MySQL"],
  },
];

export const skills = [
  { group: "Mainframe", items: ["COBOL", "JCL", "z/OS"] },
  { group: "Batch scheduling and migration", items: ["Zeke Scheduler", "Zena"] },
  { group: "File transfer", items: ["GoAnywhere", "Connect:Direct"] },
  { group: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "PHP"] },
  {
    group: "Frontend",
    items: ["ReactJS", "Next.js", "Vue.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Ant Design", "Chakra UI", "MUI"],
  },
  {
    group: "Backend and APIs",
    items: ["Node.js", "NestJS", "Laravel", "Azure Functions", "GraphQL", "Axios"],
  },
  {
    group: "Cloud and databases",
    items: ["Microsoft Azure", "Google Cloud Platform", "Firebase", "Firestore", "MongoDB", "MySQL"],
  },
  {
    group: "Developer tools",
    items: ["Visual Studio Code", "Eclipse", "Git", "GitHub", "XAMPP", "MongoDB Compass", "Microsoft Office"],
  },
  { group: "Methodologies", items: ["Agile"] },
];

export const education = {
  school: "University of Santo Tomas",
  period: "2018 – 2022",
  degree: "Bachelor of Science in Information Systems, Specialized in Service Management",
};

export const awards = [
  "Dean’s Lister for three consecutive semesters, A.Y. 2020–2022, University of Santo Tomas",
  "Best in Capstone, Service Management batch, for the Missing and Found Persons System",
];

export const languages = [
  "English (Professionally Fluent)",
  "Filipino (Professionally Fluent)",
  "Mandarin (Beginner)",
  "Philippine Hokkien (Beginner)",
];
