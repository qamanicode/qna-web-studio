import React from "react";

export default function Home() {
  const services = [
    { name: "التصميم الرقمي", icon: "🎨" },
    { name: "تحريك الشعارات", icon: "🎬" },
    { name: "واجهات الذكاء", icon: "🤖" }
  ];

  return (
    <div style={{
      minHeight: "100vh", backgroundColor: "#050505", color: "#fff",
      fontFamily: "system-ui", display: "flex", overflowX: "hidden",
      backgroundImage: "radial-gradient(circle at 80% 20%, #1a1a2e, #050505)"
    }}>
      
      {/* 1. شريط الأدوات الجانبي (The Tool-Set) */}
      <div style={{
        width: "60px", borderRight: "1px solid #222", display: "flex", 
        flexDirection: "column", gap: "20px", alignItems: "center", paddingTop: "40px",
        backgroundColor: "rgba(20, 20, 20, 0.5)"
      }}>
        {["✒️", "🔳", "🔍", "📐", "⚙️"].map((tool, i) => (
          <div key={i} style={{fontSize: "20px", cursor: "pointer", opacity: 0.6}}>{tool}</div>
        ))}
      </div>

      <div style={{flex: 1, padding: "40px", position: "relative"}}>
        
        {/* 2. الهوية السينمائية (Motion Identity) */}
        <div style={{textAlign: "center", marginBottom: "60px"}}>
          <span style={{color: "#FA0F00", fontWeight: "bold", fontSize: "12px", letterSpacing: "3px"}}>QNA CREATIVE CLOUD</span>
          <h1 style={{fontSize: "4rem", fontWeight: "900", margin: "10px 0", background: "linear-gradient(to bottom, #fff, #666)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>تخيل. ابدع. نفذ.</h1>
        </div>

        {/* 3. شريط الذكاء الاصطناعي (The AI Prompt UI) */}
        <div style={{
          maxWidth: "600px", margin: "0 auto 80px", position: "relative",
          background: "linear-gradient(90deg, #0265DC, #8b5cf6)", padding: "1px", borderRadius: "15px"
        }}>
          <input 
            type="text" 
            placeholder="صف ما تريد تصميمه هنا..." 
            style={{width: "100%", padding: "18px", borderRadius: "14px", border: "none", backgroundColor: "#0a0a0a", color: "white", outline: "none"}}
          />
          <button style={{position: "absolute", right: "10px", top: "8px", backgroundColor: "#0265DC", color: "white", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "bold", cursor: "pointer"}}>توليد ✨</button>
        </div>

        {/* 4. المعرض العائم (The Floating Gallery) */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto"}}>
          {services.map((s, i) => (
            <div key={i} style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)", padding: "30px", borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center", transition: "0.3s", cursor: "pointer"
            }}>
              <div style={{fontSize: "40px", marginBottom: "15px"}}>{s.icon}</div>
              <h3 style={{fontSize: "1.1rem", fontWeight: "600"}}>{s.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
