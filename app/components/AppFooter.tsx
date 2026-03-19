import Link from 'next/link';

export default function AppFooter() {
    return (
        <>
            <footer className="bg-slate-50 py-8 lg:py-6 text-slate-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
                        <div className="flex flex-col md:flex-row w-full md:w-auto items-center gap-6">
                            <Link target="_blank" href="/cookies" className="text-xs hover:underline hover:duration-300 hover:ease-linear hover:text-stone-300 hover:text-vocal-primary">Gestion des cookies</Link>
                            <Link target="_blank" href="/confidentialite" className="text-xs hover:underline hover:duration-300 hover:ease-linear hover:text-stone-300 hover:text-vocal-primary">Politique de Confidentialité</Link>
                            <Link target="_blank" href="/conditions" className="text-xs hover:underline hover:duration-300 hover:ease-linear hover:text-stone-300 hover:text-vocal-primary">Conditions générales d'utilisation</Link>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}