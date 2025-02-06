export const category: CategoryType[] = [
    {
        label: "All",
        color: "#fff",
    },
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

export type CategoryLabel = string;
export type CategoryColor = string;
export type CategoryType = {
    label: CategoryLabel;
    color: CategoryColor;
};
