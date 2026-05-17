"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const miniLocations = [
  { name: "Apoteka Zemun", sensor: "Frižider 1", value: "4.8°C", status: "ok" },
  { name: "Apoteka Voždovac", sensor: "Vakcine", value: "4.3°C", status: "ok" },
  { name: "Magacin", sensor: "Komora A", value: "8.6°C", status: "alarm" },
];

const chartPoints = [
  { time: "08:00", temp: 4.7 },
  { time: "09:00", temp: 4.5 },
  { time: "10:00", temp: 4.9 },
  { time: "11:00", temp: 5.2 },
  { time: "12:00", temp: 5.7 },
  { time: "13:00", temp: 6.1 },
  { time: "14:00", temp: 5.8 },
  { time: "15:00", temp: 5.4 },
  { time: "16:00", temp: 5.0 },
  { time: "17:00", temp: 5.6 },
  { time: "18:00", temp: 6.4 },
  { time: "19:00", temp: 8.6 },
];

const eventLog = [
  { time: "19:01", text: "Komora A izašla iz opsega", tone: "alarm" },
  { time: "19:02", text: "Alarm poslat odgovornom licu", tone: "info" },
  { time: "19:04", text: "Događaj upisan u istoriju", tone: "ok" },
];

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(10);
  const chartWidth = 100;
  const chartHeight = 190;
  const padding = 10;

  const { linePoints, areaPath, positionedPoints } = useMemo(() => {
    const values = chartPoints.map((p) => p.temp);
    const max = Math.max(...values) + 0.4;
    const min = Math.min(...values) - 0.4;
    const range = max - min || 1;

    const pts = chartPoints.map((point, index) => {
      const x = padding + (index * (chartWidth - padding * 2)) / (chartPoints.length - 1);
      const y = chartHeight - padding - ((point.temp - min) / range) * (chartHeight - padding * 2);
      return { ...point, x, y };
    });

    const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
    const first = pts[0];
    const last = pts[pts.length - 1];
    const area = `M ${first.x} ${chartHeight - padding} L ${first.x} ${first.y} ${pts
      .slice(1)
      .map((p) => `L ${p.x} ${p.y}`)
      .join(" ")} L ${last.x} ${chartHeight - padding} Z`;

    return { linePoints: line, areaPath: area, positionedPoints: pts };
  }, []);

  const hoveredPoint = hoveredIndex !== null ? positionedPoints[hoveredIndex] : null;

  return (
    <section className="relative overflow-hidden bg-[#071521] px-4 py-14 text-white sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_15%,rgba(250,204,21,0.08),transparent_28%),linear-gradient(135deg,#071521_0%,#0B1B2B_48%,#123A5A_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
        <div className="absolute left-0 top-[42%] h-px w-full bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent" />
        <div className="absolute -left-24 top-28 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,650px)] lg:gap-14">
        <div className="min-w-0 max-w-[650px]">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-sm font-bold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            24/7 monitoring · alarmi · dokaz
          </div>

          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Kontrola temperature
            <span className="mt-2 block text-yellow-400">koja reaguje pre štete</span>
          </h1>

          <p className="mb-4 max-w-[620px] text-lg leading-8 text-white/78 lg:text-[20px]">
            ColdControl prati frižidere, komore i temperaturno osetljivu robu 24/7 — uz alarme,
            istoriju merenja i izveštaje spremne za proveru.
          </p>

          <p className="mb-8 max-w-[560px] text-sm leading-7 text-white/52">
            Nije samo grafikon. Sistem beleži šta se desilo, kada se desilo i koliko je trajalo.
          </p>

          <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="flex min-w-max animate-[enterpriseTicker_20s_linear_infinite] items-center gap-7 px-5 py-4 text-sm text-white/76">
              {[...eventLog, ...eventLog].map((event, index) => (
                <div key={`${event.time}-${index}`} className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      event.tone === "alarm"
                        ? "bg-red-400"
                        : event.tone === "ok"
                        ? "bg-emerald-400"
                        : "bg-cyan-300"
                    }`}
                  />
                  <span className="font-semibold text-white/85">{event.time}</span>
                  <span>{event.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/zakazi-demo"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3.5 text-base font-extrabold text-black shadow-[0_16px_42px_rgba(250,204,21,0.26)] transition duration-300 hover:scale-[1.02] hover:bg-yellow-300"
            >
              Zakaži demo
            </Link>
            <Link
              href="https://app.coldcontrol.app/login"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-3.5 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Otvori aplikaciju
            </Link>
          </div>

          <div className="mt-8 grid max-w-[620px] gap-3 sm:grid-cols-3">
            {[
              ["24/7", "kontinuirano merenje"],
              ["Alarm", "reakcija na odstupanje"],
              ["Audit", "istorija i izveštaji"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-xl">
                <p className="text-xl font-black text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-6 rounded-[42px] bg-cyan-400/10 blur-3xl" />
          <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-br from-cyan-300/18 via-white/0 to-yellow-300/10" />

          <div className="relative w-full max-w-[650px] overflow-hidden rounded-[34px] border border-white/12 bg-[#0B1B2B]/82 p-4 shadow-[0_35px_110px_rgba(0,0,0,0.52)] backdrop-blur-2xl md:p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(34,211,238,0.12),transparent_32%)]" />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-28 animate-[enterpriseScan_6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />

            <div className="relative mb-4 flex items-center justify-between gap-3 px-1">
              <div className="min-w-0">
                <p className="mb-1 text-xs uppercase tracking-[0.22em] text-white/40">ColdControl Dashboard</p>
                <p className="text-sm text-white/70">Praćenje temperature i alarma</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="relative grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-[26px] border border-white/10 bg-[#08131F]/86 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/36">Lokacije</p>
                <div className="space-y-3">
                  {miniLocations.map((item) => (
                    <div
                      key={`${item.name}-${item.sensor}`}
                      className={`rounded-2xl border px-3 py-3 transition ${
                        item.status === "alarm"
                          ? "border-red-400/28 bg-red-400/[0.075]"
                          : "border-white/10 bg-white/[0.055]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-white">{item.name}</p>
                          <p className="mt-1 truncate text-xs text-white/43">{item.sensor}</p>
                        </div>
                        <span className="relative mt-1 flex h-2.5 w-2.5">
                          {item.status === "alarm" && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-50" />}
                          <span className={`relative h-2.5 w-2.5 rounded-full ${item.status === "alarm" ? "bg-red-400" : "bg-emerald-400"}`} />
                        </span>
                      </div>
                      <div className="mt-3 text-right">
                        <span className={`text-sm font-black ${item.status === "alarm" ? "text-red-300" : "text-cyan-200"}`}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-[#08131F]/86 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/36">Detalj senzora</p>
                    <p className="mt-1 truncate text-sm font-bold text-white">Magacin · poslednja merenja</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-red-400/22 bg-red-400/10 px-3 py-1 text-xs font-bold text-red-200">
                    Alarm aktivan
                  </span>
                </div>

                <div className="mb-3 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-3 py-3">
                    <p className="text-xs text-white/45">Trenutna</p>
                    <p className="mt-1 text-lg font-black text-red-300">8.6°C</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-3">
                    <p className="text-xs text-white/45">Status</p>
                    <p className="mt-1 text-sm font-bold text-white">online</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-3">
                    <p className="text-xs text-white/45">Prosek</p>
                    <p className="mt-1 text-sm font-bold text-white">5.9°C</p>
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                  {["1h", "6h", "24h", "7d"].map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-xl px-3 py-1.5 text-xs font-bold ${
                        index === 0 ? "bg-emerald-400 text-[#04111d]" : "bg-white/5 text-white/68"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#06111C] p-3">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
                  <div className="relative overflow-hidden rounded-xl">
                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="relative h-44 w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="enterpriseTempArea" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.015" />
                        </linearGradient>
                        <linearGradient id="enterpriseTempLine" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="82%" stopColor="#bef264" />
                          <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>
                        <filter id="enterpriseLineGlow">
                          <feGaussianBlur stdDeviation="2.6" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <path d={areaPath} fill="url(#enterpriseTempArea)" />
                      <polyline
                        className="enterprise-line"
                        points={linePoints}
                        fill="none"
                        stroke="url(#enterpriseTempLine)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        filter="url(#enterpriseLineGlow)"
                      />

                      {hoveredPoint && (
                        <>
                          <line
                            x1={hoveredPoint.x}
                            y1={18}
                            x2={hoveredPoint.x}
                            y2={chartHeight - 18}
                            stroke="#ffffff"
                            strokeOpacity="0.14"
                            strokeDasharray="5 5"
                            vectorEffect="non-scaling-stroke"
                          />
                          <g transform={`translate(${Math.max(3, Math.min(hoveredPoint.x - 6, chartWidth - 15))}, ${Math.max(4, hoveredPoint.y - 16)})`}>
                            <rect width="12" height="8" rx="2.5" fill="#06111C" stroke="rgba(255,255,255,0.12)" vectorEffect="non-scaling-stroke" />
                            <text x="6" y="5.6" textAnchor="middle" fontSize="2.8" fontWeight="700" fill="#fde047">
                              {hoveredPoint.temp.toFixed(1)}°
                            </text>
                          </g>
                        </>
                      )}

                      {positionedPoints.map((point, index) => {
                        const isActive = hoveredIndex === index;
                        const isLast = index === positionedPoints.length - 1;
                        return (
                          <g
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(10)}
                            className="cursor-pointer"
                          >
                            <circle cx={point.x} cy={point.y} r={2.5} fill="transparent" />
                            {isLast && <circle cx={point.x} cy={point.y} r={2.7} fill="#fde047" opacity="0.18" />}
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r={isActive ? 1.2 : 0.9}
                              fill={isLast ? "#fde047" : isActive ? "#bef264" : "#22d3ee"}
                              stroke="#06111C"
                              strokeWidth="0.5"
                              vectorEffect="non-scaling-stroke"
                            />
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-white/35">
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>19:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes enterpriseTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes enterpriseScan {
          0%, 100% { transform: translateX(-120%); opacity: 0; }
          18% { opacity: 1; }
          50% { transform: translateX(680%); opacity: 0.85; }
          82% { opacity: 0; }
        }
        .enterprise-line {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: drawEnterpriseLine 2.8s ease-out forwards;
        }
        @keyframes drawEnterpriseLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
