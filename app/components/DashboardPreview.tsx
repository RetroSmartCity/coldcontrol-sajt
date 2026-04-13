"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const locations = [
  {
    name: "Apoteka Zemun",
    address: "Glavna 24",
    sensors: [
      { name: "Frižider 1", value: "4.8°C", status: "normal" },
      { name: "Frižider 2", value: "5.1°C", status: "normal" },
      { name: "Magacin", value: "8.6°C", status: "alarm" },
    ],
  },
  {
    name: "Apoteka Voždovac",
    address: "Vojvode Stepe 88",
    sensors: [
      { name: "Frižider vakcine", value: "4.3°C", status: "normal" },
      { name: "Komora", value: "3.9°C", status: "normal" },
    ],
  },
  {
    name: "Hladnjača Centar",
    address: "Industrijska zona bb",
    sensors: [
      { name: "Komora A", value: "2.8°C", status: "normal" },
      { name: "Komora B", value: "3.1°C", status: "normal" },
    ],
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

export default function DashboardPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(10);

  const chartWidth = 760;
  const chartHeight = 260;
  const padding = 20;

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
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 py-14 text-[#0B1B2B] sm:px-6 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-40px] h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#123A5A]/10 bg-[#123A5A]/5 px-4 py-2 text-sm font-semibold text-[#123A5A]">
            Dashboard Preview
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Pregled sistema koji
            <span className="block text-[#123A5A]">stvarno koristiš u radu</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Lokacije, senzori, status, trenutna temperatura, min/max podešavanja,
            istorija merenja i izveštaji — sve u logici koja odgovara stvarnom
            ColdControl dashboard-u.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Lokacije
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                  Pregled objekata i senzora
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-[#123A5A]/10 bg-[#123A5A]/5 px-3 py-1 text-xs font-semibold text-[#123A5A]">
                Više lokacija
              </span>
            </div>

            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.name}
                  className="rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-4 sm:rounded-[24px]"
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-base font-bold text-[#0B1B2B] sm:text-lg">
                        {location.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {location.address}
                      </p>
                    </div>

                    <span className="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-2">
                    {location.sensors.map((sensor) => (
                      <div
                        key={sensor.name}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#0B1B2B]">
                            {sensor.name}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                sensor.status === "alarm"
                                  ? "bg-red-400"
                                  : "bg-green-400"
                              }`}
                            />
                            <span
                              className={`text-xs font-medium ${
                                sensor.status === "alarm"
                                  ? "text-red-500"
                                  : "text-green-600"
                              }`}
                            >
                              {sensor.status === "alarm" ? "Alarm" : "Normalno"}
                            </span>
                          </div>
                        </div>

                        <div className="shrink-0 text-right">
                          <p className="text-xs text-slate-500">Trenutna</p>
                          <p
                            className={`text-base font-bold sm:text-lg ${
                              sensor.status === "alarm"
                                ? "text-red-500"
                                : "text-[#0B1B2B]"
                            }`}
                          >
                            {sensor.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Detalj senzora
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                  Ekran jednog senzora
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-[#9A6B00]">
                Realan prikaz
              </span>
            </div>

            <div className="rounded-[22px] border border-slate-200 bg-[#0B1B2B] p-4 text-white sm:rounded-[26px] sm:p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm text-white/55">Apoteka Zemun</p>
                  <h4 className="mt-1 text-xl font-bold sm:text-2xl">Magacin</h4>
                  <p className="mt-1 text-xs text-white/40">ID: 28-0001-AF23</p>
                </div>

                <span className="shrink-0 rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-semibold text-red-300">
                  Alarm
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/45">Trenutna</p>
                  <p className="mt-2 text-2xl font-extrabold text-red-400 sm:text-3xl">
                    8.6°C
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/45">Status</p>
                  <p className="mt-2 text-lg font-semibold text-white">online</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/45">Prosek</p>
                  <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    5.9°C
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/45">Min / Max</p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-[#091521] px-3 py-3">
                      <p className="text-xs text-white/40">Min</p>
                      <p className="mt-1 text-lg font-bold text-white">2.0°C</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#091521] px-3 py-3">
                      <p className="text-xs text-white/40">Max</p>
                      <p className="mt-1 text-lg font-bold text-white">8.0°C</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/45">Akcije</p>

                  <div className="mt-3 flex flex-col gap-2">
                    <button className="rounded-xl bg-green-400 px-4 py-2.5 text-sm font-bold text-[#04111d]">
                      Izveštaj
                    </button>
                    <button className="rounded-xl border border-white/10 bg-[#091521] px-4 py-2.5 text-sm font-semibold text-white">
                      Izmeni podatke
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {["1h", "6h", "24h", "7d", "all"].map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-xl px-3 py-1.5 text-sm font-semibold ${
                        index === 0
                          ? "bg-green-400 text-[#04111d]"
                          : "bg-[#091521] text-white/80"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#091521] p-3 sm:p-4">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
                  </div>

                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="relative h-40 w-full sm:h-48 md:h-56"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="tempArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.02" />
                      </linearGradient>

                      <linearGradient id="tempLine" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#fde047" />
                      </linearGradient>

                      <filter id="lineGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path d={areaPath} fill="url(#tempArea)" />

                    <polyline
                      points={linePoints}
                      fill="none"
                      stroke="url(#tempLine)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#lineGlow)"
                    />

                    <polyline
                      points={linePoints}
                      fill="none"
                      stroke="#ffffff"
                      strokeOpacity="0.12"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {hoveredPoint && (
                      <>
                        <line
                          x1={hoveredPoint.x}
                          y1={18}
                          x2={hoveredPoint.x}
                          y2={chartHeight - 18}
                          stroke="#ffffff"
                          strokeOpacity="0.18"
                          strokeDasharray="5 5"
                        />

                        <g transform={`translate(${hoveredPoint.x - 42}, ${hoveredPoint.y - 54})`}>
                          <rect
                            width="84"
                            height="34"
                            rx="10"
                            fill="#06111C"
                            stroke="rgba(255,255,255,0.10)"
                          />
                          <text
                            x="42"
                            y="14"
                            textAnchor="middle"
                            fontSize="10"
                            fill="rgba(255,255,255,0.55)"
                          >
                            {hoveredPoint.time}
                          </text>
                          <text
                            x="42"
                            y="26"
                            textAnchor="middle"
                            fontSize="12"
                            fontWeight="700"
                            fill="#fde047"
                          >
                            {hoveredPoint.temp.toFixed(1)}°C
                          </text>
                        </g>
                      </>
                    )}

                    {positionedPoints.map((point, index) => {
                      const isActive = hoveredIndex === index;

                      return (
                        <g
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(10)}
                          className="cursor-pointer"
                        >
                          <circle cx={point.x} cy={point.y} r={14} fill="transparent" />
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={isActive ? 7 : 5}
                            fill={isActive ? "#fde047" : "#22d3ee"}
                            stroke="#06111C"
                            strokeWidth="2"
                          />
                          {isActive && (
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r={12}
                              fill="none"
                              stroke="#fde047"
                              strokeOpacity="0.35"
                              strokeWidth="2"
                            />
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-white/40">
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>19:00</span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                <p className="text-sm text-slate-500">Hijerarhija</p>
                <p className="mt-1 text-base font-semibold text-[#0B1B2B]">
                  Lokacija → Senzor
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                <p className="text-sm text-slate-500">Kontrola</p>
                <p className="mt-1 text-base font-semibold text-[#0B1B2B]">
                  Limiti i status
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                <p className="text-sm text-slate-500">Dokumentacija</p>
                <p className="mt-1 text-base font-semibold text-[#0B1B2B]">
                  Graf i izveštaji
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-slate-200 bg-white px-4 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:mt-10 sm:px-6 sm:py-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Fokus na realnoj upotrebi
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
              Lepši prikaz, ali logika ostaje stvarna i uverljiva
            </h3>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/login"
              className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
            >
              Zakaži demo
            </Link>

            <Link
              href="/dashboard"
              className="rounded-2xl border border-slate-200 bg-[#0B1B2B] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#123A5A]"
            >
              Pogledaj dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}