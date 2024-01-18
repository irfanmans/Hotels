import React from "react";
import backImages from "../images/back-hero.jpg";
import Button from "./Button/Button";
export default function Hero() {
    return (
        <>
            <div className="relative">
                <div className="absolute px-5 py-4 text-white h-full flex flex-col justify-center bg-black/50 w-full text-center">
                    <p className="font-poppins text-2xl mb-2">Selamat Datang</p>
                    <p className="font-poppins text-sm font-light leading-4 tracking-wide sm:max-w-[500px] sm:mx-auto md:max-w-[500px] md:mx-auto lg:max-w-[500px] lg:mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolores rerum voluptatibus fugiat vero quis quo ex neque laborum necessitatibus placeat, porro assumenda eum, harum ullam animi
                    </p>
                    <div className="py-2">
                        <Button className="font-poppins bg-transparent border py-2 px-6 text-xs rounded-md hover:scale-105 hover:duration-300 hover:bg-indigo-600 hover:border-none" type="button">
                            Lihat Product
                        </Button>
                    </div>
                </div>
                <img src={backImages} className="w-full h-[290px] object-cover" alt="property" />
            </div>
        </>
    );
}
