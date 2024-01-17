import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col justify-center items-center mt-5 py-5 px-10 border-t-[1px]">
                <div className="text-sm font-poppins">
                    <p>&copy; Copyright | Irfan Mulya 2024</p>
                </div>
                <div className="mt-5">
                    <ul className="flex gap-x-2">
                        <li className="p-2 rounded-full bg-[#1b8dde] text-white">
                            <a href="">{<FaInstagram size={20} />}</a>
                        </li>
                        <li className="p-2 rounded-full bg-[#1b8dde] text-white">
                            <a href="">{<FaLinkedin size={20} />}</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
