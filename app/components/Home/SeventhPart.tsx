export const SeventhPart = () => {

  const questions = [
    {
      image: "/assets/detecteur_mouvement.png",
      title: "Détecteur de mouvement photos",
      tabDescription: [
        "Capte les mouvements ainsi que la chaleur corporelle",
        "Connectés au système d’alarme pour permettre une levée de doute fiable",
        "Large champ de détection, avec possibilité d’adaptation pour les animaux de compagnie"
      ]
    },
    {
      image: "/assets/detecteur_fumee.png",
      title: "Détecteur de fumée",
      tabDescription: [
        "Détecte précocement toute chaleur ou fumée inhabituelle",
        "Sirène puissante de 85 dB pour dissuader les intrus",
        "Fonctionne en continu, même lorsque le système d'alarme est désactivé"
      ]
    },
    {
      image: "/assets/detecteur_porte.png",
      title: "Détecteur d'ouverture porte et fenêtre",
      tabDescription: [
        "Envoie immédiatement des alertes à la télésurveillance dès la moindre tentative d’intrusion",
        "Assure une protection périmétrique efficace",
        "Discret et parfaitement intégré à votre intérieur"
      ]
    },
  ];

  return (
    <>
      <div className="px-3 w-full py-8 lg:pb-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <h2 className="font-bold text-xl text-center lg:text-3xl">Produits qui composent votre alarme maison connectée</h2>
          <div className="grid grid-cols-1 gap-5 lg:gap-4 md:grid-cols-3 text-gray-700">
            {questions.map((item, index) => (
              <article key={index} className="flex flex-col gap-3 bg-white rounded-xl">
                <img src={item.image} alt={item.title} className="w-full md:h-72 lg:h-auto rounded-t-xl object-cover" />
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold text-[#e4464e]">{item.title}</h3>
                  <ul className="flex flex-col gap-3 lg:gap-1.5">
                    {item.tabDescription.map((description, index) => (
                      <li key={index} className="flex items-start gap-2 text-[17px] text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:mt-1 flex-shrink-0" fill="#c53441" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="#c53441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/></svg>
                        <span className="md:text-[16px]">{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
