'use client'

import React from "react"
import { ChevronDown, Moon, Bell, Zap, UserPlus, MoreHorizontal } from "lucide-react"

const NavbarDemo = () => {
    return (
        <nav className="fixed top-0 left-20 right-0 h-16 border-b border-white/5 bg-[#0C0C0C]/80 backdrop-blur-md flex items-center justify-between px-6 text-white z-40">
            {/* Left: Workspace Selector */}
            <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg cursor-pointer transition">
                <div className="w-5 h-5 bg-[#FF5C7E] rounded-md flex items-center justify-center text-[10px] font-bold">
                    W
                </div>
                <span className="text-sm font-medium">Workspace</span>
                <ChevronDown size={14} className="text-slate-400" />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Credits */}
                <div className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <span className="text-xs text-slate-300">0 credits</span>
                </div>

                {/* Upgrade Button */}
                <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <button className="relative flex items-center gap-1.5 px-4 py-1.5 bg-black border border-white/10 rounded-full text-xs font-semibold hover:bg-zinc-900 transition whitespace-nowrap">
                        <Zap size={12} className="text-yellow-400 fill-yellow-400" />
                        <span>Upgrade</span>
                    </button>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-slate-400 hover:text-white transition group">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF5C7E] border-2 border-[#0C0C0C] rounded-full"></span>
                </button>

                {/* Theme Toggle */}
                <button className="p-2 text-slate-400 hover:text-white transition">
                    <Moon size={20} className="text-cyan-400" />
                </button>

                {/* Add People */}
                <button className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition whitespace-nowrap">
                    <UserPlus size={16} />
                    <span>Add people</span>
                </button>

                {/* More */}
                <button className="p-2 text-slate-400 hover:text-white transition">
                    <MoreHorizontal size={20} />
                </button>
            </div>
        </nav>
    )
}

export default NavbarDemo
