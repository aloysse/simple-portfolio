interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "媒體傳達設計學系",
        startDate: "2010-06-01",
        endDate: "2006-09-01",
        school: "實踐大學",
        location: "台北",
        description: "",
        currentUni: false,
    },
];

export default education;