"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function Contact({ onContactSubmit, rollbackStep, cityForm, firstnameForm, lastnameForm }: { onContactSubmit: (firstName: string, lastName: string) => void; rollbackStep: () => void; cityForm: string; firstnameForm: string; lastnameForm: string }) {
    const [errors, setErrors] = useState<any>(null);
    const [firstName, setFirstName] = useState<string>(firstnameForm);
    const [lastName, setLastName] = useState<string>(lastnameForm);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        let newValue = value;
        if (e.target.id === "firstname") {
            setFirstName(newValue);
        } else if (e.target.id === "lastname") {
            setLastName(newValue);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (firstName.trim() === "") {
            setErrors("Le prénom est requis.");
            return;
        }
        if (firstName.trim() !== "" && firstName.trim().length < 3) {
            setErrors("Le prénom doit contenir au moins 3 caractères.");
            return;
        }
        if (lastName.trim() === "") {
            setErrors("Le nom est requis.");
            return;
        }
        if (lastName.trim() !== "" && lastName.trim().length < 3) {
            setErrors("Le nom doit contenir au moins 3 caractères.");
            return;
        }
        onContactSubmit(firstName, lastName);
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <h2 className="font-bold text-center text-lg lg:text-[1.8rem] text-slate-800">Bonne nouvelle ! {cityForm !== "" ? `Le département de ${cityForm}` : "Votre département"} est éligible au déploiement de cette offre</h2>
                </div>
                <div>
                    <label htmlFor="firstname" className="text-slate-700 text-sm lg:text-base font-semibold text-left block mb-1">Prénom* :</label>
                    <input
                        id="firstname"
                        inputMode="text"
                        value={firstName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-base outline-none border border-slate-300 font-medium"
                        placeholder="Prénom"
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-slate-700 text-sm lg:text-base font-semibold text-left block mb-1">Nom* :</label>
                    <input
                        id="lastname"
                        inputMode="text"
                        value={lastName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-base outline-none border border-slate-300 font-medium"
                        placeholder="Nom"
                    />
                </div>
            </div>
            {errors && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{errors}</p>}
            {/* --- BOUTON --- */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    type="submit" onClick={(e) => handleSubmit(e)}
                    className={`w-2/3 lg:w-2/5 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium lg:font-semibold rounded-full shadow-lg 
                                       hover:bg-red-700 hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
