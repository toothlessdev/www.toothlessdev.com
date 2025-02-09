export const postCategory: PostCategoryType[] = [
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

export type PostCategoryLabel = string;
export type PostCategoryColor = string;

export type PostCategoryType = {
    label: PostCategoryLabel;
    color: PostCategoryColor;
};
