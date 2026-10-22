'use client'


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "../lib/auth-client";

const date = new Date().toLocaleString('bn-BD', {
    dateStyle: "full"
});

const HeaderPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const [isOpen, setIsOpen] = useState(false);

    const handleSignout = async () => {
        await authClient.signOut();
        setIsOpen(false);
    };

    return (
        <div className="border-b border-b-gray-200">
            <div className="mx-auto max-w-7xl py-3">
                <div className="flex items-center justify-between">

                    <Link href="/">
                        <div className="flex items-center gap-5">
                            <div className="rounded bg-[#05893ec9] p-4">
                                <Image
                                    src="/logo-icon.png"
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                            </div>

                            <div>
                                <h1 className="text-2xl font-extrabold">
                                    বাজার দর
                                </h1>
                                <p className="text-xs">{date}</p>
                            </div>
                        </div>
                    </Link>


                    <div>
                        {user ? (
                            <div className="relative">

                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-gray-100"
                                >

                                    <div className="avatar">
                                        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                                            <img
                                                src={user?.image || "/default-avatar.png"}
                                                alt={user?.name || "User"}
                                                referrerPolicy="no-referrer"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                


                                    <span className="font-semibold text-gray-700">
                                        {user.name}
                                    </span>

                                    <svg
                                        className={`h-3 w-3 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="m3 4.5 3 3 3-3" />
                                    </svg>
                                </button>


                                {isOpen && (
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setIsOpen(false)}
                                    />
                                )}


                                {isOpen && (
                                    <div className="absolute right-0 top-full z-50 mt-3 w-[300px] rounded-[20px] border border-gray-200 bg-white p-6 shadow-xl">


                                        <div className="mb-5">
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {user.name}
                                            </h3>

                                            <p className="mt-1 break-all text-sm text-gray-500">
                                                {user.email}
                                            </p>
                                        </div>


                                        <Link
                                            href="/profile"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 rounded-lg py-2.5 text-gray-700 transition hover:bg-gray-50"
                                        >
                                            <svg
                                                className="h-5 w-5 text-sky-700"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
                                            </svg>

                                            <span>আমার প্রোফাইল</span>
                                        </Link>


                                        <button
                                            onClick={handleSignout}
                                            className="flex w-full items-center gap-2 rounded-lg py-2.5 text-red-500 transition hover:bg-red-50"
                                        >
                                            <svg
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 17l5-5m0 0-5-5m5 5H9m4 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"
                                                />
                                            </svg>

                                            <span>সাইন আউট</span>
                                        </button>

                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                <Link href="/sign-in">
                                    <button className="btn btn-ghost rounded-xl">
                                        সাইন ইন
                                    </button>
                                </Link>

                                <Link href="/sign-up">
                                    <button className="btn btn-success rounded-xl bg-[#05893E] text-white shadow-none">
                                        সাইন আপ
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderPage;