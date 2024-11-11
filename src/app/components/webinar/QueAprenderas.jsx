import React from 'react';
import { FaLightbulb, FaHandshake, FaChartLine, FaAward } from 'react-icons/fa';
import Link from 'next/link';

const QueAprenderas = () => {
  return (
    <div className="bg-[#f4f1ec] py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2cbfb1] mb-12">
        ¿Qué aprenderás en este webinar?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
          <FaLightbulb className="text-4xl text-[#2cbfb1]" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Estrategias de Generación de Leads</h3>
            <p className="text-gray-600 mt-2">
              Estrategias probadas de generación de leads en el sector de pre-construcción para atraer clientes potenciales.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
          <FaHandshake className="text-4xl text-[#2cbfb1]" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Capta Clientes Listos para Invertir</h3>
            <p className="text-gray-600 mt-2">
              Aprende a depender menos de referidos y captar clientes interesados en invertir en pre-construcción.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
          <FaChartLine className="text-4xl text-[#2cbfb1]" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Aumenta tus Comisiones</h3>
            <p className="text-gray-600 mt-2">
              Técnicas para aumentar tus comisiones y cerrar más ventas en el competitivo mercado de pre-construcción.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300">
          <FaAward className="text-4xl text-[#2cbfb1]" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Metodología Efectiva</h3>
            <p className="text-gray-600 mt-2">
              Descubre una metodología que ha ayudado a agentes a superar +$1MM en comisiones en solo 12 meses.
            </p>
          </div>
        </div>
      </div>

      {/* Motivación para asistir */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          ¿Por qué verlo?
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Este webinar está diseñado para agentes inmobiliarios que buscan resultados concretos. Te compartiremos estrategias y técnicas de alta efectividad para que puedas atraer leads de calidad, vender proyectos de alto valor y construir una cartera de clientes sólida y rentable.
          Accede al webinar ahora y descubre cómo puedes transformar tu carrera en ventas de pre-construcción con estrategias que realmente funcionan.
        </p>

        {/* Botón de registro */}
        <Link href="http://localhost:3001/pages/webinar/register" target="_blank">
          <button className="inline-block mt-6 px-8 py-3 bg-[#2cbfb1] text-white font-semibold rounded-full hover:bg-[#24a99e] shadow-lg transition duration-300">
            REGÍSTRATE PARA VER EL WEBINAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QueAprenderas;