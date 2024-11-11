import { NextResponse } from "next/server";
import {conn} from "@/libs/mariadb";

export const GET = async() => {
 try {
    const resp = await conn.query("SELECT * FROM usuarios")
    return NextResponse.json(resp)
 } catch (error) {
    return NextResponse.json(
        {message: error.message}, 
        {status: 500})
 }
}

