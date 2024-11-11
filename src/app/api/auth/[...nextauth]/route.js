import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conn } from "@/libs/mariadb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Ingresa tu email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials, req) {
        const userSearch = await conn.query(`
            SELECT * FROM usuarios WHERE correo = "${credentials.email}"
        `);

        const adminSearch = await conn.query(`
            SELECT * FROM user_admin  WHERE email = "${credentials.email}"
          `);

        if (adminSearch[0]) {
          return {
            name: adminSearch[0].first_name,
            email: adminSearch[0].email,
          };
        }

        if (!userSearch[0] || userSearch[0] == [] || userSearch[0].status == "bloqueado")
          throw new Error("No se encontró el usuario.");

        console.log(credentials);
        console.log(userSearch[0]);

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userSearch[0].password
        );

        console.log(matchPassword);

        if (!matchPassword) throw new Error("Contraseña incorrecta.");
        return {
          name: userSearch[0].nombre,
          email: userSearch[0].correo,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/pages/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
