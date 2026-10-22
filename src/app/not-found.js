import Link from 'next/link'

export const metadata = {
  title: '404 - পেজ পাওয়া যায়নি',
}

export default function NotFound() {
  return (
    <main className="nf-wrap">
      <style>{`
        .nf-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
          font-family: inherit;
        }
        .nf-card {
          width: 100%;
          max-width: 460px;
          background: #ffffff;
          border: 1px solid #dcfce7;
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(22, 163, 74, 0.08);
        }
        .nf-icon {
          width: 110px;
          height: 110px;
          margin: 0 auto 8px;
        }
        .nf-badge {
          display: inline-block;
          background: #dcfce7;
          color: #15803d;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .nf-code {
          font-size: 72px;
          line-height: 1;
          font-weight: 800;
          color: #16a34a;
          margin: 0;
        }
        .nf-title {
          font-size: 22px;
          font-weight: 700;
          color: #14532d;
          margin: 12px 0 8px;
        }
        .nf-text {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
          margin: 0 0 24px;
        }
        .nf-actions {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nf-btn {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .nf-btn:hover { transform: translateY(-1px); }
        @media (max-width: 480px) {
          .nf-card { padding: 28px 18px; border-radius: 16px; }
          .nf-icon { width: 88px; height: 88px; }
          .nf-code { font-size: 56px; }
          .nf-title { font-size: 18px; }
          .nf-actions { flex-direction: column; }
          .nf-btn { width: 100%; box-sizing: border-box; text-align: center; }
        }
        .nf-primary { background: #16a34a; color: #ffffff; }
        .nf-primary:hover { background: #15803d; }
        .nf-ghost {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }
        .nf-ghost:hover { background: #dcfce7; }
      `}</style>

      <div className="nf-card">
        <svg className="nf-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <circle cx="60" cy="60" r="56" fill="#f0fdf4" />
          <circle cx="46" cy="42" r="12" fill="#ef4444" />
          <circle cx="68" cy="38" r="11" fill="#22c55e" />
          <circle cx="82" cy="48" r="9" fill="#f59e0b" />
          <path d="M26 56h68l-8 36a8 8 0 0 1-8 6H42a8 8 0 0 1-8-6l-8-36Z" fill="#16a34a" />
          <path d="M40 66v22M52 66v22M64 66v22M76 66v22M88 66v16" stroke="#bbf7d0" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <span className="nf-badge">পেজ পাওয়া যায়নি</span>
        <h1 className="nf-code">৪০৪</h1>
        <h2 className="nf-title">দুঃখিত, এই পেজটি খুঁজে পাওয়া যায়নি</h2>
        <p className="nf-text">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, মুছে ফেলা হয়েছে
          অথবা লিংকটি ভুল হতে পারে। আজকের বাজারদর দেখতে হোম পেজে ফিরে যান।
        </p>

        <div className="nf-actions">
          <Link href="/" className="nf-btn nf-primary">
            হোমে ফিরে যান
          </Link>
          <Link href="/profile" className="nf-btn nf-ghost">
            প্রোফাইল
          </Link>
        </div>
      </div>
    </main>
  )
}