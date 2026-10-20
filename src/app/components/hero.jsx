import Image from "next/image";

const date = new Date().toLocaleString('bn-BD', {
    dateStyle: "full"
})

const HeroPage = () => {
    return (
        <div className="flex min-h-[245px] items-center justify-between rounded-3xl border border-gray-200 bg-white px-6 ">
            <div className="">
                <span className=" rounded-full bg-green-100 px-3 py-1  text-xs font-medium text-green-700">
                    {date}
                </span>

                <h1 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-4  text-sm leading-6 text-gray-500">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                    বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <button className="mt-6 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800">
                    সব পণ্য দেখুন
                </button>
            </div>

            <div className="hidden shrink-0 items-center justify-center md:flex">
                <div className="text-8xl"><Image src={'/bazar-hero.png'} width={300} height={300} alt="hero-png"></Image></div>
            </div>
        </div>
    );
};

export default HeroPage;