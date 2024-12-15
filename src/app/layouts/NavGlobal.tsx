import { Github, Instagram, Linkedin } from "lucide-react";
import { SocialButton } from "@/app/layouts/SocialButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { siteConfiguration } from "@/config/site";

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
                <SocialButton
                    icon={<Github className="text-[#9098a1]" size={20} />}
                    href={siteConfiguration.externalLinks.github}
                />
                <SocialButton
                    icon={<Instagram className="text-[#9098a1]" size={20} />}
                    href={siteConfiguration.externalLinks.instagram}
                />
                <SocialButton
                    icon={<Linkedin className="text-[#9098a1]" size={20} />}
                    href={siteConfiguration.externalLinks.linkedin}
                />
            </div>
        </div>
    );
};
