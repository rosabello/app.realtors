"use client";
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBook,
  FaVideo,
  FaQuestionCircle,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Sidebar = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Detectar si es móvil
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Controlar la apertura/cierre del sidebar en móviles

  // Detectar si es una pantalla móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Considerar móvil si el ancho es menor a 768px
      setIsSidebarOpen(false); // Cerrar el sidebar cuando cambie el tamaño de la pantalla
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar sidebar al seleccionar una opción en móvil
  const handleLinkClick = () => {
    if (isMobile) {
      setIsSidebarOpen(false); // Cerrar el sidebar en móvil
    }
  };

  // Alternar la visibilidad del sidebar en móviles
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full ${
          (isHovered || isSidebarOpen) ? "w-64" : "w-16"
        } bg-white text-gray-700 shadow-md transition-width duration-300 ease-in-out flex flex-col items-center z-40 overflow-hidden`}
        onMouseEnter={() => !isMobile && setIsHovered(true)} // Sólo en pantallas grandes
        onMouseLeave={() => !isMobile && setIsHovered(false)} // Sólo en pantallas grandes
      >
        {/* Logo */}
        <div className="my-4">
          <Image src="/image/logo-ney.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Iconos de navegación */}
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            href="/dashboard"
            className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
            onClick={handleLinkClick}
          >
            <FaHome className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">Dashboard</span>
            )}
          </Link>

          <Link
            href="/dashboard/contenido"
            className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
            onClick={handleLinkClick}
          >
            <FaBook className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">Contenido</span>
            )}
          </Link>

          <Link
            href="/dashboard/grabaciones"
            className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
            onClick={handleLinkClick}
          >
            <FaVideo className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">Grabaciones</span>
            )}
          </Link>

          <Link
            href="/dashboard/preguntasFrecuentes"
            className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
            onClick={handleLinkClick}
          >
            <FaQuestionCircle className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">Preguntas Frecuentes</span>
            )}
          </Link>

          <Link
            href="/dashboard/construccionEquipo"
            className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
            onClick={handleLinkClick}
          >
            <FaUsers className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">
                Construcción de Equipo
              </span>
            )}
          </Link>

          {user.email === "info@neymarcarrero.com" && (
            <Link
              href="/dashboard/listaUsuarios"
              className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full w-full"
              onClick={handleLinkClick}
            >
              <FaUsers className="text-xl" />
              {(isHovered || isSidebarOpen) && (
                <span className="text-md font-semibold">Lista Usuarios</span>
              )}
            </Link>
          )}
        </nav>

        {/* Botón de Salir */}
        <div className="mt-auto mb-4 p-2 hover:bg-gray-200 rounded-full">
          <button
            onClick={() => {
              signOut();
              handleLinkClick();
            }}
            className="flex items-center space-x-4 w-full text-red-500"
          >
            <FaSignOutAlt className="text-xl" />
            {(isHovered || isSidebarOpen) && (
              <span className="text-md font-semibold">Salir</span>
            )}
          </button>
        </div>
      </div>

      {/* Botón para abrir/cerrar el sidebar en móviles */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full"
        >
          {isSidebarOpen ? "X" : "☰"}
        </button>
      )}
    </>
  );
};

export default Sidebar;