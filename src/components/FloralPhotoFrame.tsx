import type { ReactNode } from 'react'
import { useId } from 'react'

type FloralPhotoFrameProps = {
  children: ReactNode
  className?: string
}

const edgeInset = 'left-[4rem] right-[4rem] sm:left-[4.75rem] sm:right-[4.75rem]'
const edgeInsetV = 'top-[4rem] bottom-[4rem] sm:top-[4.75rem] sm:bottom-[4.75rem]'

/** Mini rosa para repetir ao longo das bordas */
function MiniRose({ x, y, rot = 0 }: { x: number; y: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <ellipse cx={0} cy={0} rx="5.5" ry="4.2" fill="#e7c7c7" opacity="0.92" transform="rotate(-18)" />
      <ellipse cx="2" cy="-1" rx="4.5" ry="3.5" fill="#efd6d6" opacity="0.88" transform="rotate(12)" />
      <ellipse cx="-2" cy="1" rx="4" ry="3.2" fill="#f0dada" opacity="0.85" transform="rotate(-40)" />
      <circle r="2.2" fill="#f8e8e8" opacity="0.95" />
      <circle r="1" fill="#d8bf9c" opacity="0.55" />
    </g>
  )
}

function MiniLeaf({ x, y, flip }: { x: number; y: number; flip?: boolean }) {
  const sx = flip ? -1 : 1
  return (
    <path
      d="M0 0c6-5 14-4 16 3-7 4-14 2-16-3Z"
      fill="#d8bf9c"
      opacity="0.42"
      transform={`translate(${x} ${y}) scale(${sx},1) rotate(-25)`}
    />
  )
}

/** Ornamento contínuo no topo ou base (viewBox horizontal) */
function HorizontalEdgeVine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path
        d="M12 40C120 14 220 48 360 20 480 44 620 16 760 38 788 34"
        stroke="#8f6f6f"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.34"
      />
      <path
        d="M24 42C140 22 280 50 400 24 540 46 680 20 788 38"
        stroke="#c9ae8a"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.36"
      />
      <path
        d="M32 44C180 26 340 48 520 26 700 44 772 36"
        stroke="#d8bf9c"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.4"
      />
      <MiniLeaf x={88} y={34} />
      <MiniLeaf x={210} y={30} flip />
      <MiniLeaf x={420} y={32} />
      <MiniLeaf x={580} y={28} flip />
      <MiniLeaf x={698} y={34} />
      <circle cx="52" cy="36" r="1.8" fill="#e7c7c7" opacity="0.55" />
      <circle cx="310" cy="22" r="1.6" fill="#d8bf9c" opacity="0.5" />
      <circle cx="550" cy="30" r="1.7" fill="#e7c7c7" opacity="0.48" />
      <circle cx="730" cy="34" r="1.5" fill="#d8bf9c" opacity="0.45" />
      <MiniRose x={140} y={26} rot={-8} />
      <MiniRose x={280} y={30} rot={12} />
      <MiniRose x={500} y={24} rot={-5} />
      <MiniRose x={650} y={30} rot={15} />
    </svg>
  )
}

/** Ornamento contínuo nas laterais (viewBox vertical) */
function VerticalEdgeVine({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path
        d="M30 16C22 140 36 260 24 380 38 500 26 620 32 704"
        stroke="#8f6f6f"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.34"
      />
      <path
        d="M34 24C26 160 40 280 28 400 42 520 30 640 36 708"
        stroke="#c9ae8a"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.36"
      />
      <path
        d="M28 32C20 180 34 300 22 440 36 560 28 680 32 712"
        stroke="#d8bf9c"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.4"
      />
      <MiniLeaf x={38} y={120} />
      <MiniLeaf x={22} y={220} flip />
      <MiniLeaf x={36} y={340} />
      <MiniLeaf x={20} y={460} flip />
      <MiniLeaf x={34} y={580} />
      <circle cx="26" cy="88" r="1.7" fill="#e7c7c7" opacity="0.5" />
      <circle cx="32" cy={260} r="1.6" fill="#d8bf9c" opacity="0.48" />
      <circle cx="24" cy={400} r="1.8" fill="#e7c7c7" opacity="0.52" />
      <circle cx="30" cy={540} r="1.5" fill="#d8bf9c" opacity="0.45" />
      <MiniRose x={30} y={160} rot={-85} />
      <MiniRose x={28} y={300} rot={-92} />
      <MiniRose x={30} y={480} rot={-88} />
      <MiniRose x={28} y={620} rot={-95} />
    </svg>
  )
}

