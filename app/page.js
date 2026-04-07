'use client';
import React, { useState } from 'react';

export default function Home() {
  const [view, setView] = useState('home');
  const [selectedTpl, setSelectedTpl] = useState(null);
  const [hovered, setHovered] = useState(null);

  const templates = [
    { id: 1, title: 'متجر باستان الذكي', cat: 'E-commerce', color: '#00c6ff', icon: '💎', details: 'نظام تجارة متكامل مع سلة تسوق ذكية وواجهة مستخدم فائقة السرعة.' },
    { id: 2, title: 'منصة قماني للأخبار', cat: 'News Portal', color: '#0072ff', icon: '📰', details: 'نظام إدارة محتوى إخباري يدعم الوسائط المتعددة والذكاء الاصطناعي في ترتيب الأخبار.' },
    { id: 3, title: 'واجهة التحكم الاحترافية', cat: 'Dashboard', color: '#f953c6', icon: '📊', details: 'لوحة تحكم شاملة لتحليل البيانات ومراقبة الأداء لحظة بلحظة.' }
  ];

  if (view === 'details') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', padding: '60px 20px', textAlign: 'center', fontFamily: 'system-ui' }}>
        <div style={{ fontSize: '100px', marginBottom: '30px' }}>{selectedTpl.icon}</div>
        <h1 style={{ fontSize: '3rem', color: selectedTpl.color, fontWeight: '900' }}>{selectedTpl.title}</h1>
        <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto', lineHeight: '1.8' }}>{selectedTpl.details}</p>
        <button onClick={() => setView('home')} style={{ marginTop: '40px', padding: '15px 40px', borderRadius: '50px', border: '1px solid #333', backgroundColor: 'transparent', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>← العودة للمختبر</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '180vh', backgroundColor: '#050505', color: '#fff', fontFamily: 'system-ui', overflowX: 'hidden' }}>
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <div style={{ color: '#FA0F00', fontWeight: 'bold', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px' }}>BASTAN CREATIVE CLOUD</div>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', background: 'linear-gradient(to bottom, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '10px 0' }}>تخيل. ابدع. نفذ.</h1>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>مختبر القوالب الذكي</p>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {templates.map((tpl, i) => (
            <div key={i} 
              onMouseEnter={() => setHovered(i)} 
              onMouseLeave={() => setHovered(null)} 
              onClick={() => { setSelectedTpl(tpl); setView('details'); }}
              style={{ backgroundColor: '#0d0d0d', padding: '40px 30px', borderRadius: '30px', border: hovered === i ? '1px solid ' + tpl.color : '1px solid #1a1a1a', transform: hovered === i ? 'translateY(-10px)' : 'none', transition: '0.4s ease', cursor: 'pointer', textAlign: 'center' }}
            >
              <div style={{ fontSize: '50px', marginBottom: '20px' }}>{tpl.icon}</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: hovered === i ? tpl.color : '#fff' }}>{tpl.title}</h3>
              <p style={{ color: '#555', marginTop: '10px' }}>{tpl.cat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}