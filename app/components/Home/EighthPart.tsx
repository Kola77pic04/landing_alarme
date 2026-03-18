"use client"

export const EighthPart = () => {

  const data = [
    {
      image: "/assets/avis.png",
      title: "Demande de devis en ligne",
    },
    {
      image: "/assets/service_client.png",
      title: "Diagnostic de sécurité avec un expert",
    },
    {
      image: "/assets/install.png",
      title: "Installation de votre alarme sous 24h",
    }
  ];
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="px-3 w-full bg-white pt-8 lg:pt-10 pb-10 lg:pb-11 text-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <h2 className="font-bold text-xl text-center lg:text-3xl lg:w-[80%] mx-auto">Notre système : fiabilité et simplicité. <br className="md:hidden" /> Choisissez la tranquillité !</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-gray-700">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-white lg:bg-transparent px-8 py-6 lg:py-0 lg:px-3 gap-2 rounded-lg">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
                <h3 className="font-semibold text-[17px] text-gray-700 text-center">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="lg:mt-3 py-8 lg:p-10 px-4 md:px-8 lg:p-6 bg-[#e4464e] text-white rounded-3xl flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
            <p className="text-center font-bold text-xl lg:text-3xl lg:w-1/2">Rejoignez-nous pour protéger votre foyer</p>
            <div className="w-full flex justify-center lg:justify-between lg:w-1/2 lg:flex-shrink-0">
              <div className="lg:border-white lg:border-r-2 hidden lg:block lg:w-1/3 p-2 h-24"></div>
              <div className="flex justify-center items-center w-full">
                <button className="cursor-pointer text-center font-bold text-[17px] w-full md:w-auto text-[#e4464e] bg-white px-4 py-3 md:px-12 lg:px-6 md:text-xl lg:py-2 hover:bg-gray-100 hover:duration-300 hover:ease-in-out rounded-xl" onClick={handleTop}>Commencer mon devis</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
