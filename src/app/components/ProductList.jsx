"use client";

import { useState } from "react";
import ProductCard from "@/app/components/productCard";

const ProductList = ({ products }) => {
    const [sort, setSort] = useState("default");


    const sortedProducts = [...products];

    if (sort === "low") {
        sortedProducts.sort((a, b) => a.today - b.today);
    } else if (sort === "high") {
        sortedProducts.sort((a, b) => b.today - a.today);
    }

    return (
        <>
            <div className="flex justify-end gap-4 sm:gap-8 p-4 sm:p-8 items-center border border-gray-200 rounded-2xl bg-white">
                <div>সাজান</div>
                <div>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="select w-40 [text-align-last:center] leading-normal pt-1"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="low">কম থেকে বেশি</option>
                        <option value="high">বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            <h1 className="font-bold my-5">
                মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;