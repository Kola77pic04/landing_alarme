"use client";

import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiCheck } from "@mdi/js";

export default function DemoForm() {
    const [loading, setLoading] = useState(false);
    const [sendDatas, setSendDatas] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        company: ""
    });

    // Vérification du format email
    const isValidEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleChange = (e: any) => {
        const { id, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [id]: value
        }));

        // Validation en direct
        if (id === "email") {
            if (!value.trim()) {
                setErrors((prev) => ({ ...prev, email: "Ce champ est obligatoire." }));
            } else if (!isValidEmail(value)) {
                setErrors((prev) => ({ ...prev, email: "Format email invalide." }));
            } else {
                setErrors((prev) => ({ ...prev, email: "" }));
            }
            return;
        }

        // Effacer l’erreur au fur et à mesure
        setErrors((prev) => ({
            ...prev,
            [id]: value.trim() === "" ? "Ce champ est obligatoire." : ""
        }));
    };

    const handleSubmit = (e: any) => {
        setSendDatas(false);
        e.preventDefault();

        const newErrors: any = {};

        if (!form.name.trim()) newErrors.name = "Veuillez entrer votre nom complet.";
        if (!form.email.trim()) newErrors.email = "Veuillez entrer un email professionnel.";
        if (!form.company.trim()) newErrors.company = "Veuillez entrer votre entreprise.";

        setErrors(newErrors);

        // Stop si erreurs
        if (Object.keys(newErrors).length > 0) return;

        const formIsValid = true; // Remplace par ta logique

        // Soumission OK
        console.log("Formulaire valide :", form);
        if (formIsValid) {
            setLoading(true);

            // Simulation d'envoi API
            setTimeout(() => {
                setLoading(false);
                setSendDatas(true);
            }, 2000);
        }
    };

    return (
        <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>

            {/* --- NOM COMPLET --- */}
            <div>
                <label htmlFor="name" className={`block text-xs font-medium mb-1 ml-1 ${errors.name ? "text-red-500" : "text-gray-700"}`}>
                    Nom complet
                </label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm 
                        focus:ring-2 focus:border-transparent outline-none transition-all
                        ${errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-[#24B7C3]"}
                    `}
                    placeholder="Jean Dupont"
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>
                )}
            </div>

            {/* --- EMAIL --- */}
            <div>
                <label htmlFor="email" className={`block text-xs font-medium mb-1 ml-1 ${errors.email ? "text-red-500" : "text-gray-700"}`}>
                    Email professionnel
                </label>
                <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm 
                        focus:ring-2 focus:border-transparent outline-none transition-all
                        ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-[#24B7C3]"}
                    `}
                    placeholder="jean@entreprise.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                )}
            </div>

            {/* --- ENTREPRISE --- */}
            <div>
                <label htmlFor="company" className={`block text-xs font-medium mb-1 ml-1 ${errors.company ? "text-red-500" : "text-gray-700"}`}>
                    Entreprise
                </label>
                <input
                    type="text"
                    id="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-sm 
                        focus:ring-2 focus:border-transparent outline-none transition-all
                        ${errors.company ? "border-red-500 focus:ring-red-400" : "border-gray-200 focus:ring-[#24B7C3]"}
                    `}
                    placeholder="Votre Société"
                />
                {errors.company && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.company}</p>
                )}
            </div>

            {/* --- BOUTON --- */}
            <button
                type="submit"
                disabled={loading ? true : false}
                className={`w-full py-3.5 bg-[#24B7C3] text-white font-medium rounded-lg shadow-lg 
                           hover:bg-[#24B7C3]/90 hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 flex items-center justify-center gap-2 group ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${sendDatas ? "!bg-[#7ABB5C] hover:!bg-green-700/80" : ""}`}
            >
                {loading && <span role="status">
                    <svg aria-hidden="true" className="w-6 h-6 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#0A4D9F" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </span>}
                {sendDatas && <Icon
                    path={mdiCheck}
                    size={1}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />}
                {sendDatas ? "Demande envoyée" : ""}
                {loading ? "Demande en cours d'envoi" : ""}
                {!loading && !sendDatas ? "Demander une Démo" : ""}
                {!loading && !sendDatas && <Icon
                    path={mdiArrowRight}
                    size={1}
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />}
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
                Conforme RGPD & SecNumCloud
            </p>
        </form>
    );
}
