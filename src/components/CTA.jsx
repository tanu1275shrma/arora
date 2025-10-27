import React from "react";

const CTA = () => {
  // 💰 Button Click Handler
  const handlePaymentClick = () => {
    window.open("https://pages.razorpay.com/BGC2", "_blank");
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          /* 🔴 Red Dot Pulse Animation */
          @keyframes pulseDot {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
          }

          /* ❤️ Button Glow + Bounce + Vibration */
          @keyframes buttonGlowBounce {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
            }
            25% {
              transform: scale(1.04) translateY(-2px);
              box-shadow: 0 0 50px rgba(255, 0, 0, 0.45);
            }
            50% {
              transform: scale(0.98) translateY(1px);
              box-shadow: 0 0 35px rgba(255, 0, 0, 0.3);
            }
            75% {
              transform: scale(1.03) translateY(-1px);
              box-shadow: 0 0 55px rgba(255, 0, 0, 0.55);
            }
          }

          /* Hover Boost */
          .cta-button:hover {
            transform: scale(1.06);
            box-shadow: 0 0 80px rgba(255, 0, 0, 0.7);
          }

          /* 📱 Responsive Adjustments */
          @media (max-width: 768px) {
            .cta-button {
              font-size: 0.95rem !important;
              padding: 14px 22px !important;
            }
            .cta-note {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* 🔴 Header */}
        <div style={styles.header}>
          <span style={styles.dot}></span>
          <span style={styles.liveText}>ATTEND LIVE</span>
        </div>

        {/* 🚀 CTA Button (Payment) */}
        <button
          className="cta-button"
          style={styles.button}
          onClick={handlePaymentClick}
        >
          Discover How to Build a Smooth Business That Runs Without You
        </button>

        {/* 💬 Note */}
        <p className="cta-note" style={styles.note}>
          Note: We’re Always Overbooked. Take Action Before It’s Too Late!
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: " 0",
    background: "transparent",
  },
  container: {
    textAlign: "center",
    background: "rgba(0, 10, 20, 0.55)",
    borderRadius: "18px",
    padding: "10px 10px",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "0 0 15px rgba(255, 0, 0, 0.05)",
    background: "transparent",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "18px",
    fontWeight: 600,
    letterSpacing: "1px",
    color: "#ff4d4d",
    fontSize: "1rem",
  },
  dot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#ff3333",
    borderRadius: "50%",
    marginRight: "6px",
    animation: "pulseDot 1.2s infinite ease-in-out",
    boxShadow: "0 0 8px rgba(255, 0, 0, 0.6)",
  },
  liveText: {
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#ff3333",
    border: "none",
    borderRadius: "80px",
    color: "white",
    padding: "18px 50px",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    animation: "buttonGlowBounce 2.8s infinite ease-in-out",
    transition: "all 0.3s ease",
  },
  note: {
    marginTop: "15px",
    fontSize: "0.95rem",
    color: "#fff",
  },
};

export default CTA;
