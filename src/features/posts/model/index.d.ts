export interface PostMetaData {
    title: string;
    slug: string;
    createdAt: string;
    category: string;
    pinned?: boolean;
    description: string;
}

export interface Post {
    path: string;
    frontMatter: PostMetaData;
    content: string;
}
