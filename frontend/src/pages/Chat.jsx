// src/pages/Chat.jsx
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      uid: user.uid,
      displayName: user.displayName,
      createdAt: serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div className="p-4 flex flex-col h-screen">
      <h2 className="text-2xl font-bold mb-4">💬 Messagerie</h2>
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-inner">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-2 rounded-lg max-w-xs ${
              msg.uid === user?.uid
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-black"
            }`}
          >
            <span className="block text-sm font-semibold">{msg.displayName}</span>
            {msg.text}
          </div>
        ))}
      </div>

      {user ? (
        <form onSubmit={sendMessage} className="flex mt-4">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrire un message..."
            className="flex-1 border rounded-l-lg p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-r-lg"
          >
            Envoyer
          </button>
        </form>
      ) : (
        <p className="mt-4 text-center text-gray-500">
          Connecte-toi pour discuter.
        </p>
      )}
    </div>
  );
}
