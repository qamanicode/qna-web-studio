'use client';
import React, { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const templates = [
    { title: 'متجر باستان الذكي', cat: 'E-commerce', color: '#00c6ff', icon: '💎' },
    { title: 'منصة قماني للأخبار', cat: 'News Portal', color: '#0072ff', icon: '📰' },
    { title: 'واجهة التحكم الاحترافية', cat: 'Dashboard', color: '#f953c6', icon: '📊' }
  ];

  const styles = {
    container: { minHeight: '180vh', backgroundColor: '#050505', color: '#fff', fontFamily: 'system-ui', overflowX: 'hidden' },
    hero: { height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' },
    badge: { color: '#FA0F00', fontWeight: 'bold', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px' },
    title: { fontSize: '4rem', fontWeight: '900', background: 'linear-gradient(to bottom, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '10px 0' },
    searchBox: { maxWidth: '600px', width: '100%', padding: '1px', background: 'linear-gradient(90deg, #0265DC, #8b5cf6)', borderRadius: '15px', marginTop: '30px' }
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.badge}>BASTAN CREATIVE CLOUD</div>
        <h1 style={styles.title}>تخيل. ابدع. نفذ.</h1>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>بوابة باستان للعوالم المستجيبة</p>
        
        <div style={styles.searchBox}>
          <div style={{ backgroundColor: '#0a0a0a', borderRadius: '14px', display: 'flex', padding: '5px' }}>
            <input type='text' placeholder='ما هو القالب الذي تتخيله؟' style={{ flex: 1, padding: '15px', background: 'none', border: 'none', color: '#fff', outline: 'none' }} />
            <button style={{ backgroundColor: '#0265DC', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>توليد ✨</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', fontWeight: '800' }}>مختبر القوالب المستجيبة</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {templates.map((tpl, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: '#0d0d0d', padding: '40px 30px', borderRadius: '30px',
                border: hovered === i ? '1px solid ' + tpl.color : '1px solid #1a1a1a',
                transform: hovered === i ? 'translateY(-10px)' : 'none',
                transition: '0.4s ease', cursor: 'pointer', textAlign: 'center',
                boxShadow: hovered === i ? '0 20px 40px -10px ' + tpl.color + '44' : 'none'
              }}
            >
              <div style={{ fontSize: '50px', marginBottom: '20px' }}>{tpl.icon}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: hovered === i ? tpl.color : '#fff' }}>{tpl.title}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}>{tpl.cat}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '100px 20px', color: '#333', fontSize: '0.8rem' }}>
        DESIGNED BY BASTAN | POWERED BY QAMANI AI
      </footer>
    </div>
  );
}
