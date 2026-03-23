"use client";

import { useState } from "react";
import { parsePhoneNumberWithError } from 'libphonenumber-js/mobile';

export default function PhoneContact({ onPhoneContactSubmit, showPartnersModal, firstnameForm, lastnameForm, phoneForm }: { onPhoneContactSubmit: (phone: string) => void; showPartnersModal: () => void; firstnameForm: string; lastnameForm: string; phoneForm: string }) {
    const [errors, setErrors] = useState<any>(null);
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
        handleChangePhone(e);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (phone.trim() === "") {
            setErrors("Le numéro de téléphone est requis.");
            return;
        }
        const tel = parsePhoneNumberWithError(phone, "FR");
        onPhoneContactSubmit(tel?.number || "");
    };

    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <h4 className="text-md font-medim text-center lg:text-xl text-slate-800">Merci <strong>{firstnameForm} {lastnameForm}</strong>, afin d'accéder à vos résultats sécurisés.</h4>
                    <h2 className="font-bold text-center text-lg lg:text-2xl text-slate-800">Votre numéro de mobile valide :</h2>
                </div>
                <div>
                    <input
                        id="phone"
                        inputMode="text"
                        value={phone}
                        onChange={(e) => handleChange(e)}
                        className="w-full bg-white text-[#062b31] px-4 py-3 lg:py-4 rounded-lg text-base outline-none border border-slate-300 font-medium"
                        placeholder="06 12 34 56 78"
                    />
                </div>
            </div>
            {errors && <p className="text-red-600 text-center p-2 rounded border-red-100 border-[1px] bg-red-50 font-semibold text-xs lg:text-sm">{errors}</p>}
            {/* --- BOUTON --- */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    type="submit" onClick={(e) => handleSubmit(e)}
                    className={`w-3/4 lg:w-3/6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-medium lg:font-semibold rounded-full shadow-lg 
                                       hover:bg-red-700 hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer`}
                >
                    Je valide mon devis gratuit
                </button>
            </div>

            <div className="text-[13.5px] text-black font-medium text-justify mt-6">
                En soumettant ce formulaire, j’accepte d’être rappelé par l'un des <strong onClick={showPartnersModal} className="cursor-pointer underline">partenaires</strong> de maison-surveillee.fr pour le suivi de ma demande de devis sans engagement. Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, consultez <a href="#" className="font-bold underline">la politique de confidentialité</a>.
            </div>
        </div>
    );
}
