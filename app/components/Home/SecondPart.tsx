export const SecondPart = () => {

  const data = [
    {
      image: "/assets/telesurveillance.jpg",
      title: "Télésurveillance à partir de 1,25€ par jour",
    },
    {
      image: "/assets/garantie.jpg",
      title: "Garantie produit : réparations et remplacement inclus",
    },
    {
      image: "/assets/installation.jpg",
      title: "Installation professionnelle",
    },
    {
      image: "/assets/demenagement.jpg",
      title: "Déménagement offert avec l'installation",
    },
  ];

    return (
      <>
        <div className="w-full bg-[#e4464e] pt-10 pb-14 text-white">
          <div className="px-3 max-w-6xl mx-auto flex flex-col gap-8">
            <h2 className="font-bold text-3xl text-center lg:text-4xl">Pourquoi nous ?</h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-6 lg:gap-6 lg:grid-cols-4">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white p-4 gap-2 rounded-lg">
                  <img src={item.image} alt={item.title} className="w-full h-28 lg:h-40 object-cover rounded-lg" />
                  <h3 className="font-bold text-[13px] text-slate-700 text-center lg:text-[18px]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  