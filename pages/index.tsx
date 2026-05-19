import React from "react";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://sfo3.media.global.s大头/www.global.com/inbound/generated-image_14---3c230739-5d80-4549-8d4b-9d14c5dfa0fe.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.5) saturate(1.2)",
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(20,20,30,0.5) 50%, rgba(0,0,0,0.8) 100%)",
        zIndex: 1,
      }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "2rem" }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          fontWeight: 900,
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          margin: "0 0 1rem 0",
          textShadow: "0 0 10px rgba(255, 200, 50, 0.8), 0 0 30px rgba(255, 160, 0, 0.6), 0 0 60px rgba(255, 120, 0, 0.4), 4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          WebkitTextStroke: "2px #ff8800",
          paintOrder: "stroke fill",
          animation: "float 3s ease-in-out infinite",
        }}>
          Construction Site<br />
          <span style={{
            color: "#ffcc00",
            textShadow: "0 0 15px rgba(255, 204, 0, 1), 0 0 40px rgba(255, 160, 0, 0.8), 0 0 80px rgba(255, 120, 0, 0.6), 6px 6px 0 #1a1a2e, -3px -3px 0 #1a1a2e",
          }}>
            Progress Reconstructor
          </span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.4rem)",
          color: "#e0e0e0",
          marginBottom: "2rem",
          textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
          letterSpacing: "0.1em",
          fontWeight: 300,
        }}>
          Building the Future, One Progress Update at a Time
        </p>

        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#services" style={{
            padding: "1rem 2.5rem",
            background: "linear-gradient(135deg, #ff8800, #ff5500)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(255,136,0,0.5), 0 0 40px rgba(255,85,0,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "2px solid rgba(255,200,100,0.5)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}>
            View Services
          </a>
          <a href="#contact" style={{
            padding: "1rem 2.5rem",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "2px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}>
            Contact Us
          </a>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "150px",
        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } } a:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 30px rgba(255,136,0,0.7), 0 0 60px rgba(255,85,0,0.5); }`}</style>
    </div>
  );
}
