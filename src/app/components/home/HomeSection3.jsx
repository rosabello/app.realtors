import React from 'react';
import Image from 'next/image';

const HomeSection3 = () => {
  return (
    <div 
      className="relative w-full h-[30rem] md:h-[35rem] bg-cover bg-center flex items-center font-playfair"
      style={{ backgroundImage: `url(/image/img-bg-section3.png)` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto h-full px-6 md:px-10 py-8 md:py-0">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-end absolute bottom-0 md:static">
          <Image
            src="/image/ney-section3.png"
            alt="Neymar Carrero"
            width={350}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white ml-0 md:ml-16 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left leading-tight">
            ¿Quién es Neymar Carrero?
          </h2>
          <p className="bg-[#f4f1ec] text-gray-800 p-8 rounded-lg shadow-lg max-w-md lg:max-w-lg text-center md:text-left text-lg lg:text-xl leading-relaxed">
            Con solo cuatro años en el sector inmobiliario, Neymar Carrero ha alcanzado +$2MM en comisiones, gracias a su inversión en coaching y formación especializada.
          </p>
          <button className="mt-6 px-8 py-3 bg-transparent border-2 border-[#2cbfb1] text-[#2cbfb1] font-semibold rounded-full hover:bg-[#2cbfb1] hover:text-white transition duration-300 text-lg lg:text-xl">
            Leer más
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;