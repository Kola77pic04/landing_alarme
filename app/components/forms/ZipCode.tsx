"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function ZipCode({ onZipCodeChange, rollbackStep, zipCodeForm }: { onZipCodeChange: (zipCode: string, city: string) => void; rollbackStep: () => void; zipCodeForm: string }) {
    const [errors, setErrors] = useState<any>(null);
    const [zipCode, setZipCode] = useState<string>(zipCodeForm);
    const [city, setCity] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        let newValue = value;
        newValue = value.replace(/\D/g, "").slice(0, 5);
        setZipCode(newValue);
        // if (/^\d{5}$/.test(newValue)) {
        //     onZipCodeChange(newValue);
        // }
    };
    const getCityFromZip = async (zip: string) => {
        const res = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${zip}`);
        const data = await res.json();
        if (data.length > 0) {
            setCity(data[0].nom);
        }
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (zipCode.toString().trim() === "") {
            setErrors("Le code postal est requis.");
            return;
        }
        if (!/^\d{5}$/.test(zipCode.toString())) {
            setErrors("Le code postal doit contenir exactement 5 chiffres.");
            return;
        }
        onZipCodeChange(zipCode, city);
    };

    useEffect(() => {
        if (zipCode.length === 5) {
            getCityFromZip(zipCode);
        }
    }, [zipCode]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold text-center text-lg lg:text-3xl text-slate-800">Mon code postal :</h2>
                </div>
                <input
                    inputMode="numeric"
                    maxLength={5}
                    pattern="\d{5}"
                    value={zipCode}
                    onChange={(e) => handleChange(e)}
                    className="w-1/2 mx-auto text-center bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-base font-medium border border-slate-300 outline-none"
                    placeholder="75001"
                />
            </div>
            {errors && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{errors}</p>}
            {/* --- BOUTON --- */}
            <div className="flex justify-between gap-4">
                <button className="px-4 lg:px-8 flex items-center gap-2 text-[#f15e00] text-sm border-[#f15e00] hover:border-[#f15e00]/80 hover:text-[#f15e00]/80 hover:duration-300 hover:ease-in-out border-[1px] rounded-lg cursor-pointer" onClick={rollbackStep}>
                    <Icon path={mdiArrowLeft} size={0.8} />
                    <span className="hidden md:block">Retour</span>
                </button>
                <button
                    type="submit" onClick={(e) => handleSubmit(e)}
                    className={`w-full lg:w-2/5 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium lg:font-semibold rounded-lg shadow-lg 
                                       hover:bg-red-700 hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Continuer
                </button>
            </div>
        </div>
    );
}
