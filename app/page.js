import React from "react";

export default function Home() {
  const services = [
    { title: "تطوير المواقع", desc: "بناء مواقع سريعة باستخدام Next.js", icon: "🌐" },
    { title: "تصميم UI/UX", desc: "واجهات مستخدم عصرية وجذابة", icon: "🎨" },
    { title: "تطوير التطبيقات", desc: "حلول برمجية مخصصة لأعمالك", icon: "📱" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* الهيدر */}
      <div className="max-w-4xl mx-auto text-center py-16 space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          QNA Web Studio
        </h1>
        <p className="text-gray-400 text-xl">نحن نحول أفكارك إلى واقع رقمي مبهر</p>
      </div>

      {/* قسم الخدمات */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {services.map((s, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all cursor-pointer group">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>

      <footer className="text-center mt-20 text-gray-600">
        © 2026 QNA Studio | صنع بكل حب
      </footer>
    </div>
  );
}
