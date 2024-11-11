"use client";
import React from "react";
import FAQItem from "@/app/components/preguntasFrecuentes/FAQItem"; // Importamos el componente FAQItem
import FAQDataConstruccion from "@/app/components/construccionEquipo/FAQDataConstruccion"; // Importamos los datos

const ConstruccionEquipo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full font-playfair">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#7b5d50]">
        Construcción de equipo
      </h1>

      <div className="space-y-4">
        {FAQDataConstruccion.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default ConstruccionEquipo;