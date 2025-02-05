import { siteConfiguration } from "@/apps/config/site";
import { NavItem } from "@/shared/layouts/NavItem";

export const NavTop = () => {
    return (
        <nav className="mx-auto w-full max-w-[1000px] bg-[#02040a] px-[10px]">
            <ul className="flex h-[40px] gap-4">
                {siteConfiguration.menu.map((item, index) => {
                    return (
                        <NavItem key={index} href={item.path}>
                            {item.label}
                        </NavItem>
                    );
                })}
            </ul>
        </nav>
    );
};
