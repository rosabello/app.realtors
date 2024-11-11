"use client";
import { useEffect } from "react";

// ID del video que deseas reproducir
const YOUTUBE_VIDEO_ID = "eArhIpe8fgA";

const YouTubePlayer = () => {
  useEffect(() => {
    // Carga la API de YouTube cuando el componente se monta
    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    };

    // Función que YouTube llama automáticamente cuando la API está lista
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        height: "390",
        width: "640",
        videoId: eArhIpe8fgA,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    loadYouTubeAPI();
  }, []);

  // Función que se llama cuando el reproductor está listo
  const onPlayerReady = (event) => {
    // Opcional: puedes agregar lógica adicional aquí, si deseas.
  };

  // Función para manejar el cambio de estado del reproductor
  const onPlayerStateChange = (event) => {
    // Si el video empieza a reproducirse y no está en el dominio correcto, se detiene
    if (event.data === window.YT.PlayerState.PLAYING) {
      if (window.location.hostname !== "/pages/webinar/webinar") {
        event.target.stopVideo();
        alert("Este video solo puede reproducirse en TU_DOMINIO.com");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-full max-w-lg">
        {/* Contenedor del video */}
        <div
          id="youtube-player"
          className="w-full h-[390px] border-4 border-[#fad02c] rounded-lg overflow-hidden"
        ></div>
      </div>
    </div>
  );
};

export default YouTubePlayer;