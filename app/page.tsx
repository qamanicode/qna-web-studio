import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          QNA Web Studio
        </h1>
        <p className="text-gray-400 text-xl">
          مرحباً بك في استوديو تطوير الويب المتكامل. نحن نصنع تجارب رقمية استثنائية.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition">
            ابدأ مشروعك
          </button>
          <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition">
            تواصل معنا
          </button>
        </div>
      </div>
      <footer className="absolute bottom-8 text-gray-500 text-sm">
        © 2026 QNA Studio - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
