import ICodePresentation from "../types/codePresentation";
import { codeColors } from "./codeColors";

const name = "Juan C. Zuniga";
const alias = "RustedCor";
const skills = [
    "TypeScript",
    "React",
    "NextJS",
    "TailwindCSS",
    "Express",
    "NestJS",
    "PostgreSQL",
    "C#",
    "ASP.NET Core",
    "Entity Framework",
    "Docker",
    "Azure",
    "Linux",
];

const codePresentation: ICodePresentation[] = [
    {
        lines: [
            {
                line: [
                    { color: codeColors.var, value: "const" },
                    { color: codeColors.varName, value: "coder" },
                    { color: codeColors.var, value: "=" },
                    { color: codeColors.varName, value: "{" }
                ]
            },
        ],
        margin: "0"
    },
    {
        lines: [
            {
                line: [
                    { color: codeColors.varName, value: "name:" },
                    { color: codeColors.string, value: `'${name}',` },
                ]
            },
            {
                line: [
                    { color: codeColors.varName, value: "alias:" },
                    { color: codeColors.string, value: `'${alias}',` },
                ]
            },
            {
                line:[
                    {color: codeColors.varName, value: "hardWorker:"},
                    {color: codeColors.function, value: "true,"}
                ]
            },
            {
                line:[
                    {color: codeColors.varName, value: "quickLearner:"},
                    {color: codeColors.function, value: "true,"}
                ]
            },
            {
                line:[
                    {color: codeColors.varName, value: "problemSolver:"},
                    {color: codeColors.function, value: "true,"}
                ]
            },
            {
                line:[
                    {color: codeColors.varName, value: "teamPlayer:"},
                    {color: codeColors.function, value: "true,"}
                ]
            },
            {
                line:[
                    {color: codeColors.varName, value: "mostImportantSkills:"},
                    {color: codeColors.varName, value: "["},
                    {color: codeColors.string, value: `'${skills[0]}',`},
                    {color: codeColors.string, value: `'${skills[1]}',`},
                    {color: codeColors.string, value: `'${skills[2]}',`},
                    {color: codeColors.string, value: `'${skills[3]}',`},
                    {color: codeColors.string, value: `'${skills[4]}',`},
                    {color: codeColors.string, value: `'${skills[5]}',`},
                    {color: codeColors.string, value: `'${skills[6]}',`},
                    {color: codeColors.string, value: `'${skills[7]}',`},
                    {color: codeColors.string, value: `'${skills[8]}',`},
                    {color: codeColors.string, value: `'${skills[9]}',`},
                    {color: codeColors.string, value: `'${skills[10]}',`},
                    {color: codeColors.string, value: `'${skills[11]}',`},
                    {color: codeColors.string, value: `'${skills[12]}'`},
                    {color: codeColors.varName, value: "],"}
                ]
            },
            {
                line:[
                    {color: codeColors.functionName, value: "hireable:"},
                    {color: codeColors.function, value: "function"},
                    {color: codeColors.varName, value: "() {"},
                ]
            },
        ],
        margin: "ml-4 lg:ml-8"
    },
    {
        lines:[
            {
                line:[
                    {color: codeColors.function, value: "return"},
                    {color: codeColors.varName, value: "("},
                ]
            }
        ],
        margin: "ml-8 lg:ml-16"
    },
    {
        lines:[
            {
                line:[
                    {color: codeColors.varName, value: "this.hardWorker"},
                    {color: codeColors.function, value: "&&"},
                ]
            },
            {
                line: [
                    {color: codeColors.varName, value: "this.problemSolver"},
                    {color: codeColors.function, value: "&&"},
                ]
            },
            {
                line: [
                    {color: codeColors.varName, value: "this.skills.length"},
                    {color: codeColors.function, value: ">= 5"}
                ]
            }
        ],
        margin: "ml-12 lg:ml-24"
    },
    {
        lines:[
            {
                line:[
                    {color: codeColors.varName, value: ");"},
                ]
            }
        ],
        margin: "ml-8 lg:ml-16"
    },
    {
        lines:[
            {
                line:[
                    {color: codeColors.varName, value: "};"},
                ]
            }
        ],
        margin: "ml-4 lg:ml-8"
    },
    {
        lines:[
            {
                line:[
                    {color: codeColors.varName, value: "};"},
                ]
            }
        ],
        margin: "0"
    }
]

export default codePresentation;