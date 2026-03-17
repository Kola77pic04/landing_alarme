"use client"

export default function AppHeader() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    return (
        <>
            <header className="sticky lg:fixed top-0 lg:top-4 left-0 right-0 z-50 lg:px-4">
                <div className="max-w-6xl lg:mx-auto glass-panel bg-white !border-slate-200/50 lg:rounded-full px-5 py-3 lg:py-2.5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                        <img src="/assets/alarm_logo.png" alt="alarme" className='w-12 lg:w-10' />
                        <h1 className="text-sm lg:text-lg font-bold text-slate-900">Sécurisez <br className="lg:hidden" /> votre maison</h1>
                    </div>

                    <button onClick={handleTop} className="cursor-pointer px-6 py-2.5 text-center rounded-full bg-[#e4464e] text-white text-xs lg:text-[13px] font-medium lg:font-semibold hover:bg-[#c13a3f] transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                        Fais un devis
                    </button>
                </div>
            </header>
        </>
    );
}