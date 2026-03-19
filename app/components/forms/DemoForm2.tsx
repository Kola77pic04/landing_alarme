"use client";

import { useState } from "react";

export default function DemoForm2() {    
    const tabs = [
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
    const [selectedTab, setSelectedTab] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [position, setPosition] = useState<number | null>(null);

    const handleSelectedTab = (index: number, tab: string) => {
        setSelectedTab(tab);
        setError("");
        setPosition(index);
        localStorage.setItem("type", tab);
        window.location.href = "/forms";
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError("");
        if (selectedTab.trim() === "") {
            setError("Veuillez sélectionner le type de bien");
            return;
        }
        localStorage.setItem("type", selectedTab);
        window.location.href = "/forms";
    };

    return (
        <div className=" bg-slate-50 rounded-2xl p-6 md:p-8 shadow-2xl animate-slide-in w-full max-w-lg mx-auto lg:mx-0 border border-gray-100/50">
            <div className="mb-6">
                <h3 className="text-xl lg:text-3xl text-slate-700 font-semibold mb-2 tracking-tight">Que souhaitez-vous protéger ?</h3>
                <p className="text-xs lg:text-sm text-slate-600 mb-6 border-slate-300 border-[1px] px-3 py-4 lg:p-3 rounded-lg">💡 Sélectionnez le type de bien que vous souhaitez sécuriser :</p>
            </div>
            <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-3 lg:gap-2">
                    {tabs.map((tab, index) => (
                        <div key={index} className={`lg:h-40 relative flex-1 flex flex-col lg:justify-center items-center gap-2 p-4 rounded-lg border cursor-pointer ${position === index ? "border-[#f15e00] bg-[#f15e00]/5" : "bg-white border-slate-200"}`} onClick={() => handleSelectedTab(index, tab.label)}>
                            <img src={tab.image} alt={tab.label} className="w-14 h-14 lg:w-16 lg:h-16 mx-auto object-cover" />
                            <p className="text-center text-slate-700 text-xs lg:uppercase font-semibold">{tab.label}</p>
                            <span className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center p-1 border-slate-500 border-[1px]">
                                <span className={`${position === index ? "bg-[#f15e00]" : ""} w-2 h-2 p-1 rounded-full`}></span>
                            </span>
                        </div>
                    ))}
                </div>
                {error && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{error}</p>}
                {/* --- BOUTON --- */}
                <button
                    type="submit"
                    className={`w-full py-3.5 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-medium rounded-lg shadow-lg
                               hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1
                               transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Obtenir mon devis
                </button>
            </form>
        </div>
    );
}
