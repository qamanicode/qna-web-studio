"use client";

import React, { useState, useEffect } from 'react';
import { Save, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface QnaMemoryManagerProps {
  currentData: any;
  onRestore: (data: any) => void;
}

const QnaMemoryManager = ({ currentData, onRestore }: QnaMemoryManagerProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [lastBackup, setLastBackup] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('QNA_WEB_BACKUP');
    if (saved) {
      try {
        const { timestamp } = JSON.parse(saved);
        setLastBackup(new Date(timestamp).toLocaleTimeString());
      } catch (e) {
        console.error("Backup load error");
      }
    }
  }, []);

  const saveConversation = () => {
    if (typeof window === "undefined") return;
    try {
      const dataToStore = {
        timestamp: new Date().toISOString(),
        content: currentData,
        project: "QNA_WEB_SUPER_STUDIO"
      };
      localStorage.setItem('QNA_WEB_BACKUP', JSON.stringify(dataToStore));
      setIsSaved(true);
      setError(null);
      setLastBackup(new Date().toLocaleTimeString());
      setTimeout(() => setIsSaved(false), 3000);
    } catch (err) {
      setError("فشل الحفظ: المساحة ممتلئة");
      setTimeout(() => setError(null), 4000);
    }
  };

  const restoreSession = () => {
    if (typeof window === "undefined") return;
    const savedData = localStorage.getItem('QNA_WEB_BACKUP');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        onRestore(parsed.content);
        alert(`تمت استعادة نسخة: ${new Date(parsed.timestamp).toLocaleString()}`);
      } catch (e) {
        alert("النسخة تالفة");
      }
    } else {
      alert("لا توجد جلسات.");
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#0a0a0c]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
      <Button 
        onClick={saveConversation}
        variant={isSaved ? "default" : "secondary"}
        className={`h-10 px-6 rounded-xl font-bold transition-all gap-2 ${
          isSaved ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white'
        }`}
      >
        {isSaved ? <CheckCircle size={16} /> : <Save size={16} />}
        {isSaved ? "تم الحفظ" : "حفظ الجلسة"}
      </Button>

      <Button 
        variant="ghost"
        onClick={restoreSession}
        className="h-10 px-4 rounded-xl hover:bg-white/5 text-gray-300 gap-2 border border-white/5"
      >
        <RotateCcw size={16} />
        استعادة
      </Button>

      {lastBackup && (
        <div className="px-3 border-l border-white/10 flex flex-col justify-center">
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest leading-none">آخر نسخة</span>
          <span className="text-[10px] font-bold text-indigo-400">{lastBackup}</span>
        </div>
      )}
    </div>
  );
};

export default QnaMemoryManager;
