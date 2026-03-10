'use client'
import React from "react";

export default function About() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-5 py-24 overflow-hidden font-[Poppins,sans-serif]">

            {/* ── Ambient glow blobs ── */}
            <div className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-violet-500/20 blur-[120px] -z-10" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-pink-500/15 blur-[120px] -z-10" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-indigo-500/10 blur-[100px] -z-10" />

            {/* ── Badge ── */}
            <div className="flex items-center gap-2 bg-violet-500/15 border border-violet-400/35 text-violet-300 text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-5 z-10">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                Who We Are
            </div>

            {/* ── Headline ── */}
            <h1 className="z-10 text-4xl md:text-5xl font-bold text-center leading-tight bg-gradient-to-br from-white via-violet-300 to-pink-300 bg-clip-text text-transparent mb-4">
                Crafting Portfolios That<br />Leave a Lasting Impression
            </h1>
            <p className="z-10 text-sm text-slate-400 text-center max-w-lg leading-relaxed mb-14">
                We help professionals and creators build stunning, AI-powered portfolio sites — no code needed.
            </p>

            {/* ── Main glass card ── */}
            <div className="z-10 w-full max-w-5xl flex flex-col md:flex-row bg-white/[0.04] border border-white/10 rounded-3xl backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] overflow-hidden">

                {/* Image side */}
                <div className="relative md:w-[45%] min-h-[280px] overflow-hidden group">
                    <img
                        src="About.jpeg"
                        alt="About our platform"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/25 via-transparent to-pink-500/15 pointer-events-none" />

                    {/* Image caption badge */}
                    <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl">
                        <p className="text-slate-300 text-xs font-medium">Powered by</p>
                        <h4 className="text-white text-sm font-semibold">Pro Folio X ✨</h4>
                    </div>
                </div>

                {/* Content side */}
                <div className="flex-1 flex flex-col justify-center px-8 py-10 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
                        Our{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                            Latest Features
                        </span>
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed mb-8">
                        Ship beautiful frontends without the overhead — customizable, scalable, and
                        developer-friendly UI components built for real-world portfolios.
                    </p>

                    {/* Feature list */}
                    <div className="flex flex-col gap-4">

                        {/* Feature 1 */}
                        <div className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 transition-all duration-300 hover:bg-violet-500/10 hover:border-violet-400/30 hover:translate-x-1.5 cursor-default">
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-violet-500/30 to-indigo-500/20 border border-violet-400/30">
                                ⚡
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-100 mb-1">Lightning-Fast Performance</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Built with speed — minimal load times and optimized rendering for every device.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 transition-all duration-300 hover:bg-pink-500/10 hover:border-pink-400/30 hover:translate-x-1.5 cursor-default">
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-pink-500/30 to-violet-500/20 border border-pink-400/30">
                                🎨
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-100 mb-1">Beautifully Designed Components</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Modern, pixel-perfect UI components ready to impress on any project.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400/30 hover:translate-x-1.5 cursor-default">
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 border border-blue-400/30">
                                🧩
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-100 mb-1">Plug-and-Play Integration</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Simple setup with full support for React, Next.js and Tailwind CSS.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Stats row ── */}
            <div className="z-10 grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl mt-7">

                <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-violet-500/8 hover:border-violet-400/25">
                    <p className="text-3xl font-extrabold bg-gradient-to-br from-violet-300 to-pink-300 bg-clip-text text-transparent leading-none mb-2">10k+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Active Users</p>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-violet-500/8 hover:border-violet-400/25">
                    <p className="text-3xl font-extrabold bg-gradient-to-br from-violet-300 to-pink-300 bg-clip-text text-transparent leading-none mb-2">4.9★</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">User Rating</p>
                </div>

                <div className="col-span-2 md:col-span-1 bg-white/[0.04] border border-white/[0.09] rounded-2xl p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-violet-500/8 hover:border-violet-400/25">
                    <p className="text-3xl font-extrabold bg-gradient-to-br from-violet-300 to-pink-300 bg-clip-text text-transparent leading-none mb-2">50+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Templates</p>
                </div>

            </div>
        </section>
    );
}