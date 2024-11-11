const Panelistas = () => {
    return (
      <div className="container mx-auto my-8 px-4 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#845C42]">
          Speakers
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panelista 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/image/webinar/ney-panelista.png"
              alt="Panelista 1"
              className="w-48 h-48 object-cover rounded-full shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700">
              Neymar Carrero
            </h3>
            <p className="text-sm text-gray-500 italic mb-4 text-base">
              Team club +2MM comisiones
            </p>
            <p className="text-gray-600 text-lg">
              Especialista en inversionistas extranjeros, autora del libro{" "}
              <span className="text-black font-semibold">
                "Como hacer inversiones en el Sur de la Florida"
              </span>{" "}
              y co-host del podcast "Atreverme yo?"
            </p>
          </div>
  
          {/* Panelista 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/image/webinar/ari-panelista.png"
              alt="Panelista 2"
              className="w-48 h-48 object-cover rounded-full shadow-lg mb-4" // Aumentamos el tamaño de la imagen
            />
            <h3 className="text-2xl font-semibold text-gray-700">
              Arianna Rojas
            </h3>
            <p className="text-base text-gray-500 italic mb-4">
              Team club +1MM comisiones
            </p>
            <p className="text-gray-600 text-lg">
              Especialista en inversionistas extranjeros, autora del libro{" "}
              <span className="text-black font-semibold">
                "Conquista El Real Estate"
              </span>{" "}
              y co- host del podcast "Atreverme yo?"
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Panelistas;
  
