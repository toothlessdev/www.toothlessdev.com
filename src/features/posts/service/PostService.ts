import { PostNotFoundException } from "@/features/posts/error/PostException";
import { PostRepository } from "@/features/posts/repository/PostRepository";
import { singleton } from "tsyringe";

@singleton()
export class PostService {
    constructor(
        private readonly postRepository: PostRepository,
    ) {}

    public findAllPostsFrontMatter() {
        return this.postRepository.findAllPostsFrontMatter();
    }

    public async findPostBySlug(slug: string) {
        const post = (await this.postRepository.findPostBySlug(slug)).at(0);
        if(!post) throw new PostNotFoundException(slug);
        return post;
    }

    public findPinnedPosts() {
        return this.postRepository.findPinnedPosts();
    }

    public findPostsFrontmatterByCategoryAndPage(category: string, page: number, perPage: number) {
        return this.postRepository.findPostsFrontmatterByCategoryAndPage(category, page, perPage);
    }
}