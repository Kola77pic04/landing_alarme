
export const FifthPart = () => {

  const data = [
    {
      image: "/assets/icon-1-2.svg",
      title: "Étape 1",
      description: "L'information est immédiatement transmise à notre centre de télésurveillance en France."
    },
    {
      image: "/assets/icon-3-1.svg",
      title: "Étape 2",
      description: "La sirène d’alarme, à la fois sonore et visuelle, se déclenche dans le logement."
    },
    {
      image: "/assets/icon-2-1.svg",
      title: "Étape 3",
      description: "Pour confirmer l'incident, un opérateur effectue une levée de doute en analysant les images des détecteurs de mouvement photo et/ou de la caméra, ou les sons captés par le boîtier SAVE."
    },
    {
      image: "/assets/icon-4-1.svg",
      title: "Étape 4",
      description: "Si la levée de doute est positive, l'opérateur contacte rapidement les forces de l'ordre via des numéros réservés ou les services de secours via des numéros départementaux."
    },
    {
      image: "/assets/icon-5-1.svg",
      title: "Étape 5",
      description: "Les occupants, qu'ils soient présents ou non, sont informés par téléphone et par SMS en cas de non-réponse."
    },
  ];

    return (
      <>
        <div className="px-3 w-full lg:pt-2 pb-8 lg:pb-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 lg:gap-5">
              <h2 className="font-bold text-xl text-center lg:text-3xl">Comment nous protégeons votre maison ?</h2>
              <p className="text-center text-[17px] lg:w-[80%] mx-auto px-4 leading-7 text-slate-700">Notre atout majeur : une <strong>réactivité exceptionnelle</strong>. Nous intervenons en <strong>moins de 20 secondes⁽³⁾</strong> dès la détection d’un départ de feu, d’une inondation ou d’une intrusion dans votre domicile.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 text-slate-700">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white lg:bg-transparent px-8 py-10 lg:py-0 lg:px-3 gap-2 rounded-lg border border-slate-200 lg:border-none">
                  <div className="bg-[#333] p-4 rounded-2xl flex justify-center items-center lg:w-20 lg:h-20"><img src={item.image} alt={item.title} className="w-12 h-12 lg:w-10 lg:h-10 object-cover" /></div>
                  <h3 className="font-bold text-[18px] text-slate-700 text-center lg:text-sm">{item.title}</h3>
                  <p className="text-center text-slate-700 md:text-[16px] lg:text-[13px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  