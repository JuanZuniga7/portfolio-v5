import  IEducation from './../types/education.type';

export const education: IEducation[] = [
    {
        label: "Professional",
        institution: [
            {
                name: "University of Magdalena",
                degree: "Systems Engineering",
                duration: "2019 - 2025",
                location: "Santa Marta, Colombia"
            }
        ]
    },
    {
        label: "Bootcamps",
        institution: [
            {
                name: "Alura",
                degree: "Java Backend Developer",
                duration: "331 hours",
                location: "Online",
            }
        ]
    },
    {
        label: "Courses",
        institution:[
            {
                name: "Coursera",
                degree: ".NET FullStack Foundations",
                duration: "17 hours",
                location: "Online",
                certificate: "https://coursera.org/share/a8bcb534ba7e299df24c7b9d3f5da332"
            },
            {
                name: "Coursera",
                degree: "Introduction to Android Mobile Application Development",
                duration: "11 hours",
                location: "Online",
                certificate: "https://coursera.org/share/48ca8bb2160d0eb9ec5e1b671ff490d2"
            }
        ]
    }
]