import React from "react";

export default function Home() {
  const adobeStyle = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#141414", // لون Adobe المظلم الشهير
      color: "#F5F5F5",
      fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center",
      backgroundImage: "radial-gradient(circle at 50% -20%, #2c2c2c, #141414)"
    },
    brandBadge: {
      backgroundColor: "#FA0F00", // أحمر Adobe الصريح
      color: "white",
      padding: "4px 12px",
      fontSize: "0.7rem",
      fontWeight: "900",
      borderRadius: "4px",
      marginBottom: "20px",
      textTransform: "uppercase",
      letterSpacing: "2px"
    },
    title: {
      fontSize: "4.5rem",
      fontWeight: "800",
      margin: "0 0 10px 0",
      letterSpacing: "-2px",
      lineHeight: "1"
    },
    subtitle: {
      fontSize: "1.5rem",
      fontWeight: "300",
      color: "#999",
      marginBottom: "40px",
      maxWidth: "700px"
    },
    buttonPrimary: {
      backgroundColor: "#0265DC", // أزرق Adobe الاحترافي
      color: "white",
      border: "none",
      padding: "12px 30px",
      borderRadius: "25px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
      marginRight: "15px"
    },
    buttonSecondary: {
      backgroundColor: "transparent",
      color: "white",
      border: "1px solid #505050",
      padding: "12px 30px",
      borderRadius: "25px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer"
    }
  };

  return (
    <div style={adobeStyle.container}>
      <div style={adobeStyle.brandBadge}>QNA Creative Cloud</div>
      <h1 style={adobeStyle.title}>صمم بلا حدود.</h1>
      <p style={adobeStyle.subtitle}>
        مزيج بين الإبداع البشري وقوة التصميم الرقمي. ابدأ في تحويل نصوصك إلى لوحات فنية مع QNA Studio.
      </p>
      <div>
        <button style={adobeStyle.buttonPrimary}>جرب مجاناً</button>
        <button style={adobeStyle.buttonSecondary}>عرض الأعمال</button>
      </div>
      <footer style={{marginTop: "80px", color: "#505050", fontSize: "0.8rem", letterSpacing: "1px"}}>
        ADOBE INSPIRED | QNA WEB STUDIO © 2026
      </footer>
    </div>
  );
}
