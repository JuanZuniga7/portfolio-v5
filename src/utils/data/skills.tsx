import { ISkills } from '../types/skills.type';
import Image from 'next/image';
// Languages
import usa from '@/assets/svg/langs/usa.svg'
import spain from '@/assets/svg/langs/spain.svg'
// Programming languages
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
// Other languages
import html from '@/assets/svg/olangs/html.svg'
import css from '@/assets/svg/olangs/css.svg'
import xml from '@/assets/svg/olangs/xml.svg'
import markdown from '@/assets/svg/olangs/markdown.svg'
// Frontend frameworks
import react from '@/assets/svg/frameworks/frontend/react.svg'
import next from '@/assets/svg/frameworks/frontend/nextjs.svg'
import angular from '@/assets/svg/frameworks/frontend/angular.svg'
import astro from '@/assets/svg/frameworks/frontend/astro.svg'
import tailwind from '@/assets/svg/frameworks/frontend/tailwind.svg'
import blazor from '@/assets/svg/frameworks/frontend/blazor.svg'
// Backend frameworks
import spring from '@/assets/svg/frameworks/backend/spring.svg'
import express from '@/assets/svg/frameworks/backend/express.svg'
import nest from '@/assets/svg/frameworks/backend/nest.svg'
import fastify from '@/assets/svg/frameworks/backend/fastify.svg'
import dotnet from '@/assets/svg/frameworks/backend/aspnet.svg'
// Databases
import postgres from '@/assets/svg/databases/postgres.svg'
import mysql from '@/assets/svg/databases/mysql.svg'
import mongodb from '@/assets/svg/databases/mongo.svg'
import redis from '@/assets/svg/databases/redis.svg'
import prisma from '@/assets/svg/databases/prisma.svg'
// Others
import azure from '@/assets/svg/others/azure.svg'
import bun from '@/assets/svg/others/bun.svg'
import docker from '@/assets/svg/others/docker.svg'
import github from '@/assets/svg/others/github.svg'
import gitlab from '@/assets/svg/others/gitlab.svg'
import linux from '@/assets/svg/others/linux.svg'
import neovim from '@/assets/svg/others/neovim.svg'
import node from '@/assets/svg/others/node.svg'
// Soft skills
import teamwork from '@/assets/svg/skills/team.svg'
import communication from '@/assets/svg/skills/communication.svg'
import problemSolving from '@/assets/svg/skills/problemSolving.svg'
import agile from '@/assets/svg/skills/agile.svg'
import leadership from '@/assets/svg/skills/leadership.svg'
import fastLearner from '@/assets/svg/skills/learner.svg'
import efficient from '@/assets/svg/skills/efficient.svg'


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
        clickable: false,
        groupName: "Soft Skills",
        skills:[
            {
                label: "teamwork",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={teamwork} alt="Teamwork" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "communication",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={communication} alt="Communication" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "problem solving",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={problemSolving} alt="Problem Solving" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "agile",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2021",
                icon: <Image src={agile} alt="Agile" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "leadership",
                level: "Advance",
                numericLevel: 8,
                startToLearn: "natural leader",
                icon: <Image src={leadership} alt="Leadership" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "fast learner",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={fastLearner} alt="Fast Learner" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "efficient",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2022",
                icon: <Image src={efficient} alt="Efficient" className='w-full h-full rounded-full p-1' />
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
    },
    {
        clickable: true,
        groupName: "Frontend Frameworks",
        skills:[
            {
                label: "react",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2020",
                icon: <Image src={react} alt="React" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "next 13/14",
                level: "Advanced",
                numericLevel: 7,
                startToLearn: "2022",
                icon: <Image src={next} alt="Next" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "angular",
                level: "Intermediate",
                numericLevel: 6,
                startToLearn: "2022",
                icon: <Image src={angular} alt="Angular" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "astro",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2023",
                icon: <Image src={astro} alt="Astro" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "tailwind",
                level: "Advanced",
                numericLevel: 7,
                startToLearn: "2022",
                icon: <Image src={tailwind} alt="Tailwind" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "blazor",
                level: "Novice",
                numericLevel: 3,
                startToLearn: "2024",
                icon: <Image src={blazor} alt="Blazor" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: true,
        groupName: "Backend Frameworks",
        skills:[
            {
                label: "spring",
                level: "Intermediate",
                numericLevel: 4,
                startToLearn: "2022",
                icon: <Image src={spring} alt="Spring" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "express",
                level: "Intermediate",
                numericLevel: 6,
                startToLearn: "2023",
                icon: <Image src={express} alt="Express" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "nest",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2023",
                icon: <Image src={nest} alt="Nest" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "fastify",
                level: "Novice",
                numericLevel: 3,
                startToLearn: "2024",
                icon: <Image src={fastify} alt="Fastify" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "Dotnet",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2022",
                icon: <Image src={dotnet} alt="DotNET" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: true,
        groupName: "Databases",
        skills: [
            {
                label: "postgres",
                level: "Intermediate",
                numericLevel: 6,
                startToLearn: "2023",
                icon: <Image src={postgres} alt="Postgres" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "mysql",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2021",
                icon: <Image src={mysql} alt="MySQL" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "mongodb",
                level: "Novice",
                numericLevel: 4,
                startToLearn: "2023",
                icon: <Image src={mongodb} alt="MongoDB" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "redis",
                level: "Novice",
                numericLevel: 3,
                startToLearn: "2024",
                icon: <Image src={redis} alt="Redis" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "prisma",
                level: "Intermediate",
                numericLevel: 6,
                startToLearn: "2023",
                icon: <Image src={prisma} alt="Prisma" className='w-full h-full rounded-full p-1' />
            }
        ]
    },
    {
        clickable: false,
        groupName: "Others Hard Skills",
        skills: [
            {
                label: "azure",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2023",
                icon: <Image src={azure} alt="Azure" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "bun",
                level: "Advanced",
                numericLevel: 7,
                startToLearn: "2022",
                icon: <Image src={bun} alt="Bun" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "docker",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2022",
                icon: <Image src={docker} alt="Docker" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "github",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={github} alt="GitHub" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "gitlab",
                level: "Intermediate",
                numericLevel: 5,
                startToLearn: "2022",
                icon: <Image src={gitlab} alt="GitLab" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "linux",
                level: "Advanced",
                numericLevel: 7,
                startToLearn: "2022",
                icon: <Image src={linux} alt="Linux" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "neovim",
                level: "Novice",
                numericLevel: 4,
                startToLearn: "2022",
                icon: <Image src={neovim} alt="Neovim" className='w-full h-full rounded-full p-1' />
            },
            {
                label: "node",
                level: "Advanced",
                numericLevel: 8,
                startToLearn: "2019",
                icon: <Image src={node} alt="Node" className='w-full h-full rounded-full p-1' />
            }
        ]
    }
];