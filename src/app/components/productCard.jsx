import Link from "next/link";

function ProductCard({ product }) {
  const isUp = product.change.dir === "up";

  return (
    <Link href={`/detailsPage/${product.id}`}>
    <div className="relative box-border min-h-[170px] w-full max-w-[450px] rounded-[20px] border border-[#dce5de] bg-[#fafcfb] p-5 text-[#202a23]">
    
      <div className="flex items-center gap-4">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[17px] bg-[#f0f4f0] text-[28px]">
          {product.image}
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight">
            {product.nameBn}
          </h3>

          <p className="mt-1 text-base">
           প্রতি {product.unit}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="mb-1 text-base">
            আজকের দাম
          </p>

          <h2 className="text-2xl font-bold leading-tight">
            {product.today} টাকা
          </h2>
        </div>

        <div
          className={`mb-0.5 flex h-[32px] items-center justify-center gap-1.5 rounded-full bg-[#f0f4f0] px-3 text-sm font-bold ${
            isUp ? "text-[#e63946]" : "text-[#16a34a]"
          }`}
        >
          <span className="text-[11px]">
            {isUp ? "▲" : "▼"}
          </span>

          <span>{Math.abs(product.change.pct).toFixed(2)}%</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;