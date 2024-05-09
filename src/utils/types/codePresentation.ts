export default interface ICodePresentation{
    lines: ILines[]
    margin: string
}

interface ILines{
    line: ICodeData[]
}

interface ICodeData{
    color: string
    value: string
}

export interface ICodeColor{
    var: string
    varName: string
    function: string
    functionName: string
    string: string
    interface: string
}