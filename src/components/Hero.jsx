import React from "react";
import CTA from "./CTA";

const Hero = () => {
  const styles = {
    root: {
      minHeight: "100vh",
      padding: "80px 70px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      background: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                   url('/images/bp.jpg') center/cover no-repeat`,
      fontFamily: "'Poppins', sans-serif",
      color: "rgba(255,255,255,0.95)",
    },
    container: { width: "100%", maxWidth: "1100px", margin: "0 auto" },
    pill: {
      display: "block",
      background: "linear-gradient(90deg, #39e7e7, #86f7e7)",
      color: "#012",
      padding: "18px 28px",
      borderRadius: "12px",
      fontWeight: "700",
      fontSize: "28px",
      textAlign: "center",
      margin: "0 auto",
      transform: "translateY(-18px)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
      justifyContent: "center",
      maxWidth: "800px",
    },
    card: {
      background:
        "linear-gradient(180deg, rgba(2,34,36,0.45), rgba(3,28,30,0.5))",
      borderRadius: "16px",
      padding: "36px",
      marginTop: "-10px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
      border: "1px solid rgba(40,230,234,0.25)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      alignItems: "start",
    },
    bullet: {
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
      marginBottom: "22px",
      lineHeight: "1.45",
    },
    icon: {
      minWidth: "34px",
      height: "34px",
      background: "linear-gradient(90deg,#21f0d8,#0bd0d3)",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      color: "#012",
      flexShrink: 0,
      fontWeight: "700",
      boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    },
    text: {
      margin: 0,
      fontWeight: 500,
      fontSize: "16px",
      color: "rgba(255,255,255,0.95)",
    },
    ctaArea: {
      marginTop: "18px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    },
    liveLabel: {
      display: "inline-flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      color: "#ff9090",
      fontWeight: 600,
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.6px",
      animation: "soft-bounce 2s infinite",
    },
    dot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#ff3b3b",
      boxShadow: "0 0 8px #ff3b3b",
      display: "inline-block",
    },
    cta: {
      display: "inline-block",
      background: "linear-gradient(180deg,#ff3b3b,#d91c1c)",
      color: "white",
      padding: "20px 32px",
      fontWeight: 700,
      fontSize: "18px",
      borderRadius: "48px",
      boxShadow: "0 18px 40px rgba(217,28,28,0.35), 0 8px 18px rgba(0,0,0,0.6)",
      border: "3px solid rgba(255,255,255,0.08)",
      textDecoration: "none",
      animation: "soft-bounce 2s infinite",
    },
    note: {
      fontSize: "14px",
      color: "#bffefe",
      textAlign: "center",
    },
    hurry: { color: "#ff6464", fontWeight: "700" },
    webinarWrapper: {
      marginTop: "80px",
      width: "100%",
      maxWidth: "1200px",
      background: "rgba(0,0,0,0.35)",
      borderRadius: "20px",
      padding: "30px 25px",
      boxShadow: "0 0 40px rgba(58, 231, 231, 0.2)",
      border: "1px solid rgba(60,255,255,0.15)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "30px",
      position: "relative",
      overflow: "hidden",
    },
    leftSide: { flex: "1 1 320px", textAlign: "center" },

    speakerImg: {
      width: "160%",
      borderRadius: "40%",
      objectFit: "cover",
    },
    speakerName: {
      border: "2px",
      fontSize: "22px",
      fontWeight: "700",
      color: "#3ae7e7",
      marginTop: "16px",
    },
    speakerRole: { fontSize: "15px", color: "#5ff3f3", fontWeight: "500" },
    speakerBio: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.85)",
      maxWidth: "380px",
      margin: "10px auto 0",
    },
    rightSide: { flex: "1 1 500px", textAlign: "center" },
    webinarTitle: {
      fontSize: "24px",
      fontWeight: "700",
      borderBottom: "2px solid #3ae7e7",
      display: "inline-block",
      paddingBottom: "6px",
      marginBottom: "25px",
    },
    detailsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      marginBottom: "25px",
    },
    detailBox: {
      background: "rgba(0,0,0,0.6)",
      borderRadius: "12px",
      padding: "14px",
      border: "1px solid rgba(60,255,255,0.15)",
    },
    detailTitle: { fontSize: "14px", color: "#bffefe", marginBottom: "4px" },
    detailValue: { fontSize: "16px", fontWeight: "600", color: "white" },
    liveDot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#ff3b3b",
      boxShadow: "0 0 10px #ff3b3b",
      marginRight: "8px",
    },
    liveText: {
      display: "inline-flex",
      alignItems: "center",
      color: "#ff6464",
      fontWeight: "600",
      textTransform: "uppercase",
      fontSize: "14px",
      animation: "soft-bounce 2s infinite",
    },
    ctaWebinar: {
      display: "inline-block",
      background: "linear-gradient(180deg,#ff3b3b,#c71212)",
      borderRadius: "50px",
      padding: "16px 32px",
      fontWeight: "700",
      color: "white",
      fontSize: "16px",
      textDecoration: "none",
      boxShadow: "0 10px 25px rgba(255,0,0,0.25)",
      marginTop: "15px",
      animation: "soft-bounce 2s infinite",
    },
  };

  return (
    <>
      <style>
        {`
        @media (max-width: 1024px) {
          section {
            padding: 60px 40px !important;
          }
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding: 50px 25px !important;
          }
          .pill {
            font-size: 22px !important;
            padding: 14px 20px !important;
          }
          .cta {
            font-size: 16px !important;
            padding: 16px 24px !important;
          }
          .webinarWrapper {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .pill {
            font-size: 18px !important;
            padding: 12px 16px !important;
          }
          .cta {
            width: 100% !important;
            font-size: 14px !important;
            padding: 12px 16px !important;
          }
          .grid {
            grid-template-columns: 1fr !important;
          }
          .webinarWrapper {
            padding: 20px !important;
          }
        }
        `}
      </style>

      <section style={styles.root}>
        <div style={styles.container}>
          <div className="pill" style={styles.pill}>
            Why Most Business Owners Never Reach Time & Money Freedom
          </div>

          <div style={styles.card}>
            <div className="grid" style={styles.grid}>
              <div>
                <div style={styles.bullet}>
                  <div style={styles.icon}>➜</div>
                  <p style={styles.text}>
                    <strong>69%</strong> of small business owners report feeling
                    “trapped” in their business with little time freedom.
                  </p>
                </div>
                <div style={styles.bullet}>
                  <div style={styles.icon}>➜</div>
                  <p style={styles.text}>
                    <strong>65%</strong> of small businesses feel stuck—not
                    because of lack of sales, but because of broken systems and
                    poor execution.
                  </p>
                </div>
              </div>
              <div>
                <div style={styles.bullet}>
                  <div style={styles.icon}>➜</div>
                  <p style={styles.text}>
                    <strong>73%</strong> of business owners say their biggest
                    struggle is finding and keeping the right people.
                  </p>
                </div>
                <div style={styles.bullet}>
                  <div style={styles.icon}>➜</div>
                  <p style={styles.text}>
                    You’re investing time and money into systems like CRM/ERP,
                    but if the team isn’t aligned, adoption fails.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CTA />
        </div>

        <div className="webinarWrapper" style={styles.webinarWrapper}>
          <div style={styles.leftSide}>
            <div style={styles.speakerCircle}>
              <img src="/images/face.png" alt="Speaker" className="cover" />
            </div>
            <h3 className="border-2 border-cyan-400 rounded-3xl">
              Sushil Arora
            </h3>
            <p style={styles.speakerRole}>
              Team Building Expert & Business Coach
            </p>
            <p style={styles.speakerBio}>
              Founder: IIHED – Indian Institute of Human Excellence &
              Development | Featured on Josh Talks
            </p>
          </div>

          <div style={styles.rightSide}>
            <h2 style={styles.webinarTitle}>WEBINAR DETAILS</h2>
            <div style={styles.detailsGrid}>
              <div style={styles.detailBox}>
                <p style={styles.detailTitle}>Date :</p>
                <p style={styles.detailValue}>Nov 16, 2025</p>
              </div>
              <div style={styles.detailBox}>
                <p style={styles.detailTitle}>Time :</p>
                <p style={styles.detailValue}>11:00 AM</p>
              </div>
              <div style={styles.detailBox}>
                <p style={styles.detailTitle}>Live :</p>
                <p style={styles.detailValue}>On Zoom</p>
              </div>
              <div style={styles.detailBox}>
                <p style={styles.detailTitle}>Language :</p>
                <p style={styles.detailValue}>Hindi | Eng</p>
              </div>
            </div>

            <CTA />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