/** Cantos com rosa estilizada, folhas e botão — paleta blush / rose / champagne / truffle */
function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 80c5-22 10-38 20-50"
        stroke="#8f6f6f"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M18 44c8-7 20-5 24 5-7 7-18 5-24-5Z"
        fill="#d8bf9c"
        opacity="0.4"
      />
      <path
        d="M12 50c-5-9 3-20 14-17 1 11-6 20-14 17Z"
        fill="#c9ae8a"
        opacity="0.3"
      />
      <path
        d="M32 58c6 4 12 2 14-3"
        stroke="#b89595"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.28"
      />
      <ellipse cx="26" cy="22" rx="11" ry="8" fill="#e7c7c7" opacity="0.96" transform="rotate(-22 26 22)" />
      <ellipse cx="34" cy="17" rx="10" ry="7" fill="#efd6d6" opacity="0.92" transform="rotate(8 34 17)" />
      <ellipse cx="21" cy="28" rx="9.5" ry="7" fill="#f0dada" opacity="0.9" transform="rotate(-48 21 28)" />
      <ellipse cx="30" cy="31" rx="7.5" ry="6" fill="#e7c7c7" opacity="0.78" transform="rotate(38 30 31)" />
      <ellipse cx="38" cy="26" rx="5" ry="4" fill="#f4dede" opacity="0.65" transform="rotate(18 38 26)" />
      <circle cx="28" cy="24" r="4.8" fill="#f8e8e8" opacity="0.92" />
      <circle cx="28" cy="24" r="2.3" fill="#d8bf9c" opacity="0.58" />
      <path
        d="M40 12c5-2 11 1 12 7-6 2-10 0-12-7Z"
        fill="#e7c7c7"
        opacity="0.55"
      />
      <circle cx="44" cy="36" r="3.2" fill="#e7c7c7" opacity="0.45" />
      <circle cx="46" cy="34" r="1.4" fill="#f8e8e8" opacity="0.7" />
    </svg>
  )
}

function TopCrest({ strokeGradientId }: { strokeGradientId: string }) {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1 z-30 h-5 w-24 -translate-x-1/2 sm:h-6 sm:w-28"
      viewBox="0 0 112 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 16c12-10 28-12 48-8 20-4 36-2 48 8"
        stroke={`url(#${strokeGradientId})`}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="56" cy="10" r="2.2" fill="#e7c7c7" opacity="0.75" />
      <circle cx="56" cy="10" r="0.9" fill="#d8bf9c" opacity="0.9" />
      <defs>
        <linearGradient
          id={strokeGradientId}
          x1="8"
          y1="16"
          x2="104"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d8bf9c" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#e7c7c7" stopOpacity="0.85" />
          <stop offset="1" stopColor="#d8bf9c" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SideBouquet({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M36 142C26 110 52 88 38 58 29 38 40 20 58 10"
        stroke="#8f6f6f"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.28"
      />
      <path
        d="M38 136C50 112 28 90 42 66 54 46 42 30 20 18"
        stroke="#d8bf9c"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.34"
      />
      <MiniRose x={34} y={42} rot={-18} />
      <MiniRose x={43} y={76} rot={14} />
      <MiniRose x={31} y={108} rot={-8} />
      <MiniLeaf x={45} y={24} />
      <MiniLeaf x={20} y={64} flip />
      <MiniLeaf x={48} y={96} />
      <circle cx="48" cy="56" r="2" fill="#e7c7c7" opacity="0.48" />
      <circle cx="28" cy="88" r="1.7" fill="#d8bf9c" opacity="0.5" />
    </svg>
  )
}

export function FloralPhotoFrame({
  children,
  className = '',
}: FloralPhotoFrameProps) {
  const crestGradientId = `photo-frame-crest-${useId().replace(/:/g, '')}`

  return (
    <div className={`relative isolate inline-block max-w-full p-5 sm:p-6 ${className}`}>
      <TopCrest strokeGradientId={crestGradientId} />

      <div
        className="pointer-events-none absolute inset-3 z-10 rounded-[2.35rem] border border-rose/35 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.55)] sm:inset-4"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-[1.05rem] z-10 rounded-[2.05rem] border border-champagne/45 sm:inset-5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 top-5 z-10 h-px bg-gradient-to-r from-transparent via-champagne/55 to-transparent sm:inset-x-10 sm:top-6"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 bottom-5 z-10 h-px bg-gradient-to-r from-transparent via-rose/50 to-transparent sm:inset-x-10 sm:bottom-6"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 left-5 top-10 z-10 w-px bg-gradient-to-b from-transparent via-champagne/55 to-transparent sm:left-6"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 right-5 top-10 z-10 w-px bg-gradient-to-b from-transparent via-champagne/55 to-transparent sm:right-6"
        aria-hidden
      />

      {/* Bordas contínuas do contorno superior/inferior — acima da moldura sólida */}
      <div
        className={`pointer-events-none absolute ${edgeInset} top-1.5 z-20 h-14 sm:top-2 sm:h-16`}
        aria-hidden
      >
        <HorizontalEdgeVine className="h-full w-full" />
      </div>
      <div
        className={`pointer-events-none absolute ${edgeInset} bottom-1.5 z-20 h-14 origin-bottom scale-y-[-1] sm:bottom-2 sm:h-16`}
        aria-hidden
      >
        <HorizontalEdgeVine className="h-full w-full" />
      </div>

      <div
        className={`pointer-events-none absolute left-1.5 z-20 w-14 sm:left-2 sm:w-16 ${edgeInsetV}`}
        aria-hidden
      >
        <VerticalEdgeVine className="h-full w-full" />
      </div>
      <div
        className={`pointer-events-none absolute right-1.5 z-20 w-14 origin-right scale-x-[-1] sm:right-2 sm:w-16 ${edgeInsetV}`}
        aria-hidden
      >
        <VerticalEdgeVine className="h-full w-full" />
      </div>

      <SideBouquet className="pointer-events-none absolute left-0 top-1/2 z-30 h-32 w-16 -translate-y-1/2 sm:h-40 sm:w-20" />
      <SideBouquet className="pointer-events-none absolute right-0 top-1/2 z-30 h-32 w-16 -translate-y-1/2 scale-x-[-1] sm:h-40 sm:w-20" />

      <CornerOrnament className="pointer-events-none absolute left-0 top-0 z-30 h-[5rem] w-[5rem] sm:h-[5.75rem] sm:w-[5.75rem]" />
      <CornerOrnament className="pointer-events-none absolute right-0 top-0 z-30 h-[5rem] w-[5rem] scale-x-[-1] sm:h-[5.75rem] sm:w-[5.75rem]" />
      <CornerOrnament className="pointer-events-none absolute bottom-0 left-0 z-30 h-[5rem] w-[5rem] scale-y-[-1] sm:h-[5.75rem] sm:w-[5.75rem]" />
      <CornerOrnament className="pointer-events-none absolute bottom-0 right-0 z-30 h-[5rem] w-[5rem] scale-x-[-1] scale-y-[-1] sm:h-[5.75rem] sm:w-[5.75rem]" />

      <div className="relative z-0 rounded-[2rem] bg-gradient-to-br from-rose/35 via-white/85 to-champagne/30 p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_0_0_1px_rgba(231,199,199,0.38),0_18px_45px_rgba(90,65,65,0.08)]">
        <div className="rounded-[1.85rem] bg-gradient-to-b from-white/95 via-pearl to-blush/40 p-[3px] shadow-inner">
          <div className="rounded-[1.65rem] border border-champagne/50 bg-gradient-to-b from-white/65 to-blush/25 p-1.5 sm:p-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
