import Image from "next/image";

const date = new Date().toLocaleString('bn-BD',{
    dateStyle:"full"
})

const HeaderPage = () => {
    return (
        <div className="border-b border-b-gray-200">
        <div className=" py-3 max-w-7xl mx-auto">
        <div className="flex justify-between items-center  ">
            <div className="flex items-center gap-5">
                <div className="bg-[#05893ec9] p-4 rounded">
                    <Image src={'/logo-icon.png'} width={20} height={20} alt="Logo"></Image>
                </div>
                <div>
                    <h1 className="font-extrabold text-2xl">বাজার দর</h1>
                    <p className="text-xs">{date}</p>
                </div>
            </div>
            <div>
                <button className="btn btn-ghost rounded-xl">সাইন ইন</button>
                    <button className="btn btn-success rounded-xl text-white bg-[#05893E] shadow-none">সাইন আপ</button>
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default HeaderPage;