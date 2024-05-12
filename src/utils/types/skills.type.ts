export interface ISkills{
    groupName: string;
    clickable: boolean;
    skills: ISkill[]
}


export interface ISkill{
    label: string;
    level: string;
    numericLevel: number;
    startToLearn: string;
    icon: React.ReactNode;
}