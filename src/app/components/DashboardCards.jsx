"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const DashboardCards = (props) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-2xl transition duration-300 w-full max-w-xs mx-auto">
      <div className="relative h-52 w-full mb-4 overflow-hidden rounded-lg">
        <Image
          src={props.image}
          alt={props.tittle}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <h4 className="text-xl font-semibold mb-2">{props.tittle}</h4>
      <p className="text-base text-gray-600">{props.description}</p>
      <div className="flex justify-center mt-4">
        {/* Usa solo el componente Link sin <a> */}
        <Link href={`/dashboard/${props.modulo}`} className="px-4 py-2 bg-[#6ccccf] text-white font-semibold rounded-full hover:bg-[#5bb1ba] transition duration-300">
          Ver Módulo
        </Link>
      </div>
    </div>
  );
};

export default DashboardCards;
