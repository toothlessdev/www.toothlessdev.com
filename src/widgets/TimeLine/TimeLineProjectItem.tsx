import { Code, Ellipsis, Github, Link } from "lucide-react";
import { ExternalLinkButton } from "@/shared/components/ExternalLink";
import { TimeLineItem } from "@/widgets/TimeLine/TimeLineItem";

export interface TimeLineProjectItemProps {
    title: string;

    projectName: string;
    description: string;
    githubLink?: string;
    deploymentLink?: string;
    projectDetailLink?: string;
}

export const TimeLineProjectItem = ({
    title,
    projectName,
    description,
    githubLink,
    deploymentLink,
    projectDetailLink,
}: TimeLineProjectItemProps) => {
    return (
        <TimeLineItem
            title={title}
            icon={<Code size={14} />}
            content={
                <div className="rounded-[10px] border-[1px] border-[#3c444d] p-6">
                    <div className="flex items-center">
                        <h2 className="px-1 text-xl font-bold text-white">{projectName}</h2>
                    </div>
                    <div className="mt-2">
                        <p className="line-clamp-2">{description}</p>

                        <div className="ml-auto mr-0 flex justify-end gap-2">
                            {githubLink && (
                                <ExternalLinkButton href={githubLink}>
                                    <Github />
                                    Github
                                </ExternalLinkButton>
                            )}
                            {deploymentLink && (
                                <ExternalLinkButton href={deploymentLink}>
                                    <Link />
                                    Link
                                </ExternalLinkButton>
                            )}
                            {projectDetailLink && (
                                <ExternalLinkButton href={projectDetailLink}>
                                    <Ellipsis />
                                    Detail
                                </ExternalLinkButton>
                            )}
                        </div>
                    </div>
                </div>
            }
        />
    );
};
