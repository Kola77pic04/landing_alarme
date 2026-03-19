export const SecondPart = () => {

  const data = [
    {
      title: "La télésurveillance 24h/24",
      description:
        "Notre centre de télésurveillance certifié APSAD basé en France et disponible 24/7 réagit immédiatement en cas d’alerte",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M12 1L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4zm0 2.2l7 3.1V11c0 4.1-3 8-7 9.2-4-1.2-7-5.1-7-9.2V6.3l7-3.1z" />
        </svg>
      ),
    },
    {
      title: "Le matériel",
      description:
        "Pas d’achat des équipements de télésurveillance. Ils sont inclus dans le prix",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      ),
    },
    {
      title: "Le diagnostic d’un professionnel",
      description:
        "Notre technicien détermine le meilleur emplacement pour le système d’alarme le plus efficace",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      ),
    },
    {
      title: "L’installation et la maintenance",
      description:
        "Pas de facturation d’installation, ni de maintenance",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M19.4 13c.04-.33.06-.66.06-1s-.02-.67-.06-1l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.028 7.028 0 00-1.73-1l-.38-2.65A.5.5 0 0014 2h-4a.5.5 0 00-.49.42l-.38 2.65c-.63.26-1.2.6-1.73 1l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.64L4.6 11c-.04.33-.06.66-.06 1s.02.67.06 1L2.49 14.65a.5.5 0 00-.12.64l2 3.46c.13.22.39.31.6.22l2.49-1c.53.4 1.1.74 1.73 1l.38 2.65c.05.24.25.42.49.42h4c.24 0 .44-.18.49-.42l.38-2.65c.63-.26 1.2-.6 1.73-1l2.49 1c.22.09.47 0 .6-.22l2-3.46a.5.5 0 00-.12-.64L19.4 13zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
        </svg>
      ),
    },
    {
      title: "La protection même en cas de coupure",
      description:
        "Le système est équipé d’une carte SIM 4G Orange et d’une batterie de secours (autonomie 24h max)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M2 22h20v-2H2v2zM12 2C8 2 4.5 5.5 4.5 9.5c0 3.1 2 5.8 4.8 6.9L12 22l2.7-5.6c2.8-1.1 4.8-3.8 4.8-6.9C19.5 5.5 16 2 12 2z" />
        </svg>
      ),
    },
    {
      title: " Une appli contrôle à distance",
      description:
        "Vous contrôlez à distance le système d’alarme de votre foyer via votre smartphone en toute simplicité",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-100">
          <path d="M12 3l9 8h-3v9h-12v-9H3l9-8zm0 2.2L6 10h1v8h10v-8h1l-6-4.8z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="w-full bg-[#f15e00] pt-10 pb-14 text-white">
        <div className="px-3 max-w-6xl mx-auto flex flex-col gap-8">
          <h2 className="font-bold text-3xl text-center lg:text-4xl">Pourquoi nous ?</h2>
          <div className="grid grid-cols-2 gap-x-2 gap-y-6 lg:gap-6 lg:grid-cols-3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 gap-3 rounded-lg text-center"
              >
                <span className="bg-[#333]/70 p-2 w-12 h-12 rounded-full flex items-center justify-center">{item.icon}</span>
                <h3 className="font-bold text-[14px] text-orange-500 lg:text-[18px]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 lg:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
