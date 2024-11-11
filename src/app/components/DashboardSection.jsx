"use client";
import React, { useRef } from "react";
import DashboardCards from "./DashboardCards";

const DashboardSection = () => {
  return (
    <div className="p-8 font-playfair bg-gray-100 min-h-screen w-full">
      {/* Banner superior */}
      <div className="relative bg-gradient-to-b from-[#ad876e] to-[#f5ac59] rounded-xl p-8 text-white mb-8 shadow-lg">
        <h2 className="text-4xl font-bold mb-4">
          Técnicas de Éxito Inmobiliario
        </h2>
        <p className="text-lg mb-4">
          Aprende las técnicas y estrategias que utilizo para tener éxito en el
          sector inmobiliario. Desde la generación de leads hasta el cierre.
        </p>
        <p className="text-lg">¡Vamos a crear un equipo fuerte y exitoso!</p>
      </div>

      {/* Título de Sección */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-[#7b5d50]">Módulos</h3>
      </div>

      {/* Contenedor de Cards en cuadrícula */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card 1 */}
        <DashboardCards
          tittle="Primeros Pasos"
          description="Aprende los conceptos básicos para comenzar en el sector inmobiliario."
          image="/image/primeros-pasos.png"
          modulo="primeros_pasos"
        />

        {/* Card 2 */}
        <DashboardCards
          tittle="Generación de Leads"
          description="Técnicas para generar leads efectivos en el mercado inmobiliario."
          image="/image/generacion-leads.png"
          modulo="generacion_leads"
        />

        {/* Card 3 */}
        <DashboardCards
          tittle="Conversaciones en Ventas"
          description="Desarrolla habilidades para tener conversaciones exitosas en ventas."
          image="/image/conversaciones-ventas.png"
          modulo="conversaciones_ventas"
        />

        {/* Card 4 */}
        <DashboardCards
          tittle="Segunda Reunión"
          description="Consejos para llevar al cliente a la segunda reunión."
          image="/image/segunda-reunion.png"
          modulo="segunda_reunion"
        />
      </div>
    </div>
  );
};

export default DashboardSection;
