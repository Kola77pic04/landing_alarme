"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

export default function ZipCode({ onZipCodeChange, rollbackStep, zipCodeForm }: { onZipCodeChange: (zipCode: string) => void; rollbackStep: () => void; zipCodeForm: string }) {
    const [errors, setErrors] = useState<any>(null);
    const [zipCode, setZipCode] = useState<string>(zipCodeForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        let newValue = value;
        newValue = value.replace(/\D/g, "").slice(0, 5);
        setZipCode(newValue);
        if (/^\d{5}$/.test(newValue)) {
            onZipCodeChange(newValue);
        }
    };

    const handleSubmit = (e: any) => {
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
        onZipCodeChange(zipCode);
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Mon code postal 🏠</h2>
                    <p className="text-xs lg:text-sm text-slate-600 border-slate-300 border-[1px] px-3 py-4 lg:p-3 rounded-lg">
                        Indiquez le code postal de votre habitation pour identifier les meilleures offres près de chez vous.
                    </p>
                </div>
                <input
                    inputMode="numeric"
                    maxLength={5}
                    pattern="\d{5}"
                    value={zipCode}
                    autoFocus={true}
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-sm lg:text-base font-medium border border-slate-300 outline-none"
                    placeholder="75001"
                />
            </div>
            {errors && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{errors}</p>}
            {/* --- BOUTON --- */}
            <div className="flex justify-between gap-4">
                <button className="px-4 lg:px-8 flex items-center gap-2 text-[#e4464e] text-sm border-[#e4464e] hover:border-[#e4464e]/80 hover:text-[#e4464e]/80 hover:duration-300 hover:ease-in-out border-[1px] rounded-lg cursor-pointer" onClick={rollbackStep}>
                    <Icon path={mdiArrowLeft} size={0.8} />
                    <span className="hidden md:block">Retour</span>
                </button>
                <button
                    type="submit" onClick={(e) => handleSubmit(e)}
                    className={`w-full lg:w-2/5 py-3.5 bg-gradient-to-r from-red-500 to-red-700 text-white font-medium lg:font-semibold rounded-lg shadow-lg 
                                       hover:bg-red-700 hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Continuer
                </button>
            </div>
        </div>
    );
}
