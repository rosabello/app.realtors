import Image from 'next/image';
import Link from 'next/link';

const WebinarSection = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-[#3C2C1B]">
      {/* Contenedor de la imagen y la capa de superposición */}
      <div className="relative w-full h-[50vh] md:h-[27rem]">
        {/* Imagen de fondo */}
        <Image 
          src="/image/fondo-1.png" 
          alt="Imagen de fondo del webinar" 
          layout="fill" 
          className="object-cover"
        />
        
        {/* Capa de superposición transparente */}
        <div className="absolute inset-0 bg-[#8f6f58] opacity-40 z-10"></div>

        {/* Contenido centrado encima de la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 text-center z-20">
          <h2 className="text-lg md:text-2xl mb-2 md:mb-4 text-white font-bold">
            ¿Estás cansado de depender solo de tus referidos? ¡Aprende a captar leads efectivos!
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white">
            Captación y Conversión de Leads para Vender Pre-Construcción
          </h1>

          {/* Botón de registro */}
          <Link href="http://localhost:3001/pages/webinar/register" target="_blank">
            <button className="mt-4 md:mt-6 px-6 py-2 md:px-8 md:py-3 bg-white text-black font-semibold rounded-full hover:bg-[#25629d] hover:text-white transition duration-300">
              REGÍSTRATE PARA EL WEBINAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
