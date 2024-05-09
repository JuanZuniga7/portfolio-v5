import ISocialData from "@/utils/types/socialData";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaGitlab} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const socialData: ISocialData[] = [
    {
        name:"GitHub",
        icon:<BsGithub size={24}/>,
        path: 'https://github.com/JuanZuniga7'
    },
    {
        name: "GitLab",
        icon: <FaGitlab size={24}/>,
        path: "https://gitlab.com/JuanZuniga7"
    },
    {
        name: "Linkedin",
        icon: <BsLinkedin size={24}/>,
        path: "https://www.linkedin.com/in/zunigajuan7/"
    },
    {
        name: "X",
        icon: <FaXTwitter size={24}/>,
        path: "https://twitter.com/ZunigaJuan7"
    }
]

export default socialData;