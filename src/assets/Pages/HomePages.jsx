import React from "react";
import Hero from "../Components/Hero";
import Product from "../Components/Product";
import About from "../Components/About";

export default function HomePages() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Product />
            </main>
        </>
    );
}
