"use client";

import React from "react";
import CardsVideos from "../../components/modulosCurso/CardsVideos";
import { data } from "@/app/data/data";
import { useParams } from "next/navigation";


const page = () => {
  console.log(data);

  const params = useParams();
  console.log(params);
  if (params.modulo == "generacion_leads") {
    var data_module = data.generacion_leads;
    console.log(data_module);
  } else if (params.modulo == "primeros_pasos") {
    var data_module = data.primeros_pasos;
  } else if (params.modulo == "conversaciones_ventas") {
    var data_module = data.conversaciones_ventas;
  } else if (params.modulo == "segunda_reunion") {
    var data_module = data.segunda_reunion;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data_module.map((item) => (
        <CardsVideos
          key={item.videoId}
          title={item.title}
          description={item.description}
          image={item.image}
          videoId={item.videoId}
          ruta={params.modulo}
        />
      ))}
    </div>
  );
};

export default page;
