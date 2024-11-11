// components/SidebarLayout.jsx
"use client";
import React, { useState } from "react";
import { FaHome, FaBook, FaVideo, FaQuestionCircle, FaUsers, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const SidebarLayout = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full ${
          isHovered ? "w-64" : "w-16"
        } bg-white text-gray-700 shadow-md transition-width duration-300 ease-in-out flex flex-col items-center z-40 overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="my-4">
          <Image src="/image/logo-ney.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Iconos de navegación */}
        <nav className="flex flex-col space-y-4 mt-8">
          <Link href="/dashboard" className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full">
            <FaHome className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Dashboard</span>}
          </Link>

          <Link href="/dashboard/contenido" className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full">
            <FaBook className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Contenido</span>}
          </Link>

          <Link href="/dashboard/grabaciones" className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full">
            <FaVideo className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Grabaciones</span>}
          </Link>

          <Link href="/dashboard/preguntasFrecuentes" className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full">
            <FaQuestionCircle className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Preguntas Frecuentes</span>}
          </Link>

          <Link href="/dashboard/construccionEquipo" className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full">
            <FaUsers className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Construcción de Equipo</span>}
          </Link>
        </nav>

        {/* Botón de Salir */}
        <div className="mt-auto mb-4 p-2 hover:bg-gray-200 rounded-full">
          <button 
          onClick={
            () => signOut()
          }
          className="flex items-center space-x-4 w-full text-red-500">
            <FaSignOutAlt className="text-xl" />
            {isHovered && <span className="text-md font-semibold">Salir</span>}
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <main className={`flex-grow ml-16 ${isHovered ? "ml-64" : "ml-16"} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
