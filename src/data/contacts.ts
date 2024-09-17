interface Contact {
    id: number;
    name: {
        first: string;
        last: string;
    };
}

export const contacts: Contact[] = [
    { id: 1, name: { first: "Lucas", last: "Gladding" } },
    { id: 2, name: { first: "Margaret", last: "Tavares" } },
];
