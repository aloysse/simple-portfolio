interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Figma",
    description: "熟悉 UI 設計與原型製作，並有效支援團隊協作",
    icon: "figma"
  },
  {
    name: "Adobe XD",
    description: "能快速構建互動原型，轉化為清晰的開發規範",
    icon: "adobe_xd"
  },
  {
    name: "React",
    description: "精通使用 React 進行元件化開發，打造高效可維護的前端應用",
    icon: "react"
  },
  {
    name: "Astro",
    description: "具備基礎 Astro 開發能力，能建置靜態網站並優化效能",
    icon: "astro_dark"
  },
  {
    name: "JavaScript",
    description: "熟悉 JavaScript 基礎與應用，能開發交互功能與動態效果",
    icon: "javascript"
  },
  {
    name: "Tailwind CSS",
    description: "能快速運用，構建響應式頁面，提升開發效率",
    icon: "tailwind-css"
  },
  {
    name: "Bootstrap",
    description: "能快速完成前端版型設計與響應式布局",
    icon: "bootstrap"
  }
];

export default hardSkills;