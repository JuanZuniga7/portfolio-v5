import CVAndContactButtons from "./CV&ContactButtons"
import SocialRow from "./SocialRow"

interface Props{
    name: string,
    profile: string
}

export default function Presentation({name, profile}: Props){
    return(
        <div className="order-2 lg:order-1 flex flex-col items-start gap-10 justify-center p-2 pb-20 md:pb-10 lg:pt-10 select-none">
          <h3 className="text-4xl font-bold leading-10 text-white md:font-extrabold lg:text-6xl lg:leading-[4.5rem] select-none">
            Hello, <br/>
            This is <span className="select-none animate-character">{name}</span>
            {` , I'm a Professional `}
            <span className="animate-character">{profile}</span>.
          </h3>
          <SocialRow/>
          <CVAndContactButtons/>
        </div>
    )
}