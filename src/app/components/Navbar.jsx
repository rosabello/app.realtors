"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#3C2C1B] font-playfair">
      <div className="mx-auto flex h-16 md:h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="block text-[#2cbfb1]" href="#">
          <Image
            src="/image/logo-blanco-Ney.png"
            alt="Logo"
            width={120}
            height={40}
            priority={true}
            className="object-contain"
          />
        </a>

        {/* Navegación para pantallas medianas y grandes */}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-lg">
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="http://localhost:3001/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="http://localhost:3001/pages/sobreNosotros"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="http://localhost:3001/pages/contacto"
                >
                  Contácto
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="http://localhost:3001/pages/webinar/home"
                >
                  Webinar
                </a>
              </li>
            </ul>
          </nav>

          {/* Botones de Login */}
          <div className="flex items-center gap-4">
            <a
              className="block rounded-md bg-[#2cbfb1] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#24a99e]"
              href="http://localhost:3001/pages/login"
            >
              Login
            </a>

            {/* Menú hamburguesa para dispositivos móviles */}
            <button
              className="block rounded bg-gray-100 p-3 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              <AiOutlineMenuUnfold className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú lateral para móviles */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#a68673] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-white font-semibold text-lg">Menú</span>
          <button onClick={closeMenu} className="text-white text-2xl">
            <AiOutlineClose />
          </button>
        </div>
        <nav className="p-4">
          <ul className="text-white space-y-4">
            <li className="cursor-pointer hover:text-gray-300 hover:underline">
              <a href="http://localhost:3001/">Inicio</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 hover:underline">
              <a href="http://localhost:3001/pages/sobreNosotros">Sobre nosotros</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 hover:underline">
              <a href="http://localhost:3001/pages/contacto">Contácto</a>
            </li>
            <li className="cursor-pointer hover:text-gray-300 hover:underline">
              <a href="http://localhost:3001/pages/webinar/home">Webinar</a>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
