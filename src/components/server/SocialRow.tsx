import SocialButton from "@/components/common/SocialButton";
import socialData from "@/utils/data/socialData"

export default function SocialRow(){
    return (
        <ul className="flex flex-row items-center gap-5">
            {socialData.map((item) => (
                <li key={item.name}>
                    <SocialButton link={item.path}>
                        <figure className="transition-transform hover:scale-150 duration-300">
                            {item.icon}
                        </figure>
                    </SocialButton>
                </li>
            ))}
        </ul>
    )
}