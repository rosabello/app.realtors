"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardsVideos = ({ title, description, image, videoId, timeMarkers }) => {

  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false); // Controla si el video está visible

  const handleVideoOpen = () => {
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    router.refresh() // Recarga la página al cerrar el video
  };

  return (
    <div className="relative bg-white rounded-lg p-4 shadow-md hover:shadow-2xl transition duration-300 w-full max-w-xs mx-auto">
      {/* Imagen del card */}
      <div className="relative h-52 w-full mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Título y Descripción */}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-base text-gray-600 mb-4">{description}</p>

      {/* Botón para abrir el video */}
      <div className="flex justify-center">
        <button
          onClick={handleVideoOpen}
          className="px-4 py-2 bg-[#6ccccf] text-white font-semibold rounded-full hover:bg-[#5bb1ba] transition duration-300"
        >
          Ver Video
        </button>
      </div>

      {/* Modal con el video */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
            {/* Botón de cerrar (X) */}
            <button
              onClick={handleVideoClose}
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-gray-700 transition duration-300"
            >
              &times;
            </button>

            {/* Video de YouTube con la API */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&enablejsapi=1&origin=https://tudominio.com`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            {/* Marcadores de tiempo debajo del video */}
            {timeMarkers && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Contenido del Video:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {timeMarkers.map((marker, index) => (
                    <li key={index}>
                      {marker.time} - {marker.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsVideos;