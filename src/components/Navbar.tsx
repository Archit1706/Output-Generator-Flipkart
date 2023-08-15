"use client";
import React, { useState, useEffect } from "react";
import { SignedIn, SignOutButton, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { FaMale, FaFemale } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

type Props = {};

const Navbar = (props: Props) => {
    const [gender, setGender] = useState<any>(
        typeof window !== "undefined" && localStorage?.getItem("gender")
            ? localStorage?.getItem("gender")
            : "man"
    );

    useEffect(() => {
        localStorage.setItem("gender", gender);
        // console.log("gender seleccted", gender);
    }, [gender]);

    const handleToggle = (e: any) => {
        if (e.target.checked) {
            setGender("woman");
        } else {
            setGender("man");
        }
    };
    return (
        <nav className="w-full h-20 bg-black/5 flex flex-row justify-between items-center p-4 md:px-6 ">
            {/* heading */}
            <div className="flex flex-row justify-start items-center">
                {/* logo */}
                {/* <div className="h-10 w-10 bg-inherit rounded-full p-2 ">
                    <Image
                        src="/vercel.svg"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                </div> */}
                <h1 className="text-3xl md:text-4xl fort-bold text-blue-700 tracking-wide">
                    Flip
                    <span className="font-extrabold text-yellow-500 outline-2 outline-black">
                        Bot
                    </span>
                </h1>
            </div>

            {/* login */}
            <div className="flex flex-row justify-center items-center gap-2">
                {/* man-woman toggle */}
                <div className="">
                    <label className="swap swap-flip text-4xl pt-1">
                        {/* this hidden checkbox controls the state */}
                        <input
                            type="checkbox"
                            onClick={handleToggle}
                            // onChange={() => {}}
                            defaultChecked={gender === "man" ? false : true}
                        />

                        <div
                            className="swap-on tooltip tooltip-left"
                            data-tip="Click to Change Gender"
                        >
                            👩🏻
                        </div>
                        <div
                            className="swap-off tooltip tooltip-left"
                            data-tip="Click to change gender"
                        >
                            👨🏻
                        </div>
                    </label>
                </div>

                <img
                    alt="..."
                    className="w-12 rounded-full align-middle border-none shadow-lg"
                    src={`https://avatars.dicebear.com/api/initials/Archit Rathod.svg`}
                />

                {/* <SignedOut>
                    <div className="bg-black text-white hover:text-gray-200 p-2 px-4 rounded-full shadow-md hover:scale-95 transition-all duration-200 cursor-pointer text-md md:text-md md:font-semibold font-normal">
                        <Link className="" href="/sign-in">
                            Sign-In
                        </Link>
                    </div>
                </SignedOut> */}

                {/* <SignedIn>
                    <div className="">
                        <UserButton />
                    </div>
                    
                </SignedIn> */}
            </div>
        </nav>
    );
};

export default Navbar;
