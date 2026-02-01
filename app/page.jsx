"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentScene, setCurrentScene] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  // ควบคุมจังหวะหนังสั้น (Cinematic Timing)
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentScene(2), 5000); // จบฉาก 1 ไปฉาก 2
    const timer2 = setTimeout(() => setCurrentScene(3), 11000); // จบฉาก 2 ไปฉาก 3
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const enterSite = () => {
    setIsVisible(true);
    setCurrentScene(4); // เข้าสู่เนื้อหาหลัก
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
      
      {/* Background Particles Simulation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* Cinematic Scenes */}
      <div className="relative z-50">
        
        {/* Scene 1 */}
        {currentScene === 1 && (
          <div className="fixed inset-0 flex items-center justify-center px-6 text-center animate-in fade-in zoom-in duration-1000">
            <div className="max-w-4xl">
              <p className="text-blue-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">Phase 01: Biological Foundation</p>
              <h2 className="text-2xl md:text-4xl font-light leading-snug">
                แร่ธาตุต่าง ๆ นั้นร่างกายจะนำไปใช้ได้<br />
                <span className="text-blue-400 font-bold">จำเป็นต้องมีวิตามินช่วยนำพา</span>
              </h2>
            </div>
          </div>
        )}

        {/* Scene 2 */}
        {currentScene === 2 && (
          <div className="fixed inset-0 flex items-center justify-center px-6 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="max-w-4xl">
              <p className="text-red-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">Phase 02: Absorption Barrier</p>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-slate-300">
                วิตามินที่กินทั่วไปอาจเหลือดูดซึมจริงเพียงเล็กน้อย<br />
                <span className="text-white font-bold underline decoration-red-500/50">เช่น B12 อาจดูดซึมผ่านทางเดินอาหารได้ต่ำกว่า 1-2%</span><br />
                ทำให้ผู้ที่ขาดสารอาหารอาจต้องใช้เวลาฟื้นฟูนานเป็นปี
              </p>
            </div>
          </div>
        )}

        {/* Scene 3 */}
        {currentScene === 3 && (
          <div className="fixed inset-0 flex flex-col items-center justify-center px-6 text-center animate-in fade-in zoom-in duration-1000">
            <p className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">Phase 03: The Biotech Solution</p>
            <h2 className="text-2xl md:text-4xl font-light leading-tight">
              เราเสริมประสิทธิภาพด้วยเทคโนโลยีชีวภาพ<br />
              ดูดซึมเข้ากระแสเลือดทันที ไม่ต้องผ่านระบบย่อย<br />
              <span className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 block mt-6">
                หยดใต้ลิ้น
              </span>
            </h2>
            <button 
              onClick={enterSite}
              className="mt-12 px-10 py-4 rounded-full border border-white/20 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
              สำรวจนวัตกรรมของเรา ↓
            </button>
          </div>
        )}
      </div>

      {/* Main Content (Reveal after Scene 3) */}
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible absolute h-0'}`}>
        <nav className="p-8 flex justify-between items-center">
            <div className="font-black text-xl tracking-tighter text-blue-400">SALUS INNOVATION</div>
        </nav>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Technical Specifications</h1>
            <p className="text-slate-400">ข้อมูลเชิงลึกสำหรับกระบวนการผลิต OEM</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[3rem] border border-white/10 bg-white/5 hover:border-blue-500 transition-all cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Active Formula</h3>
              <p className="text-sm text-slate-400">Methylcobalamin + P5P</p>
            </div>
            {/* เพิ่ม Card อื่นๆ ตามต้องการ */}
          </div>

          <div className="mt-20 p-12 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5 text-center">
            <h4 className="text-2xl font-bold">คุณดนภัทร เพียรธรรม</h4>
            <p className="text-blue-400 mt-2">springchill@icloud.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
