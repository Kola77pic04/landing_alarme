"use client"

export const FourthPart = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div className="px-3 w-full pb-8">
        <div className="py-8 lg:p-10 px-4 md:px-8 lg:p-6 bg-[#e4464e] text-white rounded-3xl flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">
          <p className="text-center font-bold text-xl lg:text-3xl lg:w-1/2">Souhaitez-vous connaître le tarif d'une alarme pour la maison ?</p>
          <div className="w-full flex justify-center lg:justify-between lg:w-1/2 lg:flex-shrink-0">
            <div className="lg:border-white lg:border-r-2 hidden lg:block lg:w-1/3 p-2 h-24"></div>
            <div className="flex justify-center items-center w-full">
              <button className="cursor-pointer text-center font-bold text-[17px] w-full md:w-auto text-[#e4464e] bg-white px-4 py-3 md:px-12 lg:px-6 md:text-xl lg:py-2 hover:bg-gray-100 hover:duration-300 hover:ease-in-out rounded-xl" onClick={handleTop}>Commencer mon devis</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
