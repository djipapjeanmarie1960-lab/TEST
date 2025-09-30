import React, { useState } from "react"

function App() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "220px", background: "#1e293b", color: "#fff", padding: "1rem" }}>
        <h2 style={{ color: "#38bdf8" }}>MedBridge</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><button style={btnStyle} onClick={() => setActiveTab("dashboard")}>📊 Dashboard</button></li>
            <li><button style={btnStyle} onClick={() => setActiveTab("plan")}>🗓 Planificateur</button></li>
            <li><button style={btnStyle} onClick={() => setActiveTab("qcm")}>❓ QCM Examens</button></li>
            <li><button style={btnStyle} onClick={() => setActiveTab("forum")}>💬 Forum</button></li>
            <li><button style={btnStyle} onClick={() => setActiveTab("mentors")}>👩‍⚕️ Mentorat</button></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        {activeTab === "dashboard" && (
          <>
            <h1>Bienvenue sur MedBridge 🚀</h1>
            <p>Relier ton diplôme à ta pratique au Canada.</p>

            <h2>Progression</h2>
            <ul>
              <li>✅ Création du profil</li>
              <li>⚠️ Passer MCCQE1</li>
              <li>⏳ Préparer CaRMS</li>
            </ul>
          </>
        )}
        {activeTab === "auth" && (
  <>
    <h1>🔑 Espace utilisateur</h1>
    <Auth />
  </>
)}

        {activeTab === "plan" && (
          <>
            <h1>🗓 Planificateur</h1>
            <p>Exemple de timeline personnalisée :</p>
            <ol>
              <li>📌 Évaluation des diplômes (EDE)</li>
              <li>📌 Passer le test de langue (IELTS/TEF)</li>
              <li>📌 MCCQE1 → préparation en 6 mois</li>
              <li>📌 NAC OSCE → recommandé avant CaRMS</li>
              <li>📌 CaRMS Application → cycle annuel</li>
            </ol>
          </>
        )}

        {activeTab === "qcm" && (
          <>
            <h1>❓ QCM Examens</h1>
            <p>Tu auras ici une banque de questions pour t’entraîner :</p>
            <ul>
              <li>MCCQE1 : 250+ questions</li>
              <li>NAC : cas cliniques</li>
            </ul>
          </>
        )}

        {activeTab === "forum" && (
          <>
            <h1>💬 Forum communautaire</h1>
            <p>Espace de discussion entre médecins diplômés hors Canada.</p>
            <ul>
              <li>👨‍⚕️ Généralistes en Ontario</li>
              <li>🧑‍⚕️ Spécialistes au Québec</li>
              <li>🌎 Nouveaux arrivants francophones</li>
            </ul>
          </>
        )}

        {activeTab === "mentors" && (
          <>
            <h1>👩‍⚕️ Réseau de mentors</h1>
            <p>Mentors bénévoles disponibles par province :</p>
            <ul>
              <li>Québec → Dr Tremblay</li>
              <li>Ontario → Dr Singh</li>
              <li>Alberta → Dr Ali</li>
            </ul>
          </>
        )}
      </main>
    </div>
  )
}

// petit style pour les boutons de la sidebar
const btnStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  margin: "0.25rem 0",
  background: "transparent",
  border: "none",
  color: "#fff",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "1rem"
}

export default App
