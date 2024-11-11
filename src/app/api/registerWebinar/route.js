import { conn } from "@/libs/mariadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    // Lee los datos de la solicitud
    const data = await req.json();
    console.log(data);
    const { nombre, apellido, correo, phone, ciudad, c5 } = data;
    
    // Insertar en la base de datos
    const result = await conn.query("INSERT INTO registradosWebinar SET ?", {
      nombre,
      apellido,
      correo,
      phone,
      ciudad,
      c5,
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
