export const contactEmail = "eniolaamusu1@gmail.com";

export const socialLinks = {
  email: `mailto:${contactEmail}`,
  x: "https://x.com/eniolamusu",
  linkedIn: "https://www.linkedin.com/in/eniolamusu",
};

export const navigation = [
  { id: "projects", label: "Projects" },
  // { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  // { id: "experience", label: "Experience" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export type TechnologyName =
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "Git"
  | "Python"
  | "Postgresql"
  | "Node.js"
  | "Groq"
  | "Expo"
  | "FastAPI"
  | "MySql"
  | "Sqlite"
  | "HTML"
  | "CSS"
  | "Supabase"
  | "JavaScript";

export type ProjectTone = "mint" | "blue" | "sand";

export type Project = {
  id: string;
  name: string;
  type: string;
  description: string;
  tone: ProjectTone;
  technologies: TechnologyName[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "onboard360",
    name: "Onboard360",
    type: "Full Stack development · Web app",
    description:
      "An internal platform that helps companies onboard new employees and contractors.",
    tone: "mint",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Postgresql", "Groq"],
    link: "https://useonboard360.vercel.app",
  },
  {
    id: "chowbuddy",
    name: "ChowBuddy",
    type: "Independent project · Mobile app",
    description:
      "An app for meal planning and tracking calories in Nigerian food for fitness enthusiasts",
    tone: "sand",
    technologies: ["Expo", "TypeScript", "Tailwind CSS", "Node.js", "Postgresql", "Groq"],
    link: "https://chowbuddy.me",
  },
    {
    id: "thesisflow",
    name: "ThesisFlow",
    type: "Independent project · Web app",
    description:
      "A platform for final year students to manage their thesis projects, collaborate with supervisors, and track progress.",
    tone: "sand",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Sqlite"], 
    link: "#",
  },
  {
    id: "bookr",
    name: "Bookr",
    type: "Independent project · Web app",
    description:
      "A platform for student to book rooms in their school hostels, manage bookings, and track availability.",
    tone: "sand",
    technologies: ["React", "Tailwind CSS", "Supabase"], 
    link: "https://csbookr.vercel.app",
  },
    {
    id: "caml",
    name: "Caml",
    type: "Independent project · Web app",
    description:
      "Landing page for a platform that allows Nigerian writers to upload their stories, and readers to discover and read them.",
    tone: "sand",
    technologies: ["HTML", "CSS", "JavaScript"], 
    link: "https://csbookr.vercel.app",
  },
];

export type DeveloperIconName =
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "git"

type SkillFile = {
  name: string;
  detail: string;
  icon?: DeveloperIconName;
};

export type SkillFolderData = {
  id: string;
  title: string;
  count: string;
  files: SkillFile[];
};

export const skillFolders: SkillFolderData[] = [
  {
    id: "skills",
    title: "Skills",
    count: "2 Files",
    files: [
      {
        name: "Frontend",
        detail: "Responsive UI · Accessibility · Performance",
      },
      {
        name: "Craft",
        detail: "Design systems · Interaction · Prototyping",
      },
    ],
  },
  {
    id: "stack",
    title: "Stack",
    count: "5 Files",
    files: [
      { name: "TypeScript", detail: "Language", icon: "typescript" },
      { name: "React", detail: "UI library", icon: "react" },
      { name: "Next.js", detail: "Framework", icon: "nextjs" },
      { name: "Tailwind CSS", detail: "Styling", icon: "tailwindcss" },
      { name: "Git", detail: "Version control", icon: "git" },
    ],
  },
];

export const experience = [
  {
    period: "Add dates",
    role: "Frontend Engineer",
    company: "Company name",
    summary: "Add a short summary of your work and impact.",
  },
  {
    period: "Add dates",
    role: "Previous role",
    company: "Company name",
    summary: "Describe a project, team, or result you’re proud of.",
  },
  {
    period: "Add dates",
    role: "Earlier role",
    company: "Company name",
    summary: "Add a sentence about what you learned or shipped.",
  },
];

export const testimonials = [
  {
    name: "Colleague name",
    role: "Role · Company",
    quote: "Replace this with a few words from someone you’ve worked with.",
  },
  {
    name: "Client name",
    role: "Role · Company",
    quote: "Add a short note about the collaboration and the result.",
  },
  {
    name: "Team member",
    role: "Role · Company",
    quote: "Use a real quote here once you have permission to share it.",
  },
  {
    name: "Partner name",
    role: "Role · Company",
    quote: "A brief, specific recommendation works best in this space.",
  },
];
