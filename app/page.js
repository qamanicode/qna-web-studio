'use client';
import React, { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const templates = [
    { title: 'متجر باستان الذكي', cat: 'E-commerce', color: '#00c6ff', icon: '💎' },
    { title: 'منصة قماني للأخبار', cat: 'News Portal', color: '#0072ff', icon: '📰' },
    { title: 'واجهة التحكم الاحترافية', cat: 'Dashboard', color: '#f953c6', icon: '📊' }
  ];

  return (
    <div style={{ minHeight: '180vh', backgroundColor: '#050505', color: '#fff', fontFamily: 'system-ui', overflowX: 'hidden' }}>
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <div style={{ color: '#FA0F00', fontWeight: 'bold', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px' }}>BASTAN CREATIVE CLOUD</div>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', background: 'linear-gradient(to bottom, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '10px 0' }}>تخيل. ابدع. نفذ.</h1>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>بوابة باستان للعوالم المستجيبة</p>
        <div style={{ maxWidth: '600px', width: '100