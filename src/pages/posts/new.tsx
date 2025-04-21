import { PostEditor } from "@/features/posts/ui/PostEditor";
import UnAuthorizedPage from "@/pages/_403";

export default function NewPostPage() {
    if (process.env.NODE_ENV !== "development") return <UnAuthorizedPage />;
    return <PostEditor />;
}
