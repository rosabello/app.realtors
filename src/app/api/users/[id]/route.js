import { NextResponse } from "next/server";
import { conn } from "@/libs/mariadb";

export const PUT = async (req, { params }) => {
  try {
    console.log(params);
    const resp = await conn.query(
      `UPDATE usuarios SET status = "bloqueado" WHERE id = ${params.id}`
    );
    console.log(resp);
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
