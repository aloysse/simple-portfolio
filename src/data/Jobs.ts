/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "UI / Front-end Designer",
        startDate: "2022-09-01",
        company: "自由工作者",
        location: "台中",
        description: "Developed and maintained web applications using React, NextJs, and Tailwind CSS.",
        goals: [
            "完成多項品牌網站的 UI 設計與前端功能開發，包含頁面設計、響應式佈局及效能優化。亦協助企業完成品牌識別設計，強化品牌在數位平台的整體呈現。"
        ],
        currentJob: true,
    },
    {
        title: "UI/UX Designer",
        startDate: "2021-04-10",
        endDate: "2022-08-10",
        company: "Just Mobile 唯光科技有限公司",
        location: "台中",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "負責產品開發企劃、設計及電商前端維護。成功協助產品募資達近 200 萬台幣目標，優化電商使用體驗及流程，提升使用者操作效率，並促使月營業額增長 8%",
        ],
        currentJob: false,
    },
    {
        title: "Design Director",
        startDate: "2018-03-10",
        endDate: "2021-03-10",
        company: "IAPT 國際巴利三藏學院",
        location: "Sri Lanka",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "負責籌備線上佛經翻譯平台。擔任專案設計總監及前端開發，建立線上協作翻譯系統，並設計友好的操作介面，提升翻譯效率與使用者體驗。",
        ],
        currentJob: false,
    },
    {
        title: "Graphic Designer",
        startDate: "2014-03-10",
        endDate: "2017-03-10",
        company: "自由工作者",
        location: "台北",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "企業識別設計、網頁設計與切版。",
        ],
        currentJob: false,
    },
    {
        title: "Project Manager",
        startDate: "2012-05-10",
        endDate: "2014-02-10",
        company: "木下曰本工作室",
        location: "台北",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        goals: [
            "工作室創辦成員之一，負責專案管理及網頁切版。",
        ],
        currentJob: false,
    },
];
export default workExperience;