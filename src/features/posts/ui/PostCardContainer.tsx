interface PostCardContainerProps {
    children?: React.ReactNode;
}

export const PostCardContainer = ({ children }: Readonly<PostCardContainerProps>) => {
    return <div className="grid grid-cols-1 gap-2 md:grid-cols-2">{children}</div>;
};
