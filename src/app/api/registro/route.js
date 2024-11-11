import { conn } from "@/libs/mariadb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
  try {
    // Lee los datos de la solicitud
    const data = await req.json();
    console.log(data);
    let { nombre, apellido, correo, password } = data;

    password = await bcrypt.hash(password, 10)

    // Insertar en la base de datos
    const result = await conn.query("INSERT INTO usuarios SET ?", {
      nombre,
      apellido,
      correo,
      password,
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
