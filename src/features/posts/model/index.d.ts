export interface Post {
    title: string;
    slug: string;
    createdAt: string;
    content: string;
    category: string;
    pinned?: boolean;
}
