"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function Provider({ onProviderChange, rollbackStep, providerForm }: { onProviderChange: (provider: string) => void; rollbackStep: () => void; providerForm: string }) {
    const providers = [
        {
            label: "EDF Pro",
        },
        {
            label: "Engie Pro",
        },
        {
            label: "TotalEnergies Pro",
        },
        {
            label: "ENI Plénitude",
        },
        {
            label: "Autre",
        },
        {
            label: "Je n'ai pas de fournisseur",
        },
    ];
    const [position, setPosition] = useState<number | null>(null);
    const [errors, setErrors] = useState<any>(null);
    const [provider, setProvider] = useState<string>(providerForm);

    const handleSelect = (id: number, name: string) => {
        setErrors(null);
        setPosition(id);
        onProviderChange(name);
        setProvider(name);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (provider.trim() === "") {
            setErrors("Veuillez sélectionner un fournisseur");
            return;
        }
        onProviderChange(provider);
    };

    useEffect(() => {
        setPosition(providers.find((provider) => provider.label === providerForm) ? providers.findIndex((provider) => provider.label === providerForm) : null);
    }, [providerForm]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Quel est votre fournisseur actuel ?</h2>
                <div className="grid grid-cols-1 gap-3 lg:gap-2.5">
                    {providers.map((provider, index) => (
                        <div key={index} className={`relative flex-1 flex items-center gap-2 p-4 lg:py-4.5 rounded-lg border cursor-pointer ${position === index ? "border-amber-600 bg-amber-50" : "bg-white border-slate-200"}`} onClick={() => handleSelect(index, provider.label)}>
                            <span className="w-5 h-5 rounded-full flex items-center justify-center p-1 border-slate-500 border-[1px]">
                                <span className={`${position === index ? "bg-amber-600" : ""} w-2 h-2 p-1 rounded-full`}></span>
                            </span>
                            <p className="text-center text-slate-700 text-xs lg:text-sm font-semibold">{provider.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {errors && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{errors}</p>}
            {/* --- BOUTON --- */}
            <div className="flex justify-between gap-4">
                <button className="px-4 lg:px-8 flex items-center gap-2 text-orange-600 text-sm border-orange-600 hover:border-orange-700 hover:text-orange-700 hover:duration-300 hover:ease-in-out border-[1px] rounded-lg cursor-pointer" onClick={rollbackStep}>
                    <Icon path={mdiArrowLeft} size={0.8} />
                    <span className="hidden md:block">Retour</span>
                </button>
                <button
                    type="submit" onClick={(e) => handleSubmit(e)}
                    className={`w-full lg:w-2/5 py-3.5 bg-gradient-to-r from-amber-600 to-orange-800 text-white font-medium lg:font-semibold rounded-lg shadow-lg 
                           hover:bg-orange-900 hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Continuer
                </button>
            </div>
        </div>
    );
}
