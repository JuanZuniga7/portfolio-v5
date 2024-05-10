
interface Props{
    key: number
    color: string
    value: string
}

export default function CodeWord({key, color, value} :Props){
    return(
        <span key={key} className={`${color}`}>{value}</span>
    )
}