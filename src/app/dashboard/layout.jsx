import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function Layout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar user={session.user} />
      
      {/* Main content */}
      <main className="flex-grow ml-16 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}