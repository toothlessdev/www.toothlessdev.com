import { useRef } from "react";
import { container } from "tsyringe";
import { ImageService } from "@/entities/image/service/ImageService";
import { PostEditorToolbar } from "@/features/posts/ui/PostEditorToolbar";
import {
    codeBlockPlugin,
    codeMirrorPlugin,
    headingsPlugin,
    imagePlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
} from "@mdxeditor/editor";
import { MDXEditor, MDXEditorMethods } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export const PostEditor = () => {
    const ref = useRef<MDXEditorMethods>(null);

    return (
        <div>
            <MDXEditor
                ref={ref}
                markdown=""
                className="dark-theme dark-editor mt-4"
                contentEditableClassName="prone h-[70vh] overflow-y-scroll"
                placeholder="내용을 입력하세요 . . ."
                plugins={[
                    toolbarPlugin({
                        toolbarContents: PostEditorToolbar,
                    }),
                    headingsPlugin(),
                    listsPlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    quotePlugin(),
                    markdownShortcutPlugin(),
                    tablePlugin(),
                    thematicBreakPlugin(),
                    imagePlugin({
                        imageUploadHandler: container.resolve(ImageService).uploadImage,
                    }),
                    codeBlockPlugin({ defaultCodeBlockLanguage: "ts" }),
                    codeMirrorPlugin({
                        codeBlockLanguages: {
                            js: "JavaScript",
                            ts: "TypeScript",
                            css: "CSS",
                        },
                    }),
                ]}
            />

            <footer className="w-full"></footer>
        </div>
    );
};
