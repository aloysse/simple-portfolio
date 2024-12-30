interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "React",
    description: "My favorite static site generator for building modern websites",
    icon: "react"
  },
  {
    name: "Astro",
    description: "My favorite React framework for building modern web apps",
    icon: "astro_dark"
  },
  {
    name: "JavaScript",
    description: "I've been using NodeJs for backend development since 2018",
    icon: "javascript"
  },
  {
    name: "Tailwind CSS",
    description: "My favorite database for modern apps",
    icon: "tailwind-css"
  },
  {
    name: "Bootstrap",
    description: "My favorite database for modern apps",
    icon: "bootstrap"
  }
];

export default hardSkills;