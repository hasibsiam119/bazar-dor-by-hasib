import Link from "next/link";


const NavCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories", { next: { revalidate: 3600/2 } })
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()
    

    return (
        <div className=" border-b border-b-gray-200">
            <div className="flex gap-10 py-3 max-w-7xl mx-auto">
                {
                    data.map(c =>
                        <Link key={c.id} href={`/category/${c.slug}`}>
                        <div  className="flex">
                            <span>{c.icon}</span>
                            <h1 >{c.nameBn}</h1>


                        </div>
                        </Link>
                    )}
            </div>
        </div>
    );
};

export default NavCategory;