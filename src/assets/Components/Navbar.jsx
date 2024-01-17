import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import LogoNav from "../images/logo-nav.png";

export default function Navbar() {
    const [sidebarMenu, setSidebarMenu] = useState(false);

    return (
        <>
            <header className="relative bg-transparent flex justify-between items-center pt-2 pb-3 px-10 font-poppins">
                <div className="text-lg font-bold text-gray-500">
                    <img src={LogoNav} width={120} alt="logo" />
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-5 text-sm">
                        <li>
                            <a href="" className="hover:text-[#1b8dde]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#1b8dde]">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#1b8dde]">
                                Pelayanan
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#1b8dde]">
                                Kontak
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="cursor-pointer md:hidden" onClick={() => setSidebarMenu(true)}>
                    <IoMenuOutline size={30} />
                </div>

                {/* Menu Sidebar */}
                {sidebarMenu ? (
                    <div className="fixed w-full transition duration-300 h-screen bg-black/70 left-0 top-0 z-10">
                        <div className="relative w-[250px] h-screen bg-white z-10" onClick={() => setSidebarMenu(false)}>
                            <IoMdClose size={25} className="absolute right-4 top-6 cursor-pointer" />
                            <img src={LogoNav} className="w-[140px] ms-4 pt-2" />
                            <nav className="px-5 mt-8">
                                <ul className="flex flex-col gap-y-5 text-xs">
                                    <li className="border-b-2 pb-2">
                                        <a href="" className="hover:text-[#1b8dde]">
                                            Home
                                        </a>
                                    </li>
                                    <li className="border-b-2 pb-2">
                                        <a href="" className="hover:text-[#1b8dde]">
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li className="border-b-2 pb-2">
                                        <a href="" className="hover:text-[#1b8dde]">
                                            Pelayanan
                                        </a>
                                    </li>
                                    <li className="border-b-2 pb-2">
                                        <a href="" className="hover:text-[#1b8dde]">
                                            Kontak
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </header>
        </>
    );
}
