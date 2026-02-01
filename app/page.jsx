import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [activeModal, setActiveModal] = useState(null)

  const skipIntro = () => {
    setShowIntro(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openModal = (id) => {
    setActiveModal(id)
    document.body.style.overflow = "hidden"
  }

  const closeAll = () => {
    setActiveModal(null)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && closeAll()
    document.addEventListener("keydown", esc)
    return () => document.removeEventListener("keydown", esc)
  }, [])

  return (
    <>
      <Head>
        <title>PROJECT: SUBLINGUAL INNOVATION | Danaphat Pientham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ===== Background ===== */}
      <div className="bg-container">
        <div className="orb w-[600px] h-[600px] bg-blue-900/30 -top-20 -left-20" />
        <div className="orb w-[400px] h-[400px] bg-indigo-900/30 -bottom-20 -right-20" />
      </div>

      {/* ===== Intro ===== */}
      {showIntro && (
        <section
          id="cinematic-intro"
          className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-50 bg-[#020617]"
        >
          <div className="max-w-4xl w-full text-center space-y-12">

            <div className="scene animate-scene-1">
              <h2 className="text-blue-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">
                Phase 01: The Biological Foundation
              </h2>
              <p className="text-2xl md:text-4xl font-light leading-snug">
                แร่ธาตุต่าง ๆ นั้นร่างกายจะนำไปใช้ได้<br />
                <span className="text-blue-400 font-bold">
                  จำเป็นต้องมีวิตามินช่วยนำพา
                </span>
              </p>
            </div>

            <div className="scene animate-scene-2 absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-red-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">
                Phase 02: The Absorption Barrier
              </h2>
              <p className="text-xl md:text-3xl text-slate-300">
                วิตามินที่กินทั่วไปอาจดูดซึมได้เพียง 1–2%<br />
                ทำให้การฟื้นฟูใช้เวลานาน
              </p>
            </div>

            <div className="scene animate-scene-3 absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-xs mb-6">
                Phase 03: The Biotech Solution
              </h2>
              <p className="text-2xl md:text-4xl">
                ดูดซึมเข้ากระแสเลือดทันที
                <span className="block text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mt-6">
                  หยดใต้ลิ้น
                </span>
              </p>

              <button
                onClick={skipIntro}
                className="mt-12 px-8 py-3 rounded-full border border-white/20 text-xs tracking-widest hover:bg-white hover:text-black transition"
              >
                Explore Technology ↓
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ===== Main Content ===== */}
      {!showIntro && (
        <main id="main-content" className="relative z-10 min-h-screen pt-20 px-6">

          {/* Header */}
          <header className="text-center mb-24 max-w-4xl mx-auto">
            <p className="text-blue-400 uppercase tracking-[0.4em] text-xs mb-4">
              Confidential Proposal
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                BIO-TECH
              </span>
              <br />
              SUBLINGUAL.
            </h1>
          </header>

          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">

            <Card
              title="สูตรสารสำคัญ"
              subtitle="B12 + B6 Synergy"
              color="blue"
              onClick={() => openModal("formula")}
            />

            <Card
              title="เทคโนโลยีนำส่ง"
              subtitle="Absorption Matrix"
              color="cyan"
              onClick={() => openModal("delivery")}
            />

            <Card
              title="บรรจุภัณฑ์พรีเมียม"
              subtitle="Precision Vessel"
              color="indigo"
              onClick={() => openModal("vessel")}
            />

          </div>
        </main>
      )}

      {/* ===== Modal Backdrop ===== */}
      {activeModal && (
        <div className="modal-backdrop active" onClick={closeAll} />
      )}

      {/* ===== Example Modal ===== */}
      {activeModal === "formula" && (
        <Modal title="Active Formula" onClose={closeAll}>
          <p className="text-slate-300">
            Methylcobalamin (B12) + P5P (B6) ดูดซึมผ่านเยื่อบุใต้ลิ้น
          </p>
        </Modal>
      )}
    </>
  )
}

/* ===== Reusable Components ===== */

function Card({ title, subtitle, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className="glass-card trigger-card p-10 rounded-[3rem] text-center shimmer cursor-pointer"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className={`text-${color}-400 text-sm uppercase tracking-widest`}>
        {subtitle}
      </p>
    </div>
  )
}

function Modal({ title, children, onClose }) {
  return (
    <div className="detail-modal active glass-card rounded-[3rem] p-12">
      <h2 className="text-3xl font-black mb-6">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="mt-10 px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20"
      >
        ปิดหน้าต่าง
      </button>
    </div>
  )
}
