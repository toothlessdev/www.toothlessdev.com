export const category = [
    {
        label: "React",
        color: "#67dafb",
    },
    {
        label: "JavaScript",
        color: "#f7e029",
    },
    {
        label: "TypeScript",
        color: "#2f73bf",
    },
];

export type CategoryType = (typeof category)[number];
export type CategoryLabel = CategoryType["label"];
export type CategoryColor = CategoryType["color"];
