import React from "react";

export default function Home() {
  const styles = {
    container: { minHeight: "100vh", backgroundColor: "#0f172a", color: "white", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" },
    title: { fontSize: "3rem", fontWeight: "bold", background: "linear-gradient(to right, #60a5fa, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" },
    desc: { fontSize: "1.2rem", color: "#94a3b8", maxWidth: "600px", lineHeight: "1.6" },
    btn: { marginTop: "30px", padding: "12px 30px", fontSize: "1rem", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "50px", cursor: "pointer", fontWeight: "bold" }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QNA Web Studio</h1>
      <p style={styles.desc}>
        نحن نبني المستقبل الرقمي. استوديو متخصص في تطوير المواقع العصرية وتجربة المستخدم الفريدة.
      </p>
      <button style={styles.btn}>ابدأ رحلتك معنا</button>
      <footer style={{position: "absolute", bottom: "20px", color: "#475569"}}>© 2026 جميع الحقوق محفوظة لـ QNA</footer>
    </div>
  );
}
