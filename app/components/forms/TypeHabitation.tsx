"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function TypeHabitation({ onTypeChange, rollbackStep, typeForm }: { onTypeChange: (type: string) => void; rollbackStep: () => void; typeForm: string }) {
    const types = [
        {
            label: "Ma maison",
            image: "/assets/maison.png"
        },
        {
            label: "Mon appartement",
            image: "/assets/appartement.png"
        },
        {
            label: "Mon entreprise",
            image: "/assets/societe.gif"
        },
    ];
    const [position, setPosition] = useState<number | null>(null);
    const [errors, setErrors] = useState<any>(null);
    const [type, setType] = useState<string>(typeForm);

    const handleSelect = (id: number, name: string) => {
        setErrors(null);
        setPosition(id);
        onTypeChange(name);
        setType(name);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (type.trim() === "") {
            setErrors("Veuillez sélectionner le type de bien");
            return;
        }
        onTypeChange(type);
    };

    useEffect(() => {
        setPosition(types.find((type) => type.label === typeForm) ? types.findIndex((type) => type.label === typeForm) : null);
    }, [typeForm]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Que souhaitez-vous protéger ?</h2>
                    <h3 className="text-xs lg:text-sm text-slate-600 border-slate-300 border-[1px] px-3 py-4 lg:p-3 rounded-lg">💡 Sélectionnez le type de bien que vous souhaitez sécuriser :</h3>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-2">
                    {types.map((type, index) => (
                        <div key={index} className={`lg:h-40 relative flex-1 flex flex-col lg:justify-center items-center gap-2 p-4 rounded-lg border cursor-pointer ${position === index ? "border-[#e4464e] bg-[#e4464e]/5" : "bg-white border-slate-200"}`} onClick={() => handleSelect(index, type.label)}>
                            <img src={type.image} alt={type.label} className="w-14 h-14 lg:w-16 lg:h-16 mx-auto object-cover" />
                            <p className="text-center text-slate-700 text-xs lg:uppercase font-semibold">{type.label}</p>
                            <span className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center p-1 border-slate-500 border-[1px]">
                                <span className={`${position === index ? "bg-[#e4464e]" : ""} w-2 h-2 p-1 rounded-full`}></span>
                            </span>
                        </div>
                    ))}
                </div>
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
                    Obtenir mon devis
                </button>
            </div>
        </div>
    );
}
