import { category, CategoryLabel } from "@/entities/category/config/category";

export function findColorByLabel(label: CategoryLabel) {
    return category.find((item) => item.label === label)?.color;
}
