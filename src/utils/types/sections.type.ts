export default interface ISection{
    subSections: ISubSection[]
}

export interface ISubSection{
    title: string
    description: string
    image?: string
    reverse: boolean
}