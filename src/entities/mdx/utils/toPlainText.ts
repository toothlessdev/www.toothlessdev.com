export function toPlainText(mdxContent: string): string {
    return mdxContent
        .replace(/!\[.*?\]\(.*?\)/g, "")
        .replace(/\[.*?\]\(.*?\)/g, "")
        .replace(/[#*>\-`~_]/g, "")
        .replace(/\n+/g, " ")
        .trim();
}
