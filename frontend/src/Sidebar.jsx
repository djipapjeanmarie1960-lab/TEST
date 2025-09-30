import React from 'react'

export default function Sidebar({ activeTab, setActiveTab, user }) {
  return (
    <aside className="sidebar">
      <h2 style={{color:'#38bdf8'}}>MedBridge</h2>
      {user ? (
        <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
          {user.photoURL && <img src={user.photoURL} alt="avatar" className="avatar" />}
          <div style={{fontSize:14}}>{user.displayName || user.email}</div>
        </div>
      ) : null}
      <nav>
        <ul style={{listStyle:'none', padding:0}}>
          <li><button className="ghost" style={{width:'100%', textAlign:'left'}} onClick={()=>setActiveTab('dashboard')}>📊 Dashboard</button></li>
          <li><button className="ghost" style={{width:'100%', textAlign:'left'}} onClick={()=>setActiveTab('plan')}>🗓 Planificateur</button></li>
          <li><button className="ghost" style={{width:'100%', textAlign:'left'}} onClick={()=>setActiveTab('qcm')}>❓ QCM Examens</button></li>
          <li><button className="ghost" style={{width:'100%', textAlign:'left'}} onClick={()=>setActiveTab('forum')}>💬 Forum</button></li>
          <li><button className="ghost" style={{width:'100%', textAlign:'left'}} onClick={()=>setActiveTab('mentors')}>👩‍⚕️ Mentorat</button></li>
          <li style={{marginTop:12}}><button className="btn" onClick={()=>setActiveTab('auth')}>🔑 Mon Compte</button></li>
        </ul>
      </nav>
    </aside>
  )
}