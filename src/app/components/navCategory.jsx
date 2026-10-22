import { Suspense } from "react";
import Link from "next/link";
import NavCategoryLink from "./NavCategoryLink";


const NavCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories", { next: { revalidate: 3600/2 } })
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()
    

    return (
        <div className=" border-b border-b-gray-200">
            <div className="flex gap-4 sm:gap-10 py-3 max-w-7xl mx-auto overflow-x-auto px-4 xl:px-0">
                {
                    data.map(c => (
                        <Suspense
                            key={c.id}
                            fallback={
                                <Link href={`/category/${c.slug}`}>
                                    <div className="flex shrink-0 whitespace-nowrap gap-1 py-2 border-b-2 border-transparent text-gray-700">
                                        <span>{c.icon}</span>
                                        <h1>{c.nameBn}</h1>
                                    </div>
                                </Link>
                            }
                        >
                            <NavCategoryLink category={c} />
                        </Suspense>
                    ))}
            </div>
        </div>
    );
};

export default NavCategory;