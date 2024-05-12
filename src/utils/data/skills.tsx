import { ISkills } from '../types/skills.type';
import Image from 'next/image';
import usa from '@/assets/svg/langs/usa.svg'
import spain from '@/assets/svg/langs/spain.svg'
import js from '@/assets/svg/plangs/js.svg'
import csharp from '@/assets/svg/plangs/csharp.svg'
import java from '@/assets/svg/plangs/java.svg'
import typescript from '@/assets/svg/plangs/typescript.svg'
import C from '@/assets/svg/plangs/c.svg'
import go from '@/assets/svg/plangs/go.svg'
import zig from '@/assets/svg/plangs/zig.svg'
import rust from '@/assets/svg/plangs/rust.svg'
import kotlin from '@/assets/svg/plangs/kotlin.svg'
import lua from '@/assets/svg/plangs/lua.svg'
import dart from '@/assets/svg/plangs/dart.svg'
import html from '@/assets/svg/olangs/html.svg'
import css from '@/assets/svg/olangs/css.svg'
import xml from '@/assets/svg/olangs/xml.svg'
import markdown from '@/assets/svg/olangs/markdown.svg'

export const skills: ISkills[] = [
    {
        clickable: false,
        groupName: "Languages",
        skills: [
            {
                label: "english",
                level: "Beginner A2",
                numericLevel: 1.66,
                startToLearn: "2023",
                icon: <Image src={usa} alt="USA" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "spanish",
                level: "Native",
                numericLevel: 10,
                startToLearn: "As a child",
                icon: <Image src={spain} alt="Spain" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: true,
        groupName: "Programming Languages",
        skills: [
            {
                label: "javascript",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={js} alt="JS" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "typescript",
                level: "Advanced",
                numericLevel: 7,
                startToLearn: "2021",
                icon: <Image src={typescript} alt="TS" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "csharp",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2021",
                icon: <Image src={csharp} alt="C#" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "java",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2022",
                icon: <Image src={java} alt="Java" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: true,
        groupName: "Languages I'm learning",
        skills: [
            {
                label: "c",
                level: "Beginner",
                numericLevel: 1,
                startToLearn: "2024",
                icon: <Image src={C} alt="C" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "go",
                level: "Novice",
                numericLevel: 2,
                startToLearn: "2023",
                icon: <Image src={go} alt="Go" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: false,
        groupName: "Languages I want to learn",
        skills: [
            {
                label: "zig",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "Soon",
                icon: <Image src={zig} alt="Zig" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "rust",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "Soon",
                icon: <Image src={rust} alt="Rust" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "kotlin",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "Soon",
                icon: <Image src={kotlin} alt="Kotlin" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "lua",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "Soon",
                icon: <Image src={lua} alt="Lua" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "dart",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "Soon",
                icon: <Image src={dart} alt="Dart" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: false,
        groupName: "Other Languages",
        skills: [
            {
                label: "html",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={html} alt="HTML" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "css",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={css} alt="CSS" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "xml",
                level: "Beginner",
                numericLevel: 0,
                startToLearn: "soon",
                icon: <Image src={xml} alt="XML" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "markdown",
                level: "Novice",
                numericLevel: 3,
                startToLearn: "2024",
                icon: <Image src={markdown} alt="Markdown" className='w-full h-full rounded-full p-1' />
            }
        ]
    }
];