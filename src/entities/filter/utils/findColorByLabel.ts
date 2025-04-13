import { siteConfiguration } from "@/apps/config/site";
import { PostCategoryLabel } from "@/entities/filter/config/category";

export function findColorByLabel(label: PostCategoryLabel) {
    return siteConfiguration.category.find((item) => item.label === label)?.color;
}
