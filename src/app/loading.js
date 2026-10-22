export default function Loading() {
  const cards = Array.from({ length: 12 })

  return (
    <main className="ld-wrap" aria-busy="true" aria-live="polite">
      <style>{`
        .ld-wrap {
          min-height: 100vh;
          background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
          padding: 16px;
        }
        .ld-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .ld-shimmer {
          position: relative;
          overflow: hidden;
          background: #dcfce7;
          border-radius: 8px;
        }
        .ld-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.7),
            transparent
          );
          animation: ld-move 1.4s infinite;
        }
        @keyframes ld-move {
          100% { transform: translateX(100%); }
        }

        .ld-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0 18px;
        }
        .ld-logo { display: flex; align-items: center; gap: 10px; }
        .ld-logo-box { width: 36px; height: 36px; border-radius: 10px; background: #16a34a; }
        .ld-avatar { width: 32px; height: 32px; border-radius: 50%; }

        .ld-hero {
          background: #ffffff;
          border: 1px solid #dcfce7;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }
        .ld-hero-text { flex: 1; display: grid; gap: 12px; }
        .ld-hero-img { width: 120px; height: 120px; border-radius: 16px; flex-shrink: 0; }

        .ld-section-title { width: 140px; height: 16px; margin: 0 0 12px; }

        .ld-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }
        @media (max-width: 559px) {
          .ld-wrap { padding: 12px; }
          .ld-hero { padding: 16px; gap: 12px; }
          .ld-hero-img { width: 72px; height: 72px; }
          .ld-center { font-size: 13px; padding-bottom: 16px; }
        }
        @media (min-width: 560px) { .ld-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .ld-grid { grid-template-columns: repeat(3, 1fr); } }

        .ld-card {
          background: #ffffff;
          border: 1px solid #dcfce7;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ld-card-top { display: flex; align-items: center; gap: 10px; }
        .ld-icon { width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0; }
        .ld-lines { flex: 1; display: grid; gap: 6px; }
        .ld-card-bottom { display: flex; justify-content: space-between; align-items: center; }

        .ld-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 8px 0 24px;
          color: #15803d;
          font-size: 14px;
          font-weight: 600;
        }
        .ld-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #bbf7d0;
          border-top-color: #16a34a;
          border-radius: 50%;
          animation: ld-spin 0.8s linear infinite;
        }
        @keyframes ld-spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="ld-container">
        {/* Header */}
        <div className="ld-header">
          <div className="ld-logo">
            <div className="ld-logo-box" />
            <div className="ld-shimmer" style={{ width: 90, height: 14 }} />
          </div>
          <div className="ld-shimmer ld-avatar" />
        </div>

        {/* Hero */}
        <section className="ld-hero">
          <div className="ld-hero-text">
            <div className="ld-shimmer" style={{ width: 110, height: 18, borderRadius: 999 }} />
            <div className="ld-shimmer" style={{ width: '70%', height: 28 }} />
            <div className="ld-shimmer" style={{ width: '90%', height: 12 }} />
            <div className="ld-shimmer" style={{ width: 100, height: 34, borderRadius: 10 }} />
          </div>
          <div className="ld-shimmer ld-hero-img" />
        </section>

        {/* Loading text */}
        <div className="ld-center">
          <span className="ld-spinner" />
          <span>লোড হচ্ছে, একটু অপেক্ষা করুন...</span>
        </div>

        {/* Sections */}
        {[0, 1].map((s) => (
          <section key={s}>
            <div className="ld-shimmer ld-section-title" />
            <div className="ld-grid">
              {cards.slice(0, 6).map((_, i) => (
                <div className="ld-card" key={i}>
                  <div className="ld-card-top">
                    <div className="ld-shimmer ld-icon" />
                    <div className="ld-lines">
                      <div className="ld-shimmer" style={{ width: '60%', height: 12 }} />
                      <div className="ld-shimmer" style={{ width: '40%', height: 10 }} />
                    </div>
                  </div>
                  <div className="ld-card-bottom">
                    <div className="ld-shimmer" style={{ width: 70, height: 16 }} />
                    <div className="ld-shimmer" style={{ width: 44, height: 16, borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}