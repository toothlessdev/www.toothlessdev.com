import { postCategory, PostCategoryLabel } from "@/entities/filter/config/category";

export function findColorByLabel(label: PostCategoryLabel) {
    return postCategory.find((item) => item.label === label)?.color;
}
