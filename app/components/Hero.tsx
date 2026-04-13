"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const miniLocations = [
  {
    name: "Apoteka Zemun",
    sensor: "Frižider 1",
    value: "4.8°C",
    status: "ok",
  },
  {
    name: "Apoteka Voždovac",
    sensor: "Vakcine",
    value: "4.3°C",
    status: "ok",
  },
  {
    name: "Magacin",
    sensor: "Komora A",
    value: "8.6°C",
    status: "alarm",
  },
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
      const x =
        padding + (index * (chartWidth - padding * 2)) / (chartPoints.length - 1);
      const y =
        chartHeight -
        padding -
        ((point.temp - min) / range) * (chartHeight - padding * 2);

      return { ...point, x, y };
    });

    const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
    const first = pts[0];
    const last = pts[pts.length - 1];

    const area = `
      M ${first.x} ${chartHeight - padding}
      L ${first.x} ${first.y}
      ${pts.slice(1).map((p) => `L ${p.x} ${p.y}`).join(" ")}
      L ${last.x} ${chartHeight - padding}
      Z
    `;

    return {
      linePoints: line,
      areaPath: area,
      positionedPoints: pts,
    };
  }, []);

  const hoveredPoint =
    hoveredIndex !== null ? positionedPoints[hoveredIndex] : null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071521] via-[#0B1B2B] to-[#123A5A] px-4 py-14 text-white sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-[-100px] h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-[-140px] right-[-60px] h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_38%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,620px)] lg:gap-14">
        <div className="min-w-0 max-w-[620px]">
          <h1 className="mb-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Kontrola temperature
            <span className="mt-2 block text-yellow-400">u realnom vremenu</span>
          </h1>

          <p className="mb-8 max-w-[580px] text-lg leading-8 text-white/80 lg:text-[20px]">
            Pouzdan monitoring temperature za apoteke, hladnjače, restorane i
            objekte gde su tačna evidencija, brz alarm i pregled svih lokacija
            ključni za svakodnevni rad.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 text-[15px] font-semibold text-white">Alarm sistem</p>
              <p className="text-sm leading-6 text-white/65">
                Odmah vidiš odstupanje i reaguješ pre većeg problema
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 text-[15px] font-semibold text-white">
                Istorija i evidencija
              </p>
              <p className="text-sm leading-6 text-white/65">
                Sva merenja ostaju zabeležena za kontrolu i interni pregled
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 text-[15px] font-semibold text-white">Više lokacija</p>
              <p className="text-sm leading-6 text-white/65">
                Jedna kontrolna tabla za objekte, senzore i stanje sistema
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 text-[15px] font-semibold text-white">Cloud pristup</p>
              <p className="text-sm leading-6 text-white/65">
                Pregled sa računara i telefona kada god je potrebno
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/zakazi-demo"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(250,204,21,0.35)]"
            >
              Zakaži demo
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Prijava
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
              <span>24/7 nadzor</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span>Alarm na odstupanje</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span>Više lokacija i senzora</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-4 rounded-[32px] bg-cyan-400/10 blur-3xl sm:-inset-6 sm:rounded-[40px]" />

          <div className="relative w-full max-w-[620px] rounded-[30px] border border-white/10 bg-[#0E2235]/80 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 px-1">
              <div className="min-w-0">
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/45">
                  ColdControl Dashboard
                </p>
                <p className="text-sm text-white/70">
                  Praćenje temperature i alarma
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-[24px] border border-white/10 bg-[#091521] p-3">
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-white/40">
                  Lokacije
                </p>

                <div className="space-y-3">
                  {miniLocations.map((item) => (
                    <div
                      key={`${item.name}-${item.sensor}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="mt-1 truncate text-xs text-white/45">
                            {item.sensor}
                          </p>
                        </div>

                        <span
                          className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${
                            item.status === "alarm" ? "bg-red-400" : "bg-green-400"
                          }`}
                        />
                      </div>

                      <div className="mt-2 text-right">
                        <span
                          className={`text-sm font-bold ${
                            item.status === "alarm" ? "text-red-400" : "text-cyan-300"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#091521] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                      Detalj senzora
                    </p>
                    <p className="mt-1 truncate text-sm font-semibold text-white">
                      Magacin · poslednja merenja
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-semibold text-red-300">
                    Alarm
                  </span>
                </div>

                <div className="mb-3 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-xs text-white/45">Trenutna</p>
                    <p className="mt-1 text-lg font-bold text-red-400">8.6°C</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-xs text-white/45">Status</p>
                    <p className="mt-1 text-sm font-semibold text-white">online</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="text-xs text-white/45">Prosek</p>
                    <p className="mt-1 text-sm font-semibold text-white">5.9°C</p>
                  </div>
                </div>

                <div className="mb-3 flex flex-wrap gap-2">
                  {["1h", "6h", "24h", "7d"].map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-xl px-3 py-1.5 text-xs font-semibold ${
                        index === 0
                          ? "bg-green-400 text-[#04111d]"
                          : "bg-white/5 text-white/75"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111B] p-3">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
                  </div>

                  <div className="relative overflow-hidden rounded-xl">
                    <svg
                      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                      className="relative h-44 w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="heroTempArea" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                        </linearGradient>

                        <linearGradient id="heroTempLine" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="84%" stopColor="#c7f36b" />
                          <stop offset="100%" stopColor="#fde047" />
                        </linearGradient>

                        <filter id="heroLineGlow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <path d={areaPath} fill="url(#heroTempArea)" />

                      <polyline
                        points={linePoints}
                        fill="none"
                        stroke="url(#heroTempLine)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        filter="url(#heroLineGlow)"
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

                          <g
                            transform={`translate(${Math.max(
                              3,
                              Math.min(hoveredPoint.x - 6, chartWidth - 15)
                            )}, ${Math.max(4, hoveredPoint.y - 16)})`}
                          >
                            <rect
                              width="12"
                              height="8"
                              rx="2.5"
                              fill="#06111C"
                              stroke="rgba(255,255,255,0.12)"
                              vectorEffect="non-scaling-stroke"
                            />
                            <text
                              x="6"
                              y="5.6"
                              textAnchor="middle"
                              fontSize="2.8"
                              fontWeight="700"
                              fill="#fde047"
                            >
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
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r={isActive ? 1.2 : 0.9}
                              fill={isLast ? "#fde047" : isActive ? "#c7f36b" : "#22d3ee"}
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
    </section>
  );
}