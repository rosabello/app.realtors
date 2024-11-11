"use client";
import React from "react";
import FAQItem from "@/app/components/preguntasFrecuentes/FAQItem"; // Importamos el componente FAQItem
import FAQData from "@/app/components/preguntasFrecuentes/FAQData"; // Importamos los datos

const PreguntasFrecuentesPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full font-playfair">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#7b5d50]">
        Preguntas Frecuentes
      </h1>

      <div className="space-y-4">
        {FAQData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentesPage;