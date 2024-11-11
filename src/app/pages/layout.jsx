import Navbar from "../components/Navbar";



export default async function Layout({ children }) {

  return (
    <div className="">
      {/* Sidebar on the left */}
      <Navbar />
      
      {/* Main content */}
      <main className="">
        {children}
      </main>
    </div>
  );
}