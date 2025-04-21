import { MdxSerializer } from "@/entities/mdx/utils/MdxSerializer";

describe("MdxSerializer", () => {
    test("should serialize front matter correctly", () => {
        const frontMatter = {
            title: "Test Title",
            date: "2023-10-01",
            category: "test, example",
            pinned: true,
        };

        const serializedFrontMatter = MdxSerializer.serializeFrontMatter(frontMatter);

        expect(serializedFrontMatter).toBe(
            `---\ntitle: Test Title\ndate: '2023-10-01'\ncategory: test, example\npinned: true\n---`,
        );
    });
});
