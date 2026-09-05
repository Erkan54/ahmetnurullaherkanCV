"use client";

import React from "react";

interface SystemDiagramProps {
  type: "network-mockup" | "3d-coordinate" | "browser-mockup" | "academic-mockup";
}

export const SystemDiagram: React.FC<SystemDiagramProps> = ({ type }) => {
  if (type === "network-mockup") {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#161616] rounded-[18px] overflow-hidden border border-[#262626] flex flex-col justify-between p-6 select-none group-hover:border-[#383838] transition-colors duration-normal">
        {/* Subtle Dark Grid */}
        <div className="absolute inset-0 engineering-grid-dark opacity-30 pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#888888] border-b border-[#282828] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-micro uppercase text-[#D4D4D4] font-medium">P2P_MESH // ZERO_CELLULAR</span>
          </div>
          <span className="text-[10px] text-[#777777]">HOP_PROPAGATION: MULTI</span>
        </div>

        {/* Interactive SVG Mesh Flow */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-3">
          <svg viewBox="0 0 540 240" className="w-full h-full max-h-[220px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 70 120 L 200 65 L 340 175 L 470 120" stroke="#333333" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M 70 120 Q 200 120 340 175" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M 200 65 L 470 120" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="2 2" />

            {/* Node 1: Phone A (Disaster Victim) */}
            <g>
              <circle cx="70" cy="120" r="26" fill="#1C1C1C" stroke="#333333" strokeWidth="1.5" />
              <circle cx="70" cy="120" r="6" fill="#EF4444" className="animate-ping" />
              <circle cx="70" cy="120" r="6" fill="#EF4444" />
              <text x="70" y="166" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="inherit" fontWeight="600">PHONE_A</text>
              <text x="70" y="180" textAnchor="middle" fill="#777777" fontSize="9" fontFamily="inherit">ORIGIN</text>
            </g>

            {/* Signal Wave 1 */}
            <path d="M 110 100 A 30 30 0 0 1 110 140" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 120 92 A 45 45 0 0 1 120 148" stroke="#666666" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />

            {/* Node 2: Phone B (Relay 1) */}
            <g>
              <circle cx="200" cy="65" r="22" fill="#1C1C1C" stroke="#333333" strokeWidth="1.5" />
              <circle cx="200" cy="65" r="5" fill="#3B82F6" />
              <text x="200" y="32" textAnchor="middle" fill="#D4D4D4" fontSize="10" fontFamily="inherit" fontWeight="600">PHONE_B</text>
              <text x="200" y="44" textAnchor="middle" fill="#777777" fontSize="8" fontFamily="inherit">Wi-Fi Direct</text>
            </g>

            {/* Node 3: Phone C (Relay 2) */}
            <g>
              <circle cx="340" cy="175" r="22" fill="#1C1C1C" stroke="#333333" strokeWidth="1.5" />
              <circle cx="340" cy="175" r="5" fill="#3B82F6" />
              <text x="340" y="215" textAnchor="middle" fill="#D4D4D4" fontSize="10" fontFamily="inherit" fontWeight="600">PHONE_C</text>
              <text x="340" y="227" textAnchor="middle" fill="#777777" fontSize="8" fontFamily="inherit">Bluetooth LE</text>
            </g>

            {/* Signal Wave 2 */}
            <path d="M 430 100 A 30 30 0 0 0 430 140" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />

            {/* Node 4: Rescue Team Hub */}
            <g>
              <circle cx="470" cy="120" r="28" fill="#1C1C1C" stroke="#10B981" strokeWidth="2" />
              <circle cx="470" cy="120" r="8" fill="#10B981" />
              <text x="470" y="168" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="inherit" fontWeight="700">RESCUE_HUB</text>
              <text x="470" y="182" textAnchor="middle" fill="#777777" fontSize="9" fontFamily="inherit">GATEWAY</text>
            </g>
          </svg>
        </div>

        {/* Bottom Technical Protocol Specs */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#888888] border-t border-[#282828] pt-3">
          <span>PACKET_ENCRYPTION: AES-256</span>
          <span className="hidden sm:inline">P2P_DISCOVERY: AUTONOMOUS</span>
          <span className="text-[#34D399]">VERIFIED: 5,000+ USERS</span>
        </div>
      </div>
    );
  }

  if (type === "3d-coordinate") {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#161616] rounded-[18px] overflow-hidden border border-[#262626] flex flex-col justify-between p-6 select-none group-hover:border-[#383838] transition-colors duration-normal">
        {/* Subtle Dark Grid */}
        <div className="absolute inset-0 engineering-grid-dark opacity-35 pointer-events-none" />

        {/* Top Header with Coordinates */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-[#888888] border-b border-[#282828] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-micro uppercase text-[#D4D4D4] font-medium">3D_SPATIAL_SOLVER // KALMAN</span>
          </div>
          <span className="text-[10px] text-[#777777]">TRILATERATION: ACTIVE</span>
        </div>

        {/* Center Isometric 3D Coordinate System */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-2">
          <svg viewBox="0 0 500 240" className="w-full h-full max-h-[220px]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#262626" strokeWidth="1">
              <line x1="250" y1="130" x2="100" y2="200" />
              <line x1="250" y1="130" x2="400" y2="200" />
              <line x1="250" y1="130" x2="250" y2="20" />
              
              <line x1="175" y1="165" x2="325" y2="235" strokeDasharray="3 3" />
              <line x1="325" y1="165" x2="175" y2="235" strokeDasharray="3 3" />
            </g>

            <text x="90" y="210" fill="#888888" fontSize="10" fontFamily="inherit" fontWeight="600">X-AXIS (LAT)</text>
            <text x="410" y="210" fill="#888888" fontSize="10" fontFamily="inherit" fontWeight="600">Y-AXIS (LONG)</text>
            <text x="250" y="15" textAnchor="middle" fill="#06B6D4" fontSize="10" fontFamily="inherit" fontWeight="700">Z-AXIS (DEPTH)</text>

            <g>
              <circle cx="160" cy="180" r="10" fill="#1F2937" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="160" cy="180" r="3" fill="#60A5FA" />
              <text x="160" y="202" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="inherit">NODE_α</text>

              <circle cx="340" cy="180" r="10" fill="#1F2937" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="340" cy="180" r="3" fill="#60A5FA" />
              <text x="340" y="202" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="inherit">NODE_β</text>

              <circle cx="250" cy="90" r="10" fill="#1F2937" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="250" cy="90" r="3" fill="#60A5FA" />
              <text x="250" y="75" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="inherit">NODE_γ</text>
            </g>

            <line x1="160" y1="180" x2="260" y2="155" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.8" />
            <line x1="340" y1="180" x2="260" y2="155" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.8" />
            <line x1="250" y1="90" x2="260" y2="155" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.8" />

            <g>
              <circle cx="260" cy="155" r="18" fill="none" stroke="#F59E0B" strokeWidth="1" className="animate-ping" opacity="0.75" />
              <circle cx="260" cy="155" r="14" fill="#251F14" stroke="#F59E0B" strokeWidth="1.5" />
              <circle cx="260" cy="155" r="4" fill="#FBBF24" />
              <text x="260" y="132" textAnchor="middle" fill="#FBBF24" fontSize="10" fontFamily="inherit" fontWeight="700">SURVIVOR [EST]</text>
            </g>
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#888888] border-t border-[#282828] pt-3">
          <span>X: 14.82m · Y: -08.41m</span>
          <span className="text-cyan-400 font-medium">EST_DEPTH (Z): -3.20m ±0.15m</span>
          <span className="hidden sm:inline">NOISE_FILTER: KALMAN + GATING</span>
        </div>
      </div>
    );
  }

  if (type === "academic-mockup") {
    return (
      <div className="relative w-full aspect-[16/10] bg-[#161616] rounded-[18px] overflow-hidden border border-[#262626] flex flex-col group-hover:border-[#383838] transition-colors duration-normal">
        {/* Workspace Chrome Header */}
        <div className="h-10 bg-[#1C1C1C] border-b border-[#282828] px-4 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
            <span className="text-[11px] text-[#CCCCCC] font-medium">TAKIM YILDIZI // ACADEMIC_WORKSPACE</span>
          </div>
          <div className="text-[10px] text-[#888888]">CAMPUS_ENCLAVE: SUBÜ</div>
        </div>

        {/* Workspace Content: Kanban & Collaboration Mockup */}
        <div className="flex-1 p-5 flex flex-col justify-between bg-[#121212] relative">
          <div className="grid grid-cols-3 gap-3 relative z-10">
            {/* Column 1: Backlog */}
            <div className="bg-[#181818] border border-[#262626] rounded-lg p-3">
              <div className="text-[10px] text-[#888888] uppercase mb-2">Backlog (03)</div>
              <div className="bg-[#202020] rounded p-2 text-xs text-[#CCCCCC] mb-1.5">
                Hardware SPI Pinout Spec
              </div>
              <div className="bg-[#202020] rounded p-2 text-xs text-[#CCCCCC]">
                Review Sensor Datasheet
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-[#181818] border border-[#262626] rounded-lg p-3">
              <div className="text-[10px] text-emerald-400 uppercase mb-2">In Progress (02)</div>
              <div className="bg-[#202020] rounded p-2 text-xs text-white border-l-2 border-emerald-400 mb-1.5">
                Kalman Filter Tuning
              </div>
              <div className="bg-[#202020] rounded p-2 text-xs text-white border-l-2 border-emerald-400">
                Peer Review: C++ Firmware
              </div>
            </div>

            {/* Column 3: Completed */}
            <div className="bg-[#181818] border border-[#262626] rounded-lg p-3">
              <div className="text-[10px] text-[#888888] uppercase mb-2">Completed (08)</div>
              <div className="bg-[#202020] rounded p-2 text-xs text-[#888888] line-through mb-1.5">
                Lab Server VM Deployment
              </div>
              <div className="bg-[#202020] rounded p-2 text-xs text-[#888888] line-through">
                TrueNAS Storage Mount
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-[#777777] pt-2 border-t border-[#222222]">
            <span>TEAM: EMBEDDED_SYSTEMS_LAB</span>
            <span>MEMBERS: 4 ACTIVE STUDENTS</span>
            <span className="text-emerald-400">SYNC: REAL_TIME</span>
          </div>
        </div>
      </div>
    );
  }

  // browser-mockup (QR Order System)
  return (
    <div className="relative w-full aspect-[16/10] bg-[#161616] rounded-[18px] overflow-hidden border border-[#262626] flex flex-col group-hover:border-[#383838] transition-colors duration-normal">
      <div className="h-10 bg-[#1C1C1C] border-b border-[#282828] px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>
        <div className="bg-[#121212] border border-[#2D2D2D] rounded px-3 py-1 text-[11px] text-[#888888] flex items-center gap-1.5 w-60 justify-center">
          <span className="text-[10px] text-emerald-400">🔒</span>
          <span>pos.qr-order.systems/live</span>
        </div>
        <div className="text-[10px] text-[#666666]">v2.4</div>
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid-dark opacity-20 pointer-events-none" />

        <div className="grid grid-cols-3 gap-3 relative z-10">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
            <div className="text-[10px] text-[#888888] uppercase">Active Tables</div>
            <div className="text-xl font-semibold text-white mt-0.5">18 / 22</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
            <div className="text-[10px] text-[#888888] uppercase">Avg Dispatch Time</div>
            <div className="text-xl font-semibold text-emerald-400 mt-0.5">&lt; 180ms</div>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3">
            <div className="text-[10px] text-[#888888] uppercase">Order Queue</div>
            <div className="text-xl font-semibold text-white mt-0.5">04 Pending</div>
          </div>
        </div>

        <div className="bg-[#181818] border border-[#282828] rounded-lg p-3.5 relative z-10 flex items-center justify-between mt-2">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-amber-500/20 text-amber-300 text-[10px] rounded">
              TABLE #07
            </span>
            <div>
              <div className="text-sm font-medium text-white">2x Espresso Macchiato, 1x San Sebastian</div>
              <div className="text-[11px] text-[#777777] mt-0.5">Scanned via QR · Dispatched via WebSocket</div>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] rounded border border-emerald-800">
              IN_KITCHEN
            </span>
            <div className="text-[10px] text-[#666666] mt-1">42s ago</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] text-[#777777] pt-2 border-t border-[#222222]">
          <span>SOCKET_STATUS: CONNECTED</span>
          <span>POSTGRES_LATENCY: 4ms</span>
          <span>SESSION: SECURE</span>
        </div>
      </div>
    </div>
  );
};
