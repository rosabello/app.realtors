import React from "react";
import { FaLaptop, FaCoffee, FaPodcast } from "react-icons/fa";

const HomeSection4 = () => {
  return (
    <div className="bg-[#f4f1ec] text-center py-16 font-playfair  border-t-4 border-[#9E9182]">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#6E6E6E] mb-12">
        Potencia tus habilidades y transforma tu carrera en Real Estate <br />
        <span className="text-3xl md:text-4xl font-bold">
          Con nuestras herramientas y eventos
        </span>
      </h2>

      {/* Contenedor de las tarjetas */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
        {/* Tarjeta 1 - Eventos */}
        <div className="bg-gradient-to-b from-[#845C42] to-[#b59b8e] text-white rounded-lg p-8 w-80 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-700/50">
          <div className="text-[#2cbfb1] text-6xl mb-4 transition-transform duration-300 transform hover:rotate-6">
            <FaLaptop />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-">Eventos</h3>
          <p className="text-lg mb-4 text-center">
            Eventos online y presencial, visita de proyectos en preconstrucción
            y más
          </p>
          <a
            href="https://wa.me/16824229511?text=Hola,%20quiero%20participar%20en%20los%20próximos%20eventos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-8 py-3 bg-[#2cbfb1] text-white font-semibold rounded-full hover:bg-[#24a99e] shadow-lg transition duration-300"
          >
            Participar
          </a>
        </div>

        {/* Tarjeta 2 - Cafecito inmobiliario */}
        <div className="bg-gradient-to-b from-[#845C42] to-[#b59b8e] text-white rounded-lg p-8 w-80 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-700/50">
          <div className="text-[#2cbfb1] text-6xl mb-4 transition-transform duration-300 transform hover:rotate-6">
            <FaCoffee />
          </div>
          <h3 className="text-2xl font-bold mb-4">Cafecito inmobiliario</h3>
          <p className="text-lg mb-4 text-center">
            Incrementa tu productividad de lunes a viernes de 8:00am a 9:00am
          </p>
          <a
            href="https://www.youtube.com/@C5Global/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-8 py-3 bg-[#2cbfb1] text-white font-semibold rounded-full hover:bg-[#24a99e] shadow-lg transition duration-300"
          >
            Escuchar
          </a>
        </div>

        {/* Tarjeta 3 - Podcast */}
        <div className="bg-gradient-to-b from-[#845C42] to-[#b59b8e] text-white rounded-lg p-8 w-80 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-700/50">
          <div className="text-[#2cbfb1] text-6xl mb-4 transition-transform duration-300 transform hover:rotate-6">
            <FaPodcast />
          </div>
          <h3 className="text-2xl font-bold mb-4">Atreverme yo?</h3>
          <p className="text-lg mb-4 text-center">
            Tu podcast para el éxito inmobiliario, nuevo episodio todos los
            jueves
          </p>
          <a
            href="https://linktr.ee/AtrevermeYopodcast"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-8 py-3 bg-[#2cbfb1] text-white font-semibold rounded-full hover:bg-[#24a99e] shadow-lg transition duration-300"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
