
import NavCategoryLink from "./NavCategoryLink";


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
                        <NavCategoryLink key={c.id} category={c} />
                    )}
            </div>
        </div>
    );
};

export default NavCategory;