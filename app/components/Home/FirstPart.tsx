"use client";

export default function FirstPart() {
    const tabs = [
        {
            label: "Indiquez vos coordonnées",
            description: "Complétez notre formulaire en moins d’une minute",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 lg:w-12 lg:h-12 fill-sky-800" viewBox="0 0 24 24"><title>list-box-outline</title><path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" /></svg>`
        },
        {
            label: "Recevez votre devis",
            description: "Un conseiller vous contacte rapidement",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 lg:w-12 lg:h-12 fill-sky-800" viewBox="0 0 24 24"><title>phone-outline</title><path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" /></svg>`
        },
        {
            label: "Optez pour un nouveau fournisseur",
            description: "Nous nous occupons de toutes les démarches",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 lg:w-12 lg:h-12 fill-sky-800" viewBox="0 0 24 24"><title>offer</title><path d="M21 13C21.6 13 22.1 13.2 22.4 13.6C22.8 14 23 14.5 23 15L15 18L8 16V7H9.9L17.2 9.7C17.7 9.9 18 10.3 18 10.8C18 11.1 17.9 11.4 17.7 11.6C17.5 11.8 17.2 12 16.8 12H14L12.3 11.3L12 12.2L14 13H21M2 7H6V18H2V7Z" /></svg>`
        }
    ];

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">
                    <h2 className="text-2xl lg:text-3xl xl:text-[2.1rem] lg:w-3/4 lg:mx-auto text-center font-semibold tracking-tight bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text text-transparent">
                        Obtenez les tarifs d’énergie les plus compétitifs pour votre entreprise en quelques clics.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-4">
                        {tabs.map((tab, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 lg:p-8 shadow-md flex flex-col justify-center items-center gap-2">
                                <div dangerouslySetInnerHTML={{ __html: tab.svg }} />
                                <div className="flex flex-col items-center gap-1">
                                    <h3 className="text-lg xl:text-xl text-center font-semibold">{index + 1}. {tab.label}</h3>
                                    <p className="text-sm xl:text-base text-center text-gray-600">{tab.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <button className="w-full md:w-auto py-3.5 md:px-8 font-bold bg-gradient-to-r from-amber-600 to-orange-800 text-white rounded-lg shadow-lg 
                           hover:bg-orange-900 hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer" onClick={handleScrollToTop}>
                           Comparez et changez de fournisseur
                        </button>
                    </div>
                </div>
            </section >

        </>
    );
}