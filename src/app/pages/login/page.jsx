"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const resp = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });
    console.log(router)
    router.push("/dashboard");
    // if (resp.error) {
    //   setError(resp.error);
    // } else {
    //   router.push("http://localhost:3001/dashboard");
    //   router.refresh();
    // }
  });

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center font-playfair"
      style={{ backgroundImage: `url('/image/img-bg-Mercedes.jpg')` }}
    >
      {/* Capa para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido principal del formulario */}
      <div className="relative z-10 bg-gradient-to-b from-[#3f2d20] to-[#b38c78] bg-opacity-90 rounded-lg p-8 md:p-12 w-full max-w-md md:max-w-lg flex flex-col items-center shadow-lg">
        {/* Título y logo */}
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2cbfb1]">
            Iniciar Sesion
          </h2>
          <div className="text-right">
            <Image
              src="/image/logo-blanco-Ney.png"
              alt="Neymar Carrero Logo"
              width={150}
              height={50}
            />
          </div>
        </div>

        {/* Campos del formulario */}
        <form onSubmit={onSubmit} className="w-full space-y-4">
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white hover:border-white transition duration-300"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 border-b border-[#2cbfb1] bg-transparent text-white placeholder-gray-300 outline-none focus:border-white hover:border-white transition duration-300"
            {...register("password", { required: true })}
          />

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className="mt-8 px-8 py-3 bg-transparent border-2 border-[#2cbfb1] text-[#2cbfb1] font-semibold rounded-full hover:bg-[#2cbfb1] hover:text-[#8d6e58] hover:shadow-lg transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;