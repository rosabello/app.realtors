
"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios"; // Importamos axios para manejar solicitudes HTTP

const Contactanos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/contacto", data);
      console.log("Respuesta del servidor:", response);
      if (response.status === 200) {
        alert("Mensaje enviado correctamente");
        reset(); // Limpiamos el formulario después del envío
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.");
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
      <div className="relative z-10 bg-gradient-to-b from-[#3f2d20] to-[#b38c78] bg-opacity-90 rounded-lg p-8 md:p-12 w-full max-w-2xl flex flex-col items-center shadow-lg">
        {/* Título */}
        <h2 className="text-5xl md:text-5xl font-bold text-[#2cbfb1] mb-8">
          Contáctanos
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* Campo Nombre */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre", {
                  required: "El nombre es requerido",
                  minLength: { value: 2, message: "Debe tener al menos 2 caracteres" },
                })}
                className="p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
              />
              {errors.nombre && (
                <span className="text-red-500 text-sm mt-1">{errors.nombre.message}</span>
              )}
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Apellido"
                {...register("apellido", {
                  required: "El apellido es requerido",
                  minLength: { value: 2, message: "Debe tener al menos 2 caracteres" },
                })}
                className="p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
              />
              {errors.apellido && (
                <span className="text-red-500 text-sm mt-1">{errors.apellido.message}</span>
              )}
            </div>
          </div>

          {/* Campo Correo */}
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

          {/* Campo Asunto */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Asunto"
              {...register("asunto", {
                required: "El asunto es requerido",
                minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
              })}
              className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white"
            />
            {errors.asunto && (
              <span className="text-red-500 text-sm mt-1">{errors.asunto.message}</span>
            )}
          </div>

          {/* Campo Mensaje */}
          <div className="flex flex-col">
            <textarea
              placeholder="Mensaje"
              {...register("mensaje", {
                required: "El mensaje es requerido",
                minLength: { value: 10, message: "Debe tener al menos 10 caracteres" },
              })}
              className="w-full p-4 border border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white h-32 rounded-md resize-none"
            ></textarea>
            {errors.mensaje && (
              <span className="text-red-500 text-sm mt-1">{errors.mensaje.message}</span>
            )}
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-8 px-8 py-3 bg-transparent border-2 border-[#2cbfb1] text-[#2cbfb1] font-semibold rounded-full hover:bg-[#2cbfb1] hover:text-[#8d6e58] transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;