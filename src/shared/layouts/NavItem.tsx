"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
}

export const NavItem = ({ href, children }: NavItemProps) => {
    const pathname = usePathname();

    return (
        <li className="h-full">
            <Link
                href={href}
                className={cn(
                    "flex h-full items-center border-b-[2px] text-sm text-white",
                    pathname === href ? "border-[#f78166]" : "border-transparent",
                )}
            >
                {children}
            </Link>
        </li>
    );
};
