"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form"; // Importa useForm de react-hook-form
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Función de envío de datos al backend
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/registro", data);
      console.log("Respuesta del servidor:", response);
      if (response.status === 200) {
        alert("Registro exitoso");
        reset(); // Reinicia el formulario tras un registro exitoso
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un problema al registrar. Por favor intenta de nuevo.");
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center font-playfair"
      style={{ backgroundImage: `url(/image/img-bg-Mercedes.jpg)` }}
    >
      {/* Capa para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido principal del formulario */}
      <div className="relative z-10 bg-gradient-to-b from-[#3f2d20] to-[#b38c78] bg-opacity-90 rounded-lg p-8 md:p-12 w-full max-w-md md:max-w-lg flex flex-col items-center shadow-lg">
        {/* Título y logo */}
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2cbfb1]">Registro</h2>
          <div className="text-right">
            <Image
              src="/image/logo-blanco-Ney.png"
              alt="Neymar Carrero Logo"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* Campo Nombre y mensaje de error */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre", {
                required: "El nombre es requerido",
                minLength: { value: 4, message: "Debe tener al menos 4 caracteres" },
              })}
              className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
            />
            {errors.nombre && (
              <span className="text-red-500 text-sm mt-1">{errors.nombre.message}</span>
            )}
          </div>

          {/* Campo Apellido y mensaje de error */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Apellido"
              {...register("apellido", {
                required: "El apellido es requerido",
                minLength: { value: 4, message: "Debe tener al menos 4 caracteres" },
              })}
              className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
            />
            {errors.apellido && (
              <span className="text-red-500 text-sm mt-1">{errors.apellido.message}</span>
            )}
          </div>

          {/* Campo Correo y mensaje de error */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Correo"
              {...register("correo", {
                required: "El correo es requerido",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Correo no válido",
                },
              })}
              className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
            />
            {errors.correo && (
              <span className="text-red-500 text-sm mt-1">{errors.correo.message}</span>
            )}
          </div>

          {/* Campo Contraseña y mensaje de error */}
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
              })}
              className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
            )}
          </div>

          {/* Botón de registro centrado */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-8 px-8 py-3 bg-transparent border-2 border-[#2cbfb1] text-[#2cbfb1] font-semibold rounded-full hover:bg-[#2cbfb1] hover:text-[#8d6e58] transition duration-300"
            >
              Registro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;