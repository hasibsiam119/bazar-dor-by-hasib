'use client'


import { authClient } from "../lib/auth-client";


const ProfilePage = () => {
        const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newData = Object.fromEntries(formData.entries()) 
        console.log(newData);

        await authClient.updateUser({
          ...newData
        })

    }
     const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut =async () => {
        await authClient.signOut();
    };

   

    return (
        <main className="min-h-screen bg-[#f1f5f1] px-4 py-10">
            <div className="mx-auto w-full max-w-3xl space-y-5">
                {/* Page heading */}
                <header>
                    <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
                    <p className="mt-1 text-sm text-gray-600">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </header>

                {/* User summary card */}
                <section className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                        <img
                            src={user?.image}
                            alt={user?.name}
                            className="h-14 w-14 rounded-lg object-cover"
                        />
                        <div>
                            <h2 className="text-base font-semibold text-gray-900">
                                {user?.name}
                            </h2>
                            <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="inline-flex items-center gap-1.5 rounded-md border border-red-500 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                        
                        সাইন আউট
                    </button>
                </section>

                {/* Edit info card */}
                <section className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm">
                    <h2 className="mb-5 text-base font-semibold text-gray-900">তথ্য</h2>

                    <form onSubmit={onSubmit} className="space-y-3 px-1">
                        <div className="space-y-1.5">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-gray-800"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                type="name"
                                name="name"
                               
                                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-green-700 py-2 text-sm font-medium text-white shadow-md transition hover:bg-green-800"
                        >
                            আপডেট
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;