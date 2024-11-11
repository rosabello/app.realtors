import { conn } from "@/libs/mariadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Lee los datos de la solicitud
    const data = await req.json();
    console.log(data);
    const { nombre, apellido, correo, asunto, mensaje } = data;

    // Insertar en la base de datos
    const result = await conn.query("INSERT INTO contacto SET ?", {
      nombre,
      apellido,
      correo,
      asunto,
      mensaje,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
