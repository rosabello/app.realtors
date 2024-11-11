const Home1 = () => {
  return (
    <section className="overflow-hidden bg-[#f4f1ec] sm:grid sm:grid-cols-2 sm:items-center font-playfair min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
      <div className="p-8 md:p-12 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center ltr:sm:text-left rtl:sm:text-right">
          {/* Título principal */}
          <h2 className="text-4xl font-extrabold text-[#7b5d50] md:text-5xl lg:text-6xl leading-tight">
            Técnicas de Éxito Inmobiliario
          </h2>

          {/* Subtítulo */}
          <h3 className="text-2xl text-[#2cbfb1] font-semibold mt-3 lg:mt-4 md:text-3xl lg:text-4xl">
            con Neymar Carrero
          </h3>

          {/* Descripción */}
          <p className="text-lg text-gray-700 mt-4 md:mt-6 md:text-xl lg:text-2xl">
            Aprende las estrategias que te posicionarán como el experto en Real Estate en tu área o ciudad.
          </p>

          <p className="text-base text-gray-600 mt-3 md:mt-5 lg:mt-6 lg:text-lg">
            Con más de 2MM en comisiones alcanzadas en los últimos 12 meses, Neymar Carrero te guiará con los mejores consejos y técnicas para lograr el éxito.
          </p>

          {/* Botón de llamada a la acción */}
          <div className="mt-8 md:mt-12">
            <a
              href="http://wa.me/16824229511"
               target="_blank"
              className="inline-block bg-[#2cbfb1] px-10 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:bg-[#24a99e] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#2cbfb1]"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative shadow-lg rounded-l-lg">
        <img
          alt="Neymar Carrero"
          src="/image/ney-img5.png"
          className="w-full h-full object-cover sm:rounded-ss-[30px] md:rounded-ss-[60px] max-h-[28rem] md:max-h-[32rem]"
        />
      </div>
    </section>
  );
};

export default Home1;