import { container } from "tsyringe";
import { MdxService } from "@/entities/mdx/services/MdxService";

export const usePostPreviews = () => {
    const mdxService = container.resolve(MdxService);
    const data = mdxService.readMdxFiles(1, 10, "createdAt", "asc", "category", "All");
    return { posts: data };
};
