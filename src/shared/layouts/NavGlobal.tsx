import { Github, Instagram, Linkedin } from "lucide-react";
import { ExternalLink } from "@/shared/components/ExternalLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { siteConfiguration } from "@/apps/config/site";


export const NavGlobal = () => {
    return (
        <div className="mx-auto flex w-full max-w-[1000px] justify-between px-[10px] py-4">
            <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/52105661?v=4" />
                    <AvatarFallback>TL</AvatarFallback>
                </Avatar>
                <h1 className="text-lg font-bold text-white">toothlessdev</h1>
            </div>

            <div className="flex justify-center gap-1">
                <ExternalLink href={siteConfiguration.externalLinks.github}>
                    <Github className="text-[#9098a1]" size={20} />
                </ExternalLink>

                <ExternalLink href={siteConfiguration.externalLinks.instagram}>
                    <Instagram className="text-[#9098a1]" size={20} />
                </ExternalLink>

                <ExternalLink href={siteConfiguration.externalLinks.linkedin}>
                    <Linkedin className="text-[#9098a1]" size={20} />
                </ExternalLink>
            </div>
        </div>
    );
};
