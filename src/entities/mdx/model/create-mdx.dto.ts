export class CreateMdxDto {
    constructor(
        public readonly frontMatter: Record<string, unknown>,
        public readonly content: string,
    ) {}
}
