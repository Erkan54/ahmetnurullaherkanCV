"use client";

import React from "react";

export const EngineeringVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[460px] aspect-square rounded-card border border-border-light bg-surface shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between p-6 select-none mx-auto"
      aria-hidden="true"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 engineering-grid opacity-75 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-muted border-b border-border-light/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-micro uppercase font-medium text-primary">SYS_01 // MESH_TOPOLOGY</span>
        </div>
        <span className="text-[10px] tracking-widest text-muted">CH_24 // 2.4GHz</span>
      </div>

      {/* Center Interactive SVG Diagram */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-2">
        <svg
          viewBox="0 0 340 280"
          className="w-full h-full max-w-[340px] max-h-[280px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111111" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#111111" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.25" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#111111" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Coordinate Axes Guides */}
          <line x1="170" y1="20" x2="170" y2="260" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="30" y1="140" x2="310" y2="140" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Concentric Signal Rings around Center */}
          <circle cx="170" cy="140" r="55" stroke="#111111" strokeWidth="1" strokeOpacity="0.08" className="animate-[pulse_6s_ease-in-out_infinite]" />
          <circle cx="170" cy="140" r="95" stroke="#111111" strokeWidth="1" strokeOpacity="0.05" className="animate-[pulse_8s_ease-in-out_infinite]" />

          {/* Connection Lines */}
          {/* Center to Top-Left (DEVICE) */}
          <line x1="170" y1="140" x2="80" y2="70" stroke="url(#lineGrad)" strokeWidth="1.25" />
          {/* Center to Top-Right (NETWORK) */}
          <line x1="170" y1="140" x2="260" y2="70" stroke="url(#lineGrad)" strokeWidth="1.25" />
          {/* Center to Bottom-Right (DATA) */}
          <line x1="170" y1="140" x2="250" y2="210" stroke="url(#lineGrad)" strokeWidth="1.25" />
          {/* Center to Bottom-Left (FIELD) */}
          <line x1="170" y1="140" x2="90" y2="210" stroke="url(#lineGrad)" strokeWidth="1.25" />
          {/* Inter-node perimeter lines */}
          <line x1="80" y1="70" x2="260" y2="70" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="260" y1="70" x2="250" y2="210" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="250" y1="210" x2="90" y2="210" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="90" y1="210" x2="80" y2="70" stroke="#E5E5E2" strokeWidth="1" strokeDasharray="2 2" />

          {/* Node 1: DEVICE (Top Left) */}
          <g className="transition-transform duration-slow hover:scale-110">
            <circle cx="80" cy="70" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="4" fill="#111111" />
            <text x="80" y="46" textAnchor="middle" fill="#666666" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              DEVICE
            </text>
          </g>

          {/* Node 2: NETWORK (Top Right) */}
          <g className="transition-transform duration-slow hover:scale-110">
            <circle cx="260" cy="70" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <circle cx="260" cy="70" r="4" fill="#111111" />
            <text x="260" y="46" textAnchor="middle" fill="#666666" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              NETWORK
            </text>
          </g>

          {/* Node 3: DATA (Bottom Right) */}
          <g className="transition-transform duration-slow hover:scale-110">
            <circle cx="250" cy="210" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <circle cx="250" cy="210" r="4" fill="#111111" />
            <text x="250" y="236" textAnchor="middle" fill="#666666" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              DATA
            </text>
          </g>

          {/* Node 4: FIELD (Bottom Left) */}
          <g className="transition-transform duration-slow hover:scale-110">
            <circle cx="90" cy="210" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <circle cx="90" cy="210" r="4" fill="#111111" />
            <text x="90" y="236" textAnchor="middle" fill="#666666" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              FIELD
            </text>
          </g>

          {/* Center Hub Node (CORE ENGINE) */}
          <g>
            <circle cx="170" cy="140" r="28" fill="url(#nodeGlow)" />
            <circle cx="170" cy="140" r="18" fill="#111111" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="170" cy="140" r="6" fill="#FFFFFF" />
            <text x="170" y="176" textAnchor="middle" fill="#111111" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.1em">
              CORE_HUB
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Metadata Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-muted border-t border-border-light/60 pt-3">
        <span className="tracking-micro">LATENCY: &lt;18ms</span>
        <span className="tracking-micro">PACKET_LOSS: 0.00%</span>
        <span className="tracking-micro uppercase text-primary font-medium">STATUS: ACTIVE</span>
      </div>
    </div>
  );
};
