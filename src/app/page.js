import HeroPage from "./components/hero";
import ProductCard from "./components/productCard";

export default async function Home() {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", { next: { revalidate: 3600 / 2 } })
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json()

  const downPrice = data
    .filter(e => e.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);
  const upPrice = data.filter(e => e.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
 
  return (
    <div className="bg-[#F0F5F0]">
      <div className="max-w-7xl mx-auto py-5 px-4 xl:px-0">
        <HeroPage></HeroPage>
        <div>
          <h1 className="font-bold text-2xl py-4 my-4"><span className="text-red-700">▲ </span>আজ দাম বেড়েছে</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              upPrice.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl py-4 my-4"><span className="text-green-700">▼ </span>আজ দাম কমেছে</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              downPrice.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
        </div>
        <div>
          <div className="py-4 my-4" id="allProduct">
          <h1 className="font-bold text-2xl ">সব পণ্য</h1>
          <p className="text-sm">মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}