import React from 'react';
import Image from 'next/image';

const SobreNosotros = () => {
  return (
    <div className="bg-[#f4f1ec] font-playfair py-16">
      {/* Encabezado principal */}
      <section className="max-w-7xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2cbfb1] mb-6">
          ¿Quién es Neymar Carrero?
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed md:max-w-2xl mx-auto">
          Neymar Carrero ha logrado posicionarse como una de las agentes inmobiliarias más influyentes en el nicho de preconstrucciones, gracias a su constante dedicación y a un sistema comprobado que la llevó a transformar su carrera en solo cuatro años.
        </p>
      </section>

      {/* Sección del poder del coaching */}
      <section className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <div>
          <h2 className="text-3xl font-semibold text-[#8d6e58] mb-4">
            Un Punto de Inflexión: El Poder del Coaching
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Gracias a un sistema comprobado, Neymar aprendió a generar leads de calidad, manejar adecuadamente cada prospecto, precalificar clientes y aplicar técnicas de cierre efectivas. Estos conocimientos fueron el impulso necesario para pasar de la incertidumbre inicial a construir un negocio inmobiliario con resultados medibles y consistentes.
          </p>
        </div>
        <Image
          src="/image/ney-img5.png"
          alt="Neymar Carrero"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Especialización en preconstrucción */}
      <section className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <Image
          src="/image/ney-preconstruccion.png"
          alt="Especialización en preconstrucción"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold text-[#8d6e58] mb-4">
            Especialización en Preconstrucción
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Neymar se ha destacado por su especialización en la venta de preconstrucciones, un nicho demandante en el que ha perfeccionado sus habilidades para mostrar y vender propiedades aún no construidas. Gracias al coaching, ha consolidado su expertise en este segmento único del mercado.
          </p>
        </div>
      </section>

      {/* Compromiso y dedicación */}
      <section className="bg-[#fdfaf5] py-12">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-[#8d6e58] mb-4">
            Compromiso y Dedicación
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Para Neymar, su éxito no es solo fruto de una metodología probada, sino también de su disciplina, constancia y compromiso personal. Su trayectoria muestra que el esfuerzo continuo y la adaptación a las nuevas demandas del sector son esenciales para mantenerse a la vanguardia en el negocio inmobiliario.
          </p>
        </div>
      </section>

      {/* Marketing Estratégico y Conexión */}
      <section className="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <div>
          <h2 className="text-3xl font-semibold text-[#8d6e58] mb-4">
            Marketing Estratégico y Conexión con Clientes
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Neymar también ha implementado estrategias de marketing digital en webinars, YouTube e Instagram, logrando que cada transacción provenga de clientes que la encuentran en estos canales. Esta visibilidad le ha permitido no solo captar clientes, sino también conectar y construir relaciones de confianza de manera orgánica.
          </p>
        </div>
        <Image
          src="/image/ney-marketing.png"
          alt="Marketing estratégico"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Botón de llamada a la acción */}
      <div className="flex justify-center py-12">
        <a
          href="https://www.instagram.com/neymar.realtor/"
           target="_blank"
          className="inline-block bg-[#2cbfb1] text-white text-lg font-semibold py-3 px-12 rounded-full shadow-lg hover:bg-[#24a99e] transition duration-300"
        >
          Conoce más
        </a>
      </div>
    </div>
  );
};

export default SobreNosotros;