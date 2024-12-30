interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "中文",
        level: "母語",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "英文",
        level: "日常溝通",
        description: "I speak fluently and write fluently",
        show: true
    }
];

export default languages;