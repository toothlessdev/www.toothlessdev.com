class BaseMdxException extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class MdxDirectoryNotFoundException extends BaseMdxException {
    constructor(mdxDirectoryPath: string) {
        super(`Directory not found: ${mdxDirectoryPath}`);
    }
}

export class MdxFileNotFoundException extends BaseMdxException {
    constructor(mdxPath: string) {
        super(`File not found: ${mdxPath}`);
    }
}
