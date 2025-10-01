import { useState } from "react";
import { Menu, Calendar, MessageCircle, User } from "lucide-react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 transition-transform transform bg-white shadow-lg lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-center font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          MedBridge
        </div>
        <nav className="mt-6">
          <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50">
            <Calendar className="w-5 h-5 mr-2" /> Planificateur
          </a>
          <a href="/chat" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50">
            <MessageCircle className="w-5 h-5 mr-2" /> Messagerie
          </a>
          <a href="/profil" className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50">
            <User className="w-5 h-5 mr-2" /> Profil
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-700">Tableau de bord</h1>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Se déconnecter
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
