import React, { useState } from 'react';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const templates = [
    { title: 'متجر مستقبلي', category: 'تجارة إلكترونية', color: '#0265DC', icon: '🛍️' },
    { title: 'لوحة تحكم ذكية', category: 'إدارة بيانات', color: '#8b5cf6', icon: '📊' },
    { title: 'معرض فنان', category: 'بورتفوليو', color: '#ec4899', icon: '🖼️' },
    { title: 'مجلة تقنية', category: 'أخبار وبرمجة', color: '#10b981', icon: '📰' }
  ];

  return (
    <div style={{ minHeight: '200vh', backgroundColor: '#020205', color: '#fff', fontFamily: 'system-ui', overflowX: 'hidden' }}>
      
      {/* القسم الأول: الواجهة الملكية (التي صممناها سابقاً) */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', position: 'relative' }}>
        <div style={{ border: '1px solid #FA0F00', padding: '5px 15px', borderRadius: '4px', color: '#FA0F00', fontSize: '10px', letterSpacing: '5px', marginBottom: '20px' }}>
          BASTAN CREATIVE UNIVERSE
        </div>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '950', background: 'linear-gradient(to bottom, #fff, #444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>خلقنا لِنُبدع.</h1>
        <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '10px' }}>عالم القوالب المستجيبة | رؤية باستان</p>
        <div style={{ marginTop: '40px', cursor: 'pointer', animate: 'bounce 2s infinite' }} onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
          <span style={{ fontSize: '0.9rem', color: '#444', letterSpacing: '2px' }}>استكشف القوالب ▼</span>
        </div>
      </section>

      {/* القسم الثاني: معرض القوالب الذي ينبض بالحياة */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>مختبر القوالب المستجيبة</h2>
          <p style={{ color: '#666' }}>اختر نقطة البداية لمشروعك القادم</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {templates.map((tpl, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#0a0a0a', borderRadius: '25px', padding: '40px 30px',
                border: '1px solid #1a1a1a', transition: '0.5s all cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: hoveredIndex === idx ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
                boxShadow: hoveredIndex === idx ? `0 20px 40px -10px ${tpl.color}44` : 'none',
                position: 'relative', overflow: 'hidden', cursor: 'pointer'
              }}
            >
              {/* ضوء خلفي ملون يظهر عند التمرير */}
              <div style={{
                position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%',
                background: `radial-gradient(circle, ${tpl.color}22 0%, transparent 70%)`,
                opacity: hoveredIndex === idx ? 1 : 0, transition: '0.5s'
              }}></div>

              <div style={{ fontSize: '50px', marginBottom: '20px', position: 'relative' }}>{tpl.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', position: 'relative', color: hoveredIndex === idx ? tpl.color : '#fff' }}>{tpl.title}</h3>
              <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '25px', position: 'relative' }}>{tpl.category}</p>
              
              <button style={{
                padding: '10px 20px', borderRadius: '10px', border: 'none',
                backgroundColor: hoveredIndex === idx ? tpl.color : '#1a1a1a',
                color: '#fff', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
              }}>
                معاينة القالب ←
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #111', color: '#333' }}>
        BASTAN | QAMANI © 2026 - نحو العالمية
      </footer>
    </div>
  );
}
