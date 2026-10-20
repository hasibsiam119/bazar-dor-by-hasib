

const NavCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories", { next: { revalidate: 3600/2 } })
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()
    console.log(data);

    return (
        <div className=" border-b border-b-gray-200">
            <div className="flex gap-10 py-3 max-w-7xl mx-auto">
                {
                    data.map(c =>
                        <div key={c.id} className="flex">
                            <span>{c.icon}</span>
                            <h1 >{c.nameBn}</h1>


                        </div>
                    )}
            </div>
        </div>
    );
};

export default NavCategory;