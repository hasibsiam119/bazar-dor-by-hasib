const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
        { next: { revalidate: 1800 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product details");
    }

    const response = await res.json();
    const product = response.data ?? response;
    const markets = product.markets ?? [];

    const formatPrice = (price) =>
        `${Math.round(price).toLocaleString("bn-BD")} টাকা`;

   
    const minPrice = Math.min(...markets.map((market) => market.min));
    const maxPrice = Math.max(...markets.map((market) => market.max));

    const avgPrice = markets.length
        ? markets.reduce(
              (sum, market) => sum + (market.min + market.max) / 2,
              0
          ) / markets.length
        : 0;

    const summary = [
        {
            label: "সর্বনিম্ন দাম",
            price: minPrice,
            description: "সবচেয়ে কম দামের বাজার",
            color: "text-green-600",
        },
        {
            label: "সর্বাধিক দাম",
            price: maxPrice,
            description: "সবচেয়ে বেশি দামের বাজার",
            color: "text-red-500",
        },
        {
            label: "গড় দাম",
            price: avgPrice,
            description: `প্রতি ${product.unit}-এর হিসাবে`,
            color: "text-green-700",
        },
    ];

    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#26332b]">
            <div className="mx-auto max-w-7xl">
         
                <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span>হোম</span>
                    <span>›</span>
                    <span>{product.categoryNameBn}</span>
                    <span>›</span>
                    <span className="text-gray-700">{product.nameBn}</span>
                </nav>

  
                <section className="mb-3 flex items-center justify-between gap-4 rounded-xl border border-[#e0e8e0] bg-white p-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                            {product.image || product.categoryIcon}
                        </div>

                        <div className="min-w-0">
                            <h1 className="text-base font-bold sm:text-lg">
                                {product.nameBn}
                            </h1>

                            <p className="mt-0.5 text-xs text-gray-500">
                                {product.categoryNameBn} · {product.unit}
                            </p>

                            <p className="mt-1 text-[11px] text-gray-600">
                                বাংলাদেশের বাজারদর অনুযায়ী আজকের মূল্য
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0 rounded-xl bg-[#f1f5f1] px-4 py-2 text-center">
                        <p className="text-[10px] text-gray-500">
                            আজকের দাম
                        </p>

                        <p className="text-2xl font-bold">
                            {product.today.toLocaleString("bn-BD")}
                        </p>

                        <p className="text-[10px] text-gray-500">
                            টাকা / {product.unit}
                        </p>

                        <p
                            className={`mt-1 text-[10px] font-medium ${
                                product.change?.dir === "up"
                                    ? "text-red-500"
                                    : product.change?.dir === "down"
                                      ? "text-green-600"
                                      : "text-gray-500"
                            }`}
                        >
                            {product.change?.dir === "up"
                                ? "▲"
                                : product.change?.dir === "down"
                                  ? "▼"
                                  : "—"}{" "}
                            {product.change?.pct?.toLocaleString("bn-BD") ?? 0}%
                        </p>
                    </div>
                </section>

                <section className="rounded-xl border border-[#e0e8e0] bg-white p-4 sm:p-6">
                    <h2 className="mb-5 text-lg font-bold sm:text-xl">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {summary.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-[20px] border border-[#e0e8e0] bg-[#fbfdfb] px-5 py-5 sm:px-7"
                            >
                                <p className="text-sm text-gray-600">
                                    {item.label}
                                </p>

                                <p
                                    className={`mt-1 text-2xl font-bold ${item.color}`}
                                >
                                    {formatPrice(item.price)}
                                </p>

                                <p className="mt-1 text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>


                    <h2 className="mb-5 mt-8 text-lg font-bold sm:text-xl">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto rounded-[20px] border border-[#e0e8e0]">
                        <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                            <thead>
                                <tr className="bg-[#fbfdfb] text-gray-500">
                                    <th className="px-5 py-4 font-semibold">
                                        বাজার
                                    </th>

                                    <th className="px-5 py-4 font-semibold">
                                        বিভাগ
                                    </th>

                                    <th className="px-5 py-4 text-right font-semibold">
                                        সর্বনিম্ন
                                    </th>

                                    <th className="px-5 py-4 text-right font-semibold">
                                        সর্বাধিক
                                    </th>

                                    <th className="px-5 py-4 text-right font-semibold">
                                        গড়
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {markets.map((market, index) => (
                                    <tr
                                        key={`${market.market}-${index}`}
                                        className="border-t border-[#e0e8e0] even:bg-[#f0f5f0]"
                                    >
                                        <td className="px-5 py-4 font-medium">
                                            {market.market}
                                        </td>

                                        <td className="px-5 py-4 text-gray-600">
                                            {market.division}
                                        </td>

                                        <td className="px-5 py-4 text-right">
                                            {formatPrice(market.min)}
                                        </td>

                                        <td className="px-5 py-4 text-right">
                                            {formatPrice(market.max)}
                                        </td>

                                        <td className="px-5 py-4 text-right font-semibold">
                                            {formatPrice(
                                                (market.min + market.max) / 2
                                            )}
                                        </td>
                                    </tr>
                                ))}

                                {markets.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-5 py-8 text-center text-gray-500"
                                        >
                                            কোনো বাজারের তথ্য পাওয়া যায়নি।
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default DetailsPage;