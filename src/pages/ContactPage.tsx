import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import { TerminalStream } from "../components/ui/TerminalStream";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full pt-32 md:pt-40 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-neutral-800/80 pb-12 mb-16 md:mb-24">
          <Reveal>
            {/* Grid 2 Kolom (1:1 / grid-cols-2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
              
              {/* Kolom Kiri (Struktur & Teks Asli) */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>04 // CONTACT</span>
                </div>
                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase mb-6">
                  LET&apos;S
                  <br />
                  <span className="text-purple-400">TALK.</span>
                </h1>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest max-w-xl leading-relaxed">
                  &ldquo;HAVE AN IDEA, PROJECT, OR OPPORTUNITY? LET&apos;S START A CONVERSATION.&rdquo;
                </p>
              </div>

              {/* Kolom Kanan: Compact Hologram Radar Card */}
              <div className="w-full px-4 sm:px-8 md:px-12 h-auto">
                  <TerminalStream />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Channels (EMAIL, LINKEDIN, GITHUB) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6">
                DIRECT CHANNELS
              </div>

              <div className="divide-y divide-neutral-800 border-y border-neutral-800 font-mono text-xs uppercase tracking-widest">
                <a
                  href="mailto:zurrahmanfardho0@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="py-6 flex items-center justify-between group hover:text-white transition-colors"
                >
                  <div>
                    <span className="text-neutral-400 block text-[10px] mb-1">01 // INBOX</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300">
                      zurrahmanfardho0@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/in/fardho-zurrahman-6515553a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="py-6 flex items-center justify-between group hover:text-white transition-colors"
                >
                  <div>
                    <span className="text-neutral-400 block text-[10px] mb-1">02 // PROFESSIONAL</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300">
                      LINKEDIN
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href="https://github.com/zoerlyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="py-6 flex items-center justify-between group hover:text-white transition-colors"
                >
                  <div>
                    <span className="text-neutral-400 block text-[10px] mb-1">03 // CODE ARCHIVE</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300">
                      GITHUB
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>

              <div className="mt-12 text-xs font-mono text-neutral-400 text-justify">
                <div className="text-purple-400 font-bold mb-2">AVAILABILITY // 2026</div>
                <p className="leading-relaxed font-bold text-neutral-300">
                  Currently open for strategic architectural consulting, end-to-end software engineering, and advanced data analytics engagements. Partnering with visionary teams to build scalable solutions.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Minimal Form: Name, Email, Message */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6">
                DISPATCH A MESSAGE
              </div>

              {isSubmitted ? (
                <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800 rounded-sm font-mono text-xs space-y-5 animate-in fade-in duration-300">
                  
                  {/* Header Indicator */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
                    <div className="flex items-center gap-2 text-purple-400 font-bold tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                      <span>TRANSMISSION_RECEIVED // LOGGED</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20">
                      STATUS: 200 OK
                    </span>
                  </div>

                  {/* Body Text */}
                  <p className="text-neutral-300 font-bold text-xs sm:text-sm leading-relaxed">
                    Thank you, <span className="text-white font-mono font-semibold">{name}</span>. Your inquiry has been securely logged. I’ll review the details and respond to <span className="text-white font-mono font-semibold">{email}</span> within 24 hours.
                  </p>

                  {/* Action Area */}
                  <div className="pt-2 border-t border-neutral-900 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="inline-flex items-center gap-2 text-[11px] font-mono text-purple-400 hover:text-purple-300 uppercase tracking-widest cursor-pointer transition-colors group"
                    >
                      <span className="text-neutral-600 group-hover:text-purple-400">&gt;</span>
                      <span>SEND_ANOTHER_MESSAGE</span>
                    </button>

                    <span className="text-[10px] text-neutral-600 uppercase hidden sm:inline-block">
                      END_OF_LINE
                    </span>
                  </div>

                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2"
                    >
                      NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Adrian Sanjaya"
                      className="w-full font-mono bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2"
                    >
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. adrian@gmail.com"
                      className="w-full font-mono bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, technical challenge, or opportunity..."
                      className="w-full font-mono bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full relative group px-7 py-4 bg-neutral-950 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-colors duration-300 hover:text-white hover:border-neutral-600 active:scale-[0.98] overflow-hidden"
                    >
                      {/* Corner Brackets (HUD Style) */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-purple-500 group-hover:w-3 group-hover:h-3 transition-all duration-200" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-purple-500 group-hover:w-3 group-hover:h-3 transition-all duration-200" />

                      {/* Scanner Line Sweep */}
                      <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />

                      {/* Button Content */}
                      <span className="relative z-10 font-bold">SEND MESSAGE</span>
                      <Send className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45 group-hover:text-purple-400" />
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
