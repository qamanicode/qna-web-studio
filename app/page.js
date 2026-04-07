import React from 'react';

export default function Home() {
  const [hovered, setHovered] = React.useState(null);

  const tools = ['✒️', '🔳', '🔍', '📐', '⚙️'];
  const services = [
    { name: 'التصميم الرقمي', icon: '🎨', color: '#3b82f6' },
    { name: 'تحريك الشعارات', icon: '🎬', color: '#8b5cf6' },
    { name: 'واجهات الذكاء', icon: '🤖', color: '#ec4899' }
  ];

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#050505', color: '#fff',
      fontFamily: 'system-ui', display: 'flex', overflowX: 'hidden',
      backgroundImage: 'radial-gradient(circle at 80% 20%, #1a1a2e, #050505)'
    }}>
      
      {/* 1. شريط أدوات متفاعل */}
      <div style={{
        width: '60px', borderRight: '1px solid #222', display: 'flex', 
        flexDirection: 'column', gap: '25px', alignItems: 'center', paddingTop: '40px',
        backgroundColor: 'rgba(15, 15, 15, 0.8)'
      }}>
        {tools.map((tool, i) => (
          <div key={i} style={{
            fontSize: '22px', cursor: 'pointer', transition: '0.3s',
            filter: hovered === 't'+i ? 'drop-shadow(0 0 8px #0265DC)' : 'none',
            opacity: hovered === 't'+i ? 1 : 0.5
          }} 
          onMouseEnter={() => setHovered('t'+i)} 
          onMouseLeave={() => setHovered(null)}>{tool}</div>
        ))}
      </div>

      <div style={{flex: 1, padding: '20px 40px', position: 'relative'}}>
        
        {/* 2. الهوية السينمائية */}
        <div style={{textAlign: 'center', marginBottom: '50px', marginTop: '20px'}}>
          <span style={{color: '#FA0F00', fontWeight: 'bold', fontSize: '11px', letterSpacing: '4px'}}>QNA CREATIVE CLOUD</span>
          <h1 style={{fontSize: '3.5rem', fontWeight: '900', margin: '10px 0', background: 'linear-gradient(to bottom, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>تخيل. ابدع. نفذ.</h1>
        </div>

        {/* 3. شريط الذكاء الاصطناعي بنبض ضوئي */}
        <div style={{
          maxWidth: '600px', margin: '0 auto 60px', position: 'relative',
          background: 'linear-gradient(90deg, #0265DC, #8b5cf6)', padding: '1px', borderRadius: '15px',
          boxShadow: '0 0 20px rgba(2, 101, 220, 0.2)'
        }}>
          <input 
            type='text' 
            placeholder='صف ما تريد تصميمه هنا...' 
            style={{width: '100%', padding: '18px', borderRadius: '14px', border: 'none', backgroundColor: '#0a0a0a', color: 'white', outline: 'none'}}
          />
          <button style={{position: 'absolute', right: '10px', top: '8px', backgroundColor: '#0265DC', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer'}}>توليد ✨</button>
        </div>

        {/* 4. بطاقات الخدمات المتفاعلة */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', maxWidth: '1000px', margin: '0 auto'}}>
          {services.map((s, i) => (
            <div key={i} 
              onMouseEnter={() => setHovered('s'+i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '40px 20px', borderRadius: '24px',
                border: hovered === 's'+i ? '1px solid '+s.color : '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center', transition: '0.4s all ease', cursor: 'pointer',
                transform: hovered === 's'+i ? 'translateY(-10px)' : 'none',
                boxShadow: hovered === 's'+i ? '0 15px 30px -10px '+s.color+'44' : 'none'
              }}>
              <div style={{fontSize: '45px', marginBottom: '20px'}}>{s.icon}</div>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', color: hovered === 's'+i ? s.color : '#fff'}}>{s.name}</h3>
              <p style={{fontSize: '0.9rem', color: '#666', marginTop: '10px'}}>انقر لاستكشاف الإمكانيات</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
