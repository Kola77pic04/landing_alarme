"use client";

import { mdiArrowLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function Price({ onOfferChange, rollbackStep, offerForm }: { onOfferChange: (offer: string) => void; rollbackStep: () => void; offerForm: string }) {
    const offers = [
        {
            label: "Gaz et Électricité",
            image: "/assets/light_and_gas.svg"
        },
        {
            label: "Électricité",
            image: "/assets/light.svg"
        },
        {
            label: "Gaz",
            image: "/assets/gas.svg"
        }
    ];
    const [position, setPosition] = useState<number | null>(null);
    const [errors, setErrors] = useState<any>(null);
    const [offer, setOffer] = useState<string>(offerForm);

    const handleSelect = (id: number, name: string) => {
        setErrors(null);
        setPosition(id);
        onOfferChange(name);
        setOffer(name);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (offer.trim() === "") {
            setErrors("Veuillez sélectionner un type d'offre");
            return;
        }
        onOfferChange(offer);
    };

    useEffect(() => {
        setPosition(offers.find((offer) => offer.label === offerForm) ? offers.findIndex((offer) => offer.label === offerForm) : null);
    }, [offerForm]);

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Quels prix voulez vous comparer pour votre entreprise ?</h2>
                <div className="grid grid-cols-3 gap-3 lg:gap-2">
                    {offers.map((price, index) => (
                        <div key={index} className={`relative h-36 lg:h-48 flex-1 flex flex-col justify-center items-center gap-2 p-4 rounded-lg border cursor-pointer ${position === index ? "border-amber-600 bg-amber-50" : "bg-white border-slate-200"}`} onClick={() => handleSelect(index, price.label)}>
                            <img src={price.image} alt={price.label} className="w-12 h-12 lg:w-14 lg:h-14 mx-auto object-cover" />
                            <p className="text-center text-slate-700 text-[13px] lg:text-sm md:uppercase font-semibold">{price.label}</p>

                            <span className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center p-1 border-slate-500 border-[1px]">
                                <span className={`${position === index ? "bg-amber-600" : ""} w-2 h-2 p-1 rounded-full`}></span>
                            </span>
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
