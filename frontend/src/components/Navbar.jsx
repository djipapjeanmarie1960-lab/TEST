// src/components/Navbar.jsx
import { auth, loginWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🚀 Planificateur</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:underline">Accueil</a>
        <a href="/planificateur" className="hover:underline">Planificateur</a>
        <a href="/chat" className="hover:underline">Messagerie</a>
        {user ? (
          <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <button onClick={loginWithGoogle} className="bg-white text-blue-600 px-3 py-1 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
