"use client";

import { useState } from "react";
import { parsePhoneNumberWithError } from 'libphonenumber-js/mobile';
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function Contact({ onContactSubmit, rollbackStep, firstnameForm, lastnameForm, phoneForm }: { onContactSubmit: (firstName: string, lastName: string, phone: string) => void; rollbackStep: () => void; firstnameForm: string; lastnameForm: string; phoneForm: string }) {
    const [errors, setErrors] = useState<any>(null);
    const [firstName, setFirstName] = useState<string>(firstnameForm);
    const [lastName, setLastName] = useState<string>(lastnameForm);
    const [phone, setPhone] = useState<string>(phoneForm);

    const validatePhoneLive = (input: string): string | null => {
        if (!input) return null;
        if (input.length < 2) return null;

        const cleaned = input.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
        const digitsOnly = cleaned.replace(/\D/g, '');

        // 1. Préfixe valide
        const startsWithValidPrefix =
            cleaned.startsWith('06') ||
            cleaned.startsWith('07') ||
            cleaned.startsWith('+336') ||
            cleaned.startsWith('+337');

        if (!startsWithValidPrefix) {
            return `Désolé le ${input} ne nous permet pas de vous adresser votre code de validation par SMS. Merci de saisir un numéro de mobile valide pour que nous puissions vous adresser votre SMS de confirmation.`;
        }

        // 2. Blocage : chiffres répétitifs (00000000 à 99999999)
        for (let i = 0; i <= 9; i++) {
            if (digitsOnly.includes(`${i}`.repeat(8))) {
                return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
            }
        }

        // 3. Blocage : motifs 0x0x0x0x (x de 1 à 9)
        for (let i = 1; i <= 9; i++) {
            const pattern = new RegExp(`(0${i}){4,}`); // ex: 01010101, 02020202...
            if (pattern.test(digitsOnly)) {
                return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
            }
        }

        // 4. Séquence interdite : 12345678
        if (digitsOnly.includes('12345678')) {
            return `Merci de saisir un numéro de mobile valide si vous souhaitez réellement recevoir cette offre d'assurance que tout le monde s'arrache.`;
        }

        return null;
    }

    const handleChangePhone = (e: any) => {
        const value = e.target.value;

        // Autoriser uniquement les chiffres et un '+' au début
        let cleaned = value.replace(/[^0-9+]/g, '');

        let formattedPhone = '';

        // Appliquer un formatage en fonction de la longueur et du préfixe
        if ((cleaned.startsWith('+33') && cleaned.length === 13)) {
            formattedPhone = cleaned.replace(
                /(\+33)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
                '$1 $2 $3 $4 $5 $6'
            );
        } else if ((cleaned.startsWith('+33') && cleaned.length === 12)) {
            formattedPhone = cleaned.replace(
                /(\+33)(\d{1})(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})?/,
                '$1 $2$3 $4 $5 $6 $7'
            );
        } else if ((cleaned.startsWith('33') && cleaned.length === 11)) {
            formattedPhone = cleaned.replace(
                /(33)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/,
                '$1 $2 $3 $4 $5 $6'
            );
        } else if ((cleaned.startsWith('06') || cleaned.startsWith('07')) && cleaned.length === 10) {
            formattedPhone = cleaned.replace(
                /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
                '$1 $2 $3 $4 $5'
            );
        } else {
            formattedPhone = cleaned;
        }

        setPhone(formattedPhone);
        const error = validatePhoneLive(formattedPhone);
        if (error) {
            setErrors(error);
            return;
        }
        setErrors(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        let newValue = value;
        if (e.target.id === "firstname") {
            setFirstName(newValue);
        } else if (e.target.id === "lastname") {
            setLastName(newValue);
        } else if (e.target.id === "phone") {
            handleChangePhone(e);
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
        if (phone.trim() === "") {
            setErrors("Le numéro de téléphone est requis.");
            return;
        }
        const tel = parsePhoneNumberWithError(phone, "FR");
        onContactSubmit(firstName, lastName, tel?.number || "");
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                    <h2 className="font-bold text-lg lg:text-3xl text-slate-800">Vos coordonnées :</h2>
                    <p className="text-xs lg:text-sm text-slate-600 border-slate-300 border-[1px] px-3 py-4 lg:p-3 rounded-lg">
                        ✅ Dernière étape ! Remplissez vos coordonnées pour pouvoir être recontacté par un expert du marché.
                    </p>
                </div>
                <div>
                    <label htmlFor="firstname" className="text-slate-700 text-sm lg:text-base font-semibold text-left block mb-1">Prénom :</label>
                    <input
                        id="firstname"
                        inputMode="text"
                        value={firstName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-sm lg:text-base outline-none border border-slate-300 font-medium"
                        placeholder="Prénom"
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-slate-700 text-sm lg:text-base font-semibold text-left block mb-1">Nom :</label>
                    <input
                        id="lastname"
                        inputMode="text"
                        value={lastName}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-sm lg:text-base outline-none border border-slate-300 font-medium"
                        placeholder="Nom"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="text-slate-700 text-sm lg:text-base font-semibold text-left block mb-1">Numéro de téléphone :</label>
                    <input
                        id="phone"
                        inputMode="text"
                        value={phone}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-sm lg:text-base outline-none border border-slate-300 font-medium"
                        placeholder="06 12 34 56 78"
                    />
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
                    Obtenir mon offre*
                </button>
            </div>
        </div>
    );
}
