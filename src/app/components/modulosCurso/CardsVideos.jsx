"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardsVideos = ({ title, description, image, videoId, ruta}) => {
  
  const router = useRouter();

  const [showVideo, setShowVideo] = useState(false); // Controla si el video está visible
  const playerRef = useRef(null); // Referencia al IFrame para interactuar con la API de YouTube

  

  useEffect(() => {
    // Función para cargar la API de YouTube
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        // Cargar el script de la API si no está ya cargado
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      // Crear una función global para manejar la carga de la API
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    };

    if (showVideo) {
      loadYouTubeAPI(); // Carga la API cuando el modal esté visible
    }
  }, [showVideo]);

  // Función para crear el reproductor de YouTube usando la API
  const createPlayer = () => {
    if (window.YT && playerRef.current) {
      new window.YT.Player(playerRef.current, {
        videoId: videoId, // Pasa el ID del video
        playerVars: {
          autoplay: 1, // Inicia automáticamente el video
          rel: 0, // No mostrar videos relacionados
          modestbranding: 1, // Minimiza la marca de YouTube
          origin: window.location.origin, // Asegura que el video solo se reproduzca en este dominio
          enablejsapi: 1, // Habilita la API JS
        },
      });
    }
  };

  // Función para abrir el modal del video
  const handleVideoOpen = () => {
    setShowVideo(true);
  };

  // Función para cerrar el modal del video
  const handleVideoClose = () => {
    setShowVideo(false);
    router.push("/dashboard/"+ ruta)
    router.refresh()
    
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
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <div
                id="player"
                ref={playerRef} // Enlazamos el reproductor a esta referencia
                className="absolute top-0 left-0 w-full h-full"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsVideos;