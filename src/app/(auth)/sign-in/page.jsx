"use client";


import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


export default function RenderFunction() {
    const onSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
       
        const { data:resData, error } = await authClient.signIn.email({
        ...data,
        callbackURL: "/" 
        })
          if (data) {
            console.log(resData);
           
        }
        if (error) {
            toast.error(error.message)
        }
        

    };

    return (
        <div className="flex flex-col  items-center justify-center py-10  bg-[#F0F5F0]">
            <div className="py-5 text-center" >
                <h1 className="font-bold text-2xl">সাইন ইন</h1>
                <p className="text-center text-sm  text-black/50">
                   বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center py-10 border border-gray-200 rounded-xl bg-white px-7">
                <Form
                    className="flex w-96 flex-col gap-7 "
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >
                   
                    <TextField
                        className="space-y-3"
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-black">ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>
                    

                    <TextField
                        className="space-y-3"
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-black">পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />

                        <FieldError />
                    </TextField>
                    

                    <div>
                        <Button className="bg-green-700 text-white rounded-xl p-5 w-sm" type="submit">

                            সাইন ইন
                        </Button>

                    </div>
                </Form>
                <div className="divider">অথবা</div>
               <div className="flex gap-2 items-center justify-center">
                 <p>অ্যাকাউন্ট আছে?</p>
                <Link href="/sign-in" className="text-green-500 hover:underline"> সাইন ইন করুন </Link>
               </div>
            </div>
        </div>
    );
}