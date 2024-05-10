export default interface ISection{
    title: string
    subSections: ISubSection[]
    reverse: boolean
}

export interface ISubSection{
    title: string
    description: string
    image?: string
    reverse: boolean
}