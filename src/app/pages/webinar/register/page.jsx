"use client";
import React from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Registro = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post("http://localhost:3001/api/registerWebinar", data);
      console.log(resp);
      if (resp.status === 200) {
        alert("Registro exitoso");
        reset(); // Reiniciar el formulario después del envío exitoso
        router.push("/pages/webinar/webinar"); // Redirigir a la página del webinar
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un problema al enviar el registro. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Image
          src="/image/webinar/bannerwebinar.png"
          alt="Banner del Webinar"
          width={600}
          height={300}
          className="pb-4"
        />
        <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Registro</h2>

        {/* Campo de nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "*Campo requerido",
              },
              minLength: {
                value: 4,
                message: "El nombre debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
        </div>

        {/* Campo de apellido */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ingresa tu apellido"
            {...register("apellido", {
              required: {
                value: true,
                message: "*Campo requerido",
              },
              minLength: {
                value: 4,
                message: "El apellido debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.apellido && <span className="text-red-500">{errors.apellido.message}</span>}
        </div>

        {/* Campo de correo */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
            Correo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Ingresa tu correo"
            {...register("correo", {
              required: {
                value: true,
                message: "*Campo requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.correo && <span className="text-red-500">{errors.correo.message}</span>}
        </div>

        {/* Campo de teléfono */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            {...register("phone", {
              required: {
                value: true,
                message: "*Campo requerido",
              },
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 dígitos",
              },
            })}
          />
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
        </div>

        {/* Campo de ciudad */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ciudad">
            Ciudad
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ingresa tu ciudad"
            {...register("ciudad", {
              required: {
                value: true,
                message: "*Campo requerido",
              },
              minLength: {
                value: 4,
                message: "Debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.ciudad && <span className="text-red-500">{errors.ciudad.message}</span>}
        </div>

        {/* Campo de C5 */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">¿Perteneces a C5?</label>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name="c5"
              value="Si"
              {...register("c5", {
                required: {
                  value: true,
                  message: "*Campo requerido",
                },
              })}
            />
            <label className="text-gray-700">Sí</label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="radio"
              name="c5"
              value="No"
              {...register("c5", {
                required: {
                  value: true,
                  message: "*Campo requerido",
                },
              })}
            />
            <label className="text-gray-700">No</label>
          </div>
          {errors.c5 && <span className="text-red-500">{errors.c5.message}</span>}
        </div>

        {/* Botón de envío */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#2cbfb1] hover:bg-[#24a99e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registro;

