import React, { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig"

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
        alert("Connexion réussie ✅")
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
        alert("Compte créé ✅")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "2rem", border: "1px solid #ccc" }}>
      <h2>{isLogin ? "Connexion" : "Créer un compte"}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle}
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle}
        />
        <button type="submit" style={btnStyle}>
          {isLogin ? "Se connecter" : "S’inscrire"}
        </button>
      </form>
      <p>
        {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)} style={{ ...btnStyle, background: "transparent", color: "blue" }}>
          {isLogin ? "Créer un compte" : "Se connecter"}
        </button>
      </p>
    </div>
  )
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0"
}

const btnStyle = {
  padding: "0.5rem 1rem",
  background: "#1e293b",
  color: "#fff",
  border: "none",
  cursor: "pointer"
}

export default Auth
