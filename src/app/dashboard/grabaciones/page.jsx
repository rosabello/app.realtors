"use client";
import React, { useState } from "react";
import CardsVideos from "@/app/components/grabacionesVideos/CardsVideos"; // Importamos el componente de videos
import VideosData from "@/app/components/grabacionesVideos/VideosData"; // Importamos los datos de los videos
import UploadVideoForm from "@/app/components/grabacionesVideos/UploadVideoForm ";

// Tags disponibles para filtrar
const availableTags = [
  "preguntas y respuestas",
  "primeros pasos",
  "c5",
  "exp",
  "practica",
  "zoom",
  "segunda reunion",
  "cambios de la nar",
  "rentas",
  "presentaciones",
  "proyecto 250",
  "precalificacion",
  "conversaciones en ventas",
];

const Page = ({ user }) => {
  const [filter, setFilter] = useState(""); // Filtro por tags
  const [videos, setVideos] = useState(VideosData); // Estado para los videos

  // Filtra y ordena los videos según el tag seleccionado y la fecha
  const filteredVideos = videos
    .filter((video) => {
      const matchTag = filter ? video.tags.includes(filter) : true;
      return matchTag;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha (más reciente primero)

  // Función para añadir un nuevo video a la lista de videos
  const handleAddVideo = (newVideo) => {
    setVideos((prevVideos) => [newVideo, ...prevVideos]); // Añadir el nuevo video al inicio de la lista
  };

  return (
    <div className="p-8 font-playfair bg-gray-100 min-h-screen w-full">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#7b5d50]">
        Grabaciones
      </h2>

      {/* Filtro */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        >
          <option value="">Todos los Tags</option>
          {availableTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Listado de videos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <CardsVideos
              key={index}
              title={video.title}
              description={video.description}
              videoId={video.videoId}
              tags={video.tags}
              image={video.image}
              date={video.date}
              timeMarkers={video.timeMarkers} // Pasamos los marcadores de tiempo al componente
            />
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>

    </div>
  );
};

export default Page;