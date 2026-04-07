import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  // تتبع حركة الفأرة لخلق تأثير الخلق الكوني
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    setTimeout(() => setChatVisible(true), 3000);
  }, []);

  return (
    <div onMouseMove={handleMouseMove} style={{
      minHeight: '100vh', backgroundColor: '#020205', color: '#fff', 
      fontFamily: 'system-ui', overflow: 'hidden', position: 'relative',
      backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(2, 101, 220, 0.15) 0%, transparent 40%)`
    }}>
      
      {/* بصمة الملهم: جزيئات ضوئية تتبعك */}
      <div style={{
        position: 'absolute', left: mousePos.x, top: mousePos.y,
        width: '10px', height: '10px', backgroundColor: '#0265DC',
        borderRadius: '50%', filter: 'blur(8px)', pointerEvents: 'none', transition: '0.1s'
      }}></div>

      <div style={{ flex: 1, padding: '40px', position: 'relative', zIndex: 2 }}>
        
        {/* الهوية الملكية */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-block', border: '1px solid #FA0F00', padding: '5px 15px', borderRadius: '4px', color: '#FA0F00', fontSize: '10px', letterSpacing: '5px', marginBottom: '20px' }}>
            BASTAN CREATIVE UNIVERSE
          </div>
          <h1 style={{ fontSize: '5rem', fontWeight: '950', margin: '0', background: 'linear-gradient(to bottom, #fff 30%, #444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-3px' }}>
            خلقنا لِنُبدع.
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '10px', fontWeight: '300' }}>رؤية الخالق باستان | بدعم من ذكاء قماني</p>
        </div>

        {/* محرك الخلق الذكي */}
        <div style={{ maxWidth: '700px', margin: '0 auto 100px', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-2px', background: 'linear-gradient(90deg, #FA0F00, #0265DC, #8b5cf6)', borderRadius: '20px', blur: '10px', opacity: 0.3 }}></div>
          <div style={{ position: 'relative', backgroundColor: '#080808', borderRadius: '18px', padding: '5px', display: 'flex' }}>
            <input 
              type='text' placeholder='ما هو العالم الذي تريد خلقه اليوم؟' 
              style={{ flex: 1, padding: '20px', background: 'none', border: 'none', color: '#fff', outline: 'none', fontSize: '1.1rem' }}
            />
            <button onClick={() => {setIsGenerating(true); setTimeout(()=>setIsGenerating(false), 2000)}} style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '0 30px', borderRadius: '12px', fontWeight: '900', cursor: 'pointer', margin: '5px' }}>
              {isGenerating ? 'جاري الخلق...' : 'إبدأ ✨'}
            </button>
          </div>
        </div>

        {/* عرض القوة الثلاثية */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { t: 'هوية بصرية', d: 'بصمة لا تُنسى في ذاكرة العالم', i: '💎' },
            { t: 'مواقع ذكية', d: 'برمجيات تتنفس وتستجيب للمستقبل', i: '⚡' },
            { t: 'فن رقمي', d: 'تحويل الخيال إلى واقع ملموس', i: '🎨' }
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.4s' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.i}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>{item.t}</h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>{item.d}</p>
            </div>
          ))}
        </div>

        <footer style={{ textAlign: 'center', marginTop: '100px', borderTop: '1px solid #111', paddingTop: '40px' }}>
          <p style={{ color: '#333', fontSize: '0.8rem', letterSpacing: '2px' }}>
            DESIGNED BY <span style={{ color: '#666' }}>BASTAN</span> | POWERED BY <span style={{ color: '#666' }}>QAMANI AI</span>
          </p>
        </footer>
      </div>

      {/* البوت قماني - الروح المساعدة */}
      {chatVisible && (
        <div style={{ position: 'fixed', bottom: '30px', left: '30px', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '20px', borderRadius: '25px', maxWidth: '300px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', animation: 'slideRight 0.8s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{ width: '10px', height: '10px', backgroundColor: '#00ff00', borderRadius: '50%' }}></div>
            <span style={{ fontWeight: '900', fontSize: '0.8rem' }}>قماني متصل الآن</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0 }}>مرحباً أيها المبدع. الخالق باستان ينتظر أوامرك لنبهر العالم سوياً.</p>
        </div>
      )}

      <style>{`
        @keyframes slideRight { from { transform: translateX(-100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        body { cursor: crosshair; }
      `}</style>
    </div>
  );
}
