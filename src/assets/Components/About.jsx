import React from "react";
import logoAbout from "../images/about-img.png";

export default function About() {
    return (
        <>
            <div className="pt-10 px-10">
                <div className="text-center">
                    <span className="font-dancingScript font-bold text-red-700 font-md">about me</span>
                    <h4 className="font-poppins mt-[-4px]">Tentang Kami</h4>
                </div>
            </div>
            <div className="py-10 px-5">
                <div className="max-w-[280px] mx-auto">
                    <img src={logoAbout} alt="about-img" />
                </div>
                <div className="mt-10">
                    <p className="font-poppins font-light tracking-wide leading-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem reiciendis perferendis non aut excepturi esse velit laudantium? Accusamus modi ipsum quaerat similique quis perferendis eaque nisi labore
                        corrupti est! corrupti est! corrupti est! corrupti est! corrupti est! similique quis perferendis eaque nisi labore corrupti est!
                    </p>
                </div>
            </div>
        </>
    );
}
