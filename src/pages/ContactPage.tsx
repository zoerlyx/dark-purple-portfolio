import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { MagneticButton } from '../components/ui/MagneticButton';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';

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
            <div className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span>INDEX // 04</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase mb-6">
              LET&apos;S
              <br />
              <span className="text-neutral-400">TALK.</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest max-w-xl leading-relaxed">
              &ldquo;HAVE AN IDEA, PROJECT, OR OPPORTUNITY? LET&apos;S START A CONVERSATION.&rdquo;
            </p>
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
                  href="mailto:koushikizurro1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="py-6 flex items-center justify-between group hover:text-white transition-colors"
                >
                  <div>
                    <span className="text-neutral-400 block text-[10px] mb-1">01 // INBOX</span>
                    <span className="text-sm font-bold text-white group-hover:text-purple-300">
                      koushikizurro1@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com/in/koushik-portfolio"
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
                  href="https://github.com/koushik-portfolio"
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

              <div className="mt-12 p-6 rounded-sm bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400">
                <div className="text-purple-400 font-bold mb-2">AVAILABILITY // 2026</div>
                <p className="leading-relaxed font-sans text-neutral-300">
                  Accepting selected architectural advisory, full-stack software development projects, and data analytics consulting engagements.
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
                <div className="p-8 border border-purple-500/40 bg-purple-950/20 rounded-sm font-mono text-xs space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3 text-white font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    <span>TRANSMISSION RECEIVED</span>
                  </div>
                  <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                    Thank you, {name}. Your inquiry has been logged. I will review your note and respond promptly via {email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 underline text-purple-400 hover:text-purple-300 uppercase tracking-widest cursor-pointer"
                  >
                    Send another message
                  </button>
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
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
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
                      placeholder="e.g. elena@enterprise.com"
                      className="w-full bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
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
                      placeholder="Describe your project, architectural challenge, or opportunity..."
                      className="w-full bg-[#0a0a0f] border border-neutral-800 focus:border-purple-500 rounded px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <MagneticButton type="submit" variant="primary">
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5 ml-1" />
                    </MagneticButton>
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
