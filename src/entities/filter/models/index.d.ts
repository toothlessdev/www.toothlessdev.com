export type SortKey = "createdAt";
export type SortOrder = "asc" | "desc";

export type PostCategoryLabel = string;
export type PostCategoryColor =
    | `#${string}`
    | `rgb(${number}, ${number}, ${number})`
    | `rgba(${number}, ${number}, ${number}, ${number | string})`
    | `hsl(${number}, ${number}%, ${number}%)`
    | `hsla(${number}, ${number}%, ${number}%, ${number | string})`;

export type PostCategoryType = {
    label: PostCategoryLabel;
    color: PostCategoryColor;
};
