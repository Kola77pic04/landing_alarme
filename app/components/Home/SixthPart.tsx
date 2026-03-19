export const SixthPart = () => {

  const questions = [
    {
      title: "Combien coûte une alarme maison ?",
      description: `"Le prix d’un système d’alarme dépend de plusieurs facteurs, comme la surface à protéger, la configuration de votre logement et vos besoins spécifiques. Chaque installation est personnalisée afin de garantir une protection efficace et adaptée. <br /> Pour établir un devis précis, un professionnel réalise un audit de sécurité gratuit et sans engagement, permettant d’identifier les zones sensibles de votre domicile.`
    },
    {
      title: "Quels sont les critères pour choisir son alarme maison ?",
      description: `Choisir un bon système d’alarme, c’est opter pour une solution fiable, installée par des professionnels et accompagnée d’un service de télésurveillance 24/7. <br /> Une alarme efficace doit couvrir les risques de cambriolage, d’incendie, de fuite d’eau ou encore d’intrusion, tout en garantissant un suivi technique et une maintenance régulière. Un audit de sécurité gratuit et sans engagement vous permet d’identifier vos besoins et de sélectionner la solution la plus adaptée à votre logement.`
    },
    {
      title: "Quel est le meilleur système d'alarme pour une maison ?",
      description: `Le meilleur système d’alarme est celui qui s’ajuste précisément à votre domicile et à votre mode de vie, en offrant une protection complète contre les risques : cambriolage, incendie, intrusion, etc. <br /> Nos experts peuvent installer un système performant en moins de 24h, avec un service de télésurveillance 24/7 et des vérifications régulières du matériel. De nombreux clients témoignent de la fiabilité de nos solutions et du professionnalisme de nos équipes.`
    }
  ];

  return (
    <>
      <div className="px-3 w-full bg-white lg:pt-2 pb-8 lg:pb-10">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-xl text-center lg:text-3xl">Questions courantes sur les alarmes</h2>
          <div className="grid grid-cols-1 gap-5 lg:gap-4 lg:grid-cols-3 text-slate-700">
            {questions.map((item, index) => (
              <article key={index} className="flex flex-col gap-3 md:gap-4 bg-white p-3 rounded-lg border-slate-200 border transition-all duration-500">
                <span className="font-bold text-lg text-white bg-[#f15e00] w-10 h-10 rounded flex items-center justify-center flex-shrink-0">{index + 1}</span>
                <h3 className="text-lg font-bold text-[#f15e00]">{item.title}</h3>
                <p className="text-[17px] text-slate-700" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
