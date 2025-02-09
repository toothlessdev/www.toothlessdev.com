class BasePostException extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class PostNotFoundException extends BasePostException {
    constructor(slug: string) {
        super(`Post with slug ${slug} not found`);
    }
}
