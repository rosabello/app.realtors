"use client";
import React from "react";

// Array con los documentos
const documents = [
  { title: "Guía de generación de leads", description: "Guía práctica con el paso a paso sobre cómo generar leads para agentes inmobiliarios", path: "/pdfs/guiaGeneracionLeads.pdf" },
  { title: "Guía del comprador", description: "Guía genérica para usar de referencia o contenido para email marketing", path: "/pdfs/guia-del-Comprador.pdf" },
  { title: "Guía para llamar a clientes", description: "Preguntas de pre-calificación y cómo hacer las llamadas de conversaciones en ventas", path: "/pdfs/guiaParaLlamarClientes.pdf" },
];

const DownloadSection = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen font-playfair">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#845C42] font-playfair">Contenido</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {documents.map((doc, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 text-[#7b5d50]">{doc.title}</h3>
            <p className="text-gray-600 mb-4">{doc.description}</p>
            <a
              href={doc.path}
              download
              className="inline-block px-6 py-2 bg-[#6ccccf] text-white font-semibold rounded-full hover:bg-[#5bb1ba] transition duration-300"
            >
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadSection;
