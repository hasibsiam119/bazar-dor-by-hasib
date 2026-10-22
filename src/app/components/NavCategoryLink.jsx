"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavCategoryLink = ({ category }) => {
    const pathname = usePathname();
    const href = `/category/${category.slug}`;
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <div
                className={`flex gap-1 py-2 border-b-2 transition-colors ${
                    isActive
                        ? "bg-green-600 font-bold border-green-600 px-3 text-white rounded"
                        : "text-gray-700 border-transparent hover:text-green-600"
                }`}
            >
                <span>{category.icon}</span>
                <h1>{category.nameBn}</h1>
            </div>
        </Link>
    );
};

export default NavCategoryLink;