import { PostFrontMatter } from "@/features/posts/model";

export type PostHeaderProps = Omit<PostFrontMatter, "pinned">;

export const PostHeader = ({ createdAt, title, category, description }: PostHeaderProps) => {
    return (
        <header className="w-full rounded-md border border-gray-500">
            <div
                className="h-8 rounded-t-md"
                style={{
                    backgroundImage: "linear-gradient(to right, #FF7B72, #F0883E)",
                }}
            ></div>
            <div className="flex flex-col items-start justify-between p-4">
                <h1 className="text-lg font-bold text-white md:text-xl lg:text-2xl">{title}</h1>
                <p className="mt-2 text-xs text-gray-300 md:text-base lg:text-sm">{description}</p>
                <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{category}</span>
                </div>
            </div>
        </header>
    );
};
