import React, { useState, useEffect } from 'react';

export default function Home() {
  const = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setChatVisible(true), 2000);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('البوت قماني: جاري معالجة طلبك لتوليد الموقع المستجيب الخاص بك...');
    }, 3000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', fontFamily: 'system-ui', display: 'flex', overflowX: 'hidden', backgroundImage: 'radial-gradient(circle at 80% 20%, #1a1a2e, #050505)' }}>
      
      {/* شريط الأدوات الجانبي */}
      <div style={{ width: '60px', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center', paddingTop: '40px', backgroundColor: 'rgba(15, 15, 15, 0.8)' }}>
        {['✒️', '🔳', '🔍', '📐', '⚙️'].map((tool, i) => (
          <div key={i} style={{ fontSize: '22px', cursor: 'pointer', opacity: 0.5 }}>{tool}</div>
        ))}
      </div>

      <div style={{ flex: 1, padding: '20px 40px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px', marginTop: '20px' }}>
          <span style={{ color: '#FA0F00', fontWeight: 'bold', fontSize: '11px', letterSpacing: '4px' }}>BASTAN CREATIVE STUDIO</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '10px 0', background: 'linear-gradient(to bottom, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>تخيل. ابدع. نفذ.</h1>
        </div>

        {/* محرك التوليد الذكي */}
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', position: 'relative', background: 'linear-gradient(90deg, #0265DC, #8b5cf6)', padding: '1px', borderRadius: '15px' }}>
          <input 
            type='text' value={text} onChange={(e) => setText(e.target.value)}
            placeholder='صف الموقع الذي تتخيله...' 
            style={{ width: '100%', padding: '18px', borderRadius: '14px', border: 'none', backgroundColor: '#0a0a0a', color: 'white', outline: 'none' }}
          />
          <button onClick={handleGenerate} style={{ position: 'absolute', right: '10px', top: '8px', backgroundColor: isGenerating ? '#444' : '#0265DC', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            {isGenerating ? 'جاري التوليد...' : 'توليد ✨'}
          </button>
        </div>

        {/* البطاقات الاحترافية */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', maxWidth: '1000px', margin: '0 auto' }}>
          {['التصميم الرقمي', 'تحريك الشعارات', 'واجهات الذكاء'].map((name, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '40px 20px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{name}</h3>
            </div>
          ))}
        </div>

        {/* توقيع الخالق */}
        <footer style={{ textAlign: 'center', marginTop: '80px', color: '#444', fontSize: '0.9rem' }}>
          بواسطة الخالق: <span style={{ color: '#666', fontWeight: 'bold' }}>باستان</span>
        </footer>
      </div>

      {/* البوت قماني */}
      {chatVisible && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#0265DC', color: 'white', padding: '15px 25px', borderRadius: '20px 20px 0 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'slideUp 0.5s ease' }}>
          <strong>البوت قماني:</strong> مرحباً بك! أنا هنا لمساعدتك في رحلتك الإبداعية مع باستان 🤖
        </div>
      )}

      <style>{}</style>
    </div>
  );
}
