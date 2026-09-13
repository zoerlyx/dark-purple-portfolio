"use client";

import React, { useState, useEffect } from "react";

export function TerminalStream() {
  const fullText =
    "Greetings. Are you available for high-impact software architecture and specialized consulting engagement?";

  const [typedText, setTypedText] = useState<string>("");
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (step === 0) {
      if (typedText.length < fullText.length) {
        timer = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 40);
      } else {
        timer = setTimeout(() => setStep(1), 600);
      }
    } else if (step === 1) {
      timer = setTimeout(() => setStep(2), 1200);
    } else if (step === 2) {
      timer = setTimeout(() => setStep(3), 4000);
    } else if (step === 3) {
      setTypedText("");
      setStep(0);
    }

    return () => clearTimeout(timer);
  }, [typedText, step]);

  return (
    <div className="relative w-full h-full min-h-[315px] flex flex-col justify-between p-2 font-mono overflow-hidden select-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        .font-terminal {
          font-family: 'VT323', monospace;
        }
      `}</style>

      {/* Grid Pixel with Radial Fade */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#3320521f_1px,transparent_1px),linear-gradient(to_bottom,#3320521f_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 85%)",
        }}
      />

      {/* Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-neutral-900 font-terminal text-sm">
        <div className="flex items-center gap-2 tracking-widest text-neutral-400">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
          <span> C:\SYS\LIVE_TERMINAL\EXEC.EXE </span>
        </div>
        <span className="text-neutral-500 tracking-widest">PORT: 443</span>
      </div>

      {/* Body / Stream */}
      <div className="relative z-10 mt-2 space-y-2 font-terminal text-base sm:text-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-neutral-500 tracking-wider">
            <span className="text-purple-400">&gt;</span>
            <span>INBOUND_INQUIRY</span>
          </div>

          <div className="text-neutral-200 pl-3 border-l-2 border-purple-500/40 leading-snug">
            &ldquo;{typedText}&rdquo;
            {step === 0 && (
              <span className="inline-block w-2.5 h-4 ml-1 bg-purple-400 animate-pulse align-middle" />
            )}
          </div>
        </div>

        {step >= 1 && (
          <div className="flex items-center gap-2 text-neutral-400 text-sm pt-1 animate-in fade-in duration-300">
            <span className="text-emerald-400">✔</span>
            <span>PAYLOAD_ENCRYPTED</span>
            <span className="text-neutral-600">//</span>
            {step === 1 ? (
              <span className="text-purple-400 animate-pulse">
                TRANSMITTING...
              </span>
            ) : (
              <span className="text-purple-400">SENT</span>
            )}
          </div>
        )}

        {step >= 2 && (
          <div className="p-3 bg-neutral-950/40 border border-neutral-800 rounded-sm space-y-1 backdrop-blur-xs animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="flex items-center justify-between text-xs tracking-wider">
              <span className="text-emerald-400 font-bold">STATUS: 200 OK</span>
              <span className="text-neutral-500">LATENCY: 14ms</span>
            </div>
            <p className="text-neutral-300 text-sm leading-tight">
              Transmission logged successfully. Dispatching parameters to <br/>
              zoerlyx - Fardho Z.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t border-neutral-900 flex items-center justify-between font-terminal text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-bold">&gt;_</span>
          <span className="animate-pulse tracking-widest">AWAITING_INPUT</span>
        </div>
        <span className="text-neutral-600">ENC: TLS_AES_256</span>
      </div>
    </div>
  );
}