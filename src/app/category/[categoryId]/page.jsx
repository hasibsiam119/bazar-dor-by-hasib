import ProductCard from "@/app/components/productCard";


const CategoryPage = async ({ params }) => {
    
    const { categoryId } = await params
    
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`, { next: { revalidate: 3600 / 2 } })
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()
    
    

    return (
        <div className="bg-[#F0F5F0]">
            <div className="max-w-7xl mx-auto">
                <div className="border border-gray-200 rounded-2xl p-5 flex gap-5 my-8  bg-white">
                    <div>
                        <div className=" h-[60px] w-[60px]  rounded-[17px] bg-[#f0f4f0] text-[40px]">
                            {data[0].image}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{data[0].categoryNameBn}</h1>
                        <p>{data.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
                <div className="flex justify-end gap-8 p-8 items-center border border-gray-200 rounded-2xl bg-white">
                    <div>
                        সাজান
                    </div>
                    <div>
                        <select defaultValue="Pick a Runtime" className="select ">
                            <option value="" disabled={true}>ডিফল্ট</option>
                            <option value="low">কম থেকে বেশি</option>
                            <option value="high">বেশি থেকে কম</option>


                        </select>
                    </div>
                </div>
                <h1 className="font-bold my-5">মোট {data.length}টি পণ্য দেখানো হচ্ছে</h1>
                <div className="grid grid-cols-3 gap-5 py-3">
                    {
                        data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;