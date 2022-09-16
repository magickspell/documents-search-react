export type documentType = {
    id: number,
    date: string,
    name: string,
    text: string,
}

interface DocumentsInt {
    data: documentType[]
}

const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export let documents: DocumentsInt = {
    data: [
        {
            id: 1,
            date: (new Date).toLocaleDateString(),
            name: "Print mails.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 2,
            date: (new Date).toLocaleDateString(),
            name: "Get tasks.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 3,
            date: (new Date).toLocaleDateString(),
            name: "Buy milk.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 4,
            date: (new Date).toLocaleDateString(),
            name: "Drink milk.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 5,
            date: (new Date).toLocaleDateString(),
            name: "Send emails.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 6,
            date: (new Date).toLocaleDateString(),
            name: "Send mails.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 7,
            date: (new Date).toLocaleDateString(),
            name: "Take breakfast.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 8,
            date: (new Date).toLocaleDateString(),
            name: "Write program.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 9,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Upload program.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 10,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Earn money.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 11,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Sleep.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 12,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Repeat.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 13,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Repeat again.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 14,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Travel to other planets.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 15,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Travel to other time period.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 16,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Travel to the future time.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
        {
            id: 17,
            date: randomDate(new Date(new Date().getFullYear(), 0, 1), new Date()).toLocaleDateString(),
            name: "Teach how to fly.",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
        },
    ]
}