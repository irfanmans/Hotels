import React, { useState } from "react";
import Button from "./Button/Button";
import { data } from "../DataDummy/Data.jsx";

export default function Product() {
    const [dataProduct, setDataProduct] = useState(data);

    const filterData = (kategori) => {
        if (kategori === "Semua") {
            setDataProduct(data);
        } else {
            setDataProduct(
                data.filter((item) => {
                    return item.kategori === kategori;
                })
            );
        }
    };

    return (
        <>
            <div className="px-10 py-10">
                <div className="flex flex-wrap gap-3 justify-center text-xs">
                    <Button className="border hover:bg-indigo-500 py-2 hover:text-white rounded-xl px-5 font-poppins" onClick={() => filterData("Semua")}>
                        Semua
                    </Button>
                    <Button className="border hover:bg-indigo-500 py-2 hover:text-white rounded-xl px-5 font-poppins" onClick={() => filterData("dapur")}>
                        Dapur
                    </Button>
                    <Button className="border hover:bg-indigo-500 py-2 hover:text-white rounded-xl px-5 font-poppins" onClick={() => filterData("tempatTidur")}>
                        Tempat Tidur
                    </Button>
                    <Button className="border hover:bg-indigo-500 py-2 hover:text-white rounded-xl px-5 font-poppins" onClick={() => filterData("kamarMandi")}>
                        Kamar Mandi
                    </Button>
                    <Button className="border hover:bg-indigo-500 py-2 hover:text-white rounded-xl px-5 font-poppins" onClick={() => filterData("ruangTamu")}>
                        Ruang Tamu
                    </Button>
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:px-10 lg:grid lg:grid-cols-4 lg:px-10">
                {dataProduct.map((item, indeks) => (
                    <div className="relative max-w-[350px] mx-auto mb-10 md:max-w-[310px] lg:max-w-[220px] lg:mb-6 xl:max-w-[280px]" key={indeks}>
                        <div className="absolute px-5 py-4 text-white h-full w-full flex flex-col justify-end rounded-xl bg-black/50">
                            <p className="font-poppins text-base font-bold">{item.nama}</p>
                            <p className="font-poppins text-xs font-light leading-4 tracking-wide">Rp. {item.harga}</p>
                        </div>
                        <img src={item.imgUrl} className="w-full h-[250px] object-cover rounded-xl" alt="dapur" />
                    </div>
                ))}
            </div>
        </>
    );
}
