export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    duration: "Oct 2025– present",
    location: "Bengaluru",
    description: [
      "Build foundational knowledge of enterprise backend architectures, CI/CD concepts, AWS, SQL and PAM tool: Cyberark."
    ],
  },
  {
    role: "React Developer",
    company: "Seequenze Technologies",
    duration: "Jan 2024– April 2024",
    location: "Bengaluru",
    description: [
      "Led the development of a customer facing web platform featuring a real-time support system and AI-powered chatbot.",
      "Collaborated on building a Java based automation tool that generates React code directly from figma design."
    ],
    skills: ["Next.js", "React", "Javascript", "Java", "AWS", "Jenkins", "Tailwind CSS"]
  }
];
