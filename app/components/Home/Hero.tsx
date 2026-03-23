"use client"

import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import DemoForm2 from '../forms/DemoForm2';
import { useEffect } from 'react';

export default function HeroHome() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3);

    const day = futureDate.getDate();
    const month = futureDate.toLocaleString('fr-FR', { month: 'long' });
    const year = futureDate.getFullYear();
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const utm_source = urlParams.get('utm_source');
        if (utm_source) {
            localStorage.setItem('utm_source', utm_source);
        }
        const redirectParam = urlParams.get('redirect');
        if (redirectParam) {
            localStorage.setItem('redirect', redirectParam);
        }
    }, []);

    return (
        <>
            <section className="relative pb-12 md:pb-14 lg:pb-0 overflow-hidden text-white">
                <div className="lg:hidden flex flex-col gap-4">
                    <div className="relative h-72 md:h-96 ">
                        <div className="relative z-20 py-1 bg-[#f15e00] text-white">
                            <h2 className="text-xl font-bold text-center px-4">Offre exceptionnelle : -20% sur les packs de sécurité valable jusqu’au {day} {month} {year} !</h2>
                            <p className="text-center text-xs font-medium">
                                Installation en 24 heures, pour une sécurité immédiate.
                                <br />
                                Élu Produit de l'année
                            </p>
                        </div>
                        <img
                            src="/assets/modern_home.jpg"
                            alt="modern_home"
                            className="absolute inset-0 z-10 w-full h-72 md:h-96"
                        />
                    </div>
                    <div className="px-3 mt-8">
                        <div className="px-6 py-2 bg-[#f15e00] rounded-t-2xl">
                            <h2 className="text-xl text-center lg:text-3xl text-white font-semibold tracking-tight">Votre devis gratuit en 1 minute</h2>
                        </div>
                        <DemoForm2 />
                    </div>
                </div>

                <div className="hidden lg:block bg-hero lg:pt-24 lg:pb-26 xl:pb-24">
                    <div className="absolute inset-0 skew-y-0 bg-black opacity-40 transform origin-top-left z-0"></div>
                    <div className="lg:grid relative z-10 max-w-6xl mx-auto px-6 2xl:px-0 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="reveal-up delay-100 text-[42px] sm:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-semibold tracking-tight leading-[1.1]">
                                Offre exceptionnelle : -20% sur les packs de sécurité valable jusqu’au {day} {month} {year} !
                            </h2>
                            <p className="reveal-up delay-200  sm:text-lg lg:text-xl font-light max-w-lg leading-relaxed">
                                Installation en 24 heures, pour une sécurité immédiate.
                                <br />
                                Élu Produit de l'année
                            </p>
                            <div className="reveal-up delay-300 flex font-medium flex-wrap gap-4 pt-2 text-[13px] font-medium">
                                <div className="flex items-center gap-2 bg-white/10 lg:bg-white/80 lg:text-slate-800 px-3 py-1.5 rounded-lg border border-black/10">
                                    <Icon path={mdiCheck} className="w-4 lg:-mt-0.5 h-4 text-[#f15e00]" /> Votre devis gratuit en 1 minute
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 lg:bg-white/80 lg:text-slate-800 px-3 py-1.5 rounded-lg border border-black/10">
                                    <Icon path={mdiCheck} className="w-4 lg:-mt-0.5 h-4 text-[#f15e00]" /> Des solutions adaptées à chaque logement
                                </div>
                            </div>
                        </div>
                        <div id="demo" className="flex justify-end">
                            <div className="">
                                <div className="px-6 py-2 bg-[#f15e00] rounded-t-2xl">
                                    <h2 className="text-xl text-center lg:text-3xl text-white font-semibold tracking-tight">Votre devis gratuit en 1 minute</h2>
                                </div>
                                <DemoForm2 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}