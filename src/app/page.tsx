import { Section } from "@/entities/section/ui/GroupContainer";
import { PostCard } from "@/features/posts/ui/PostCard";
import { PostCardContainer } from "@/features/posts/ui/PostCardContainer";

export default function HomePage() {
    return (
        <div>
            <Section title="Pinned Posts">
                <PostCardContainer>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <PostCard
                            key={index}
                            id={1}
                            title={"Sample Post"}
                            content={
                                "This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content.This is a sample post content."
                            }
                            date={"2023-10-01"}
                            categoryLabel={"Tech"}
                            categoryColor={"#ff5733"}
                        />
                    ))}
                </PostCardContainer>
            </Section>
        </div>
    );
}
