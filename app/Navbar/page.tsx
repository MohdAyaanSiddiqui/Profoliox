'use client'

import React from "react"
import { Bell, Zap, MoreHorizontal, User, Sparkles } from "lucide-react"

const NavbarDemo = () => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-fit z-40 max-md:top-4 max-md:w-[95%]">
            {/* Halo Glow behind the pill */}
            <div className="absolute inset-0 bg-teal-500/20 blur-[60px] rounded-full scale-110 opacity-50" />
            
            <nav className="relative flex items-center justify-between gap-6 px-6 py-2.5 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
                {/* Left: Project Brand with Animation */}
                <div className="flex items-center gap-3 pr-6 border-r border-white/5 cursor-pointer hover:opacity-80 transition group-hover:border-teal-500/20">
                    <div className="relative">
                        <div className="w-8 h-8 bg-zinc-900 border border-white/20 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition">
                            <Sparkles size={16} className="text-teal-400" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-teal-500 uppercase tracking-widest leading-none mb-1">PRO</span>
                        <span className="text-sm font-semibold text-white leading-none">Workspace</span>
                    </div>
                </div>

                {/* Center: Dynamic Info (Hidden on mobile) */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-2 group/credits cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover/credits:scale-150 transition animate-pulse" />
                        <span className="text-xs text-slate-400 font-medium">92% Build Capacity</span>
                    </div>
                    
                    <div className="flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition cursor-pointer">
                        <span className="text-[11px] font-semibold text-white whitespace-nowrap">0 Credits Available</span>
                        <Zap size={10} className="text-yellow-400 fill-yellow-400" />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 pl-6 border-l border-white/5 group-hover:border-teal-500/20">
                    <button className="relative p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition">
                        <Bell size={18} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full border-2 border-black" />
                    </button>
                    
                    <button className="flex items-center gap-2 pl-1 pr-3 py-1 bg-zinc-900 border border-white/10 rounded-full hover:border-teal-500/50 transition">
                       <div className="w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center">
                            <User size={14} className="text-teal-400" />
                       </div>
                       <span className="text-[11px] font-medium text-slate-300">Profile</span>
                    </button>

                    <button className="p-1.5 text-slate-500 hover:text-white transition">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavbarDemo
