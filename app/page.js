'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [view, setView] = useState('home');
  const [selectedTpl, setSelectedTpl] = useState(null);
  const [hovered, setHovered] = useState(null);

  const MY_WHATSAPP = '20123456789'; // لا تنسَ وضع رقمك هنا

  const templates = [
    { id: 1, title: 'متجر باستان الذكي', cat: 'E-commerce', color: '#00c6ff', icon: '💎', details: 'نظام تجارة متكامل مع سلة تسوق ذكية وواجهة مستخدم فائقة السرعة.' },
    { id: 2, title: 'منصة قماني للأخبار', cat: 'News Portal', color: '#0072ff', icon: '📰', details: 'نظام إدارة محتوى إخباري يدعم الوسائط المتعددة والذكاء الاصطناعي في ترتيب الأخبار.' },
    { id: 3, title: 'واجهة التحكم الاحترافية', cat: 'Dashboard', color: '#f953c6', icon: '📊', details: 'لوحة تحكم شاملة لتحليل البيانات ومراقبة الأداء لحظة بلحظة.' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020205', color: '#fff', fontFamily: 'system-ui', overflowX: 'hidden', position: 'relative' }}>
      <style>{` 
        @keyframes breath { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(2, 101, 220, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(2, 101, 220, 0); } 100% { box-shadow: 0 0 0 0 rgba(2, 101, 220, 0); } }
        .fade-in { animation: slideUp 1s ease forwards; }
        .breathing-bg { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, #0265DC33 0%, transparent 70%); filter: blur(60px); animation: breath 8s infinite ease-in-out; z-index: 1; }
      `}</style>

      <div className='breathing-bg' style={{ top: '-100px', left: '-100px' }}></div>
      <div className='breathing-bg' style={{ bottom: '-100px', right: '-100px', animationDelay: '4s' }}></div>

      {view === 'details' ? (
        <div className='fade-in' style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', position: 'relative', zIndex: 10 }}>
          <div style={{ fontSize: '100px', marginBottom: '30px', filter: 'drop-shadow(0 0 30px ' + selectedTpl.color + '66)' }}>{selectedTpl.icon}</div>
          <h1 style={{ fontSize: '3.5rem', color: selectedTpl.color, fontWeight: '900' }}>{selectedTpl.title}</h1>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto', lineHeight: '1.8' }}>{selectedTpl.details}</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <button onClick={() => setView('home')} style={{ padding: '15px 30px', borderRadius: '12px', border: '1px solid #333', backgroundColor: 'transparent', color: '#fff', cursor: 'pointer' }}>← عودة</button>
            <button onClick={() => window.open('https://wa.me' + MY_WHATSAPP + '?text=' + encodeURIComponent('مرحباً باستان، أريد البدء بمشروع ' + selectedTpl.title), '_blank')} style={{ padding: '15px 40px', borderRadius: '12px', border: 'none', backgroundColor: selectedTpl.color, color: '#000', cursor: 'pointer', fontWeight: '900', animation: 'pulse 2s infinite' }}>اطلب الآن ✨</button>
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', zIndex: 10 }}>
          <section className='fade-in' style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ color: '#FA0F00', fontWeight: 'bold', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px' }}>BASTAN CREATIVE CLOUD</div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: '900', background: 'linear-gradient(to bottom, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>خلقنا لِنُبدع.</h1>
            <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '10px' }}>عالم القوالب النابضة بالحياة</p>
          </section>

          <section className='fade-in' style={{ padding: '0 20px 100px', maxWidth: '1100px', margin: '0 auto', animationDelay: '0.5s' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {templates.map((tpl, i) => (
                <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => { setSelectedTpl(tpl); setView('details'); }}
                  style={{ backgroundColor: '#0d0d0d', padding: '50px 30px', borderRadius: '30px', border: hovered === i ? '1px solid ' + tpl.color : '1px solid #1a1a1a', transform: hovered === i ? 'scale(1.05)' : 'scale(1)', transition: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', cursor: 'pointer', textAlign: 'center', boxShadow: hovered === i ? '0 20px 40px -10px ' + tpl.color + '44' : 'none' }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>{tpl.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: hovered === i ? tpl.color : '#fff' }}>{tpl.title}</h3>
                  <p style={{ color: '#555', marginTop: '10px' }}>{tpl.cat}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}