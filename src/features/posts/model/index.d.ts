import { BaseMdxModel } from "@/entities/mdx/model";

export interface PostModel extends BaseMdxModel {
    frontMatter: {
        title: string;
        slug: string;
        createdAt: string;
        category: string;
        pinned?: boolean;
        description: string;
    };
    content: string;
}
