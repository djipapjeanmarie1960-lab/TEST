#!/bin/bash
echo "🚀 Installation du projet MEDBRIDGE avec Firebase..."

# Aller dans le dossier frontend
cd frontend || { echo "❌ Dossier frontend introuvable"; exit 1; }

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Installer Firebase
echo "🔥 Installation de Firebase..."
npm install firebase

# Lancer le projet en local
echo "🌍 Lancement du serveur de dev (http://localhost:5173/)..."
npm run dev
