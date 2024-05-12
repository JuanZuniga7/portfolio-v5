export default interface IEducation {
    label: string;
    institution: IInstitution[];
}

export interface IInstitution {
    name: string;
    degree: string;
    duration: string;
    location: string;
    certificate?: string;
}