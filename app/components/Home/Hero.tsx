import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import DemoForm2 from '../forms/DemoForm2';

export default function HeroHome() {
    return (
        <>
            <section className="relative pb-12 md:pb-14 lg:pb-0 overflow-hidden text-white">
                <div className="lg:hidden flex flex-col gap-4">
                    <div className="relative h-58 md:h-96 ">
                        <div className="relative z-20 bg-[#e4464e] text-white">
                            <h2 className="text-2xl font-bold text-center">
                                Protégez votre domicile avec notre système d'alarme.
                            </h2>
                            <p className="text-center text-xs font-medium">
                                Installation rapide, en moins de 24 heures⁽²⁾.
                            </p>
                        </div>
                        <img
                            src="/assets/alarmes.png"
                            alt="alarmes"
                            className="absolute inset-0 z-10 w-full h-58 md:h-96"
                        />
                    </div>
                    <div className="px-3 mt-8">
                        <DemoForm2 />
                    </div>
                </div>

                <div className="hidden lg:block bg-hero lg:pt-24 lg:pb-26 xl:pb-24">
                    <div className="absolute inset-0 skew-y-0 bg-black opacity-40 transform origin-top-left z-0"></div>
                    <div className="lg:grid relative z-10 max-w-6xl mx-auto px-6 2xl:px-0 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div className="space-y-6 lg:order-2">
                            <h2 className="reveal-up delay-100 text-[42px] sm:text-5xl xl:text-[3.5rem] 2xl:text-6xl font-semibold tracking-tight leading-[1.1]">
                                Protégez votre domicile avec un système d’alarme fiable et performant
                            </h2>
                            <p className="reveal-up delay-200  sm:text-lg lg:text-xl font-light max-w-lg leading-relaxed">
                                nstallation rapide en moins de 24 heures⁽²⁾, pour une sécurité immédiate.
                            </p>
                            <div className="reveal-up delay-300 flex font-medium flex-wrap gap-4 pt-2 text-[13px] font-medium">
                                <div className="flex items-center gap-2 bg-white/10 lg:bg-white/80 lg:text-slate-800 px-3 py-1.5 rounded-lg border border-black/10">
                                    <Icon path={mdiCheck} className="w-4 lg:-mt-0.5 h-4 text-[#e4464e]" /> Plus de 5 000 clients déjà protégés
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 lg:bg-white/80 lg:text-slate-800 px-3 py-1.5 rounded-lg border border-black/10">
                                    <Icon path={mdiCheck} className="w-4 lg:-mt-0.5 h-4 text-[#e4464e]" /> Des solutions adaptées à chaque logement
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1" id="demo">
                            <DemoForm2 />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}