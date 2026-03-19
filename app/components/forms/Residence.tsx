"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function Residence({ onResidenceChange, rollbackStep, residenceForm }: { onResidenceChange: (residence: string) => void; rollbackStep: () => void; residenceForm: string }) {
    const residences = [
        {
            label: "Résidence principale",
        },
        {
            label: "Résidence secondaire",
        },
    ];
    const [position, setPosition] = useState<number | null>(null);
    const [errors, setErrors] = useState<any>(null);
    const [residence, setResidence] = useState<string>(residenceForm);

    const handleSelect = (id: number, name: string) => {
        setErrors(null);
        setPosition(id);
        onResidenceChange(name);
        setResidence(name);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (residence.trim() === "") {
            setErrors("Veuillez sélectionner une résidence");
            return;
        }
        onResidenceChange(residence);
    };

    useEffect(() => {
        setPosition(residences.find((residence) => residence.label === residenceForm) ? residences.findIndex((residence) => residence.label === residenceForm) : null);
    }, [residenceForm]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Est-ce votre résidence principale ou secondaire ?</h2>
                <div className="grid grid-cols-1 gap-3 lg:gap-2.5">
                    {residences.map((residence, index) => (
                        <div key={index} className={`relative flex-1 flex items-center gap-2 p-4 lg:py-4.5 rounded-lg border cursor-pointer ${position === index ? "border-[#f15e00] bg-[#f15e00]/5" : "bg-white border-slate-200"}`} onClick={() => handleSelect(index, residence.label)}>
                            <span className="w-5 h-5 rounded-full flex items-center justify-center p-1 border-slate-500 border-[1px]">
                                <span className={`${position === index ? "bg-[#f15e00]" : ""} w-2 h-2 p-1 rounded-full`}></span>
                            </span>
                            <p className="text-center text-slate-700 text-xs lg:text-sm font-semibold">{residence.label}</p>
                        </div>
                    ))}
                </div>
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
