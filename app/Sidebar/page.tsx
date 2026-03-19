'use client'

import React from "react"
import { Search, History, Users, Plus, LayoutGrid, Megaphone, HelpCircle, Settings, Home, Layout, User, LogOut } from "lucide-react"

const RainbowButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 ${className}`}>
        <button className="px-5 text-sm py-2 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur whitespace-nowrap w-full">
            {children}
        </button>
    </div>
)

const SidebarPage = () => {
    const topItems = [
        { icon: <Search size={22} />, label: "Search" },
        { icon: <History size={22} />, label: "History" },
        { icon: <Users size={22} />, label: "Team" },
    ]

    const bottomItems = [
        { icon: <LayoutGrid size={22} />, label: "Apps" },
        { icon: <Megaphone size={22} />, label: "Updates" },
        { icon: <HelpCircle size={22} />, label: "Help" },
        { icon: <Settings size={22} />, label: "Settings" },
    ]

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-20 border border-white/10 bg-[#0C0C0C] backdrop-blur-md rounded-[2rem] flex flex-col items-center py-8 text-white max-md:hidden shadow-2xl z-50">
            {/* Logo */}
            <div className="mb-10 cursor-pointer hover:opacity-80 transition">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/MyLogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Top Items */}
            <div className="flex flex-col gap-6 items-center flex-1">
                {topItems.map((item) => (
                    <button 
                        key={item.label}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                        title={item.label}
                    >
                        {item.icon}
                    </button>
                ))}

                {/* Active Item (Coral/Pink) */}
                <button className="w-12 h-12 bg-[#FF5C7E] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,92,126,0.4)] hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>

                {/* Second Plus (Optional, but matching image) */}
                <button className="text-slate-400 hover:text-white transition" title="Add">
                    <Plus size={24} />
                </button>
            </div>

            {/* Bottom Items */}
            <div className="flex flex-col gap-6 items-center">
                {bottomItems.map((item) => (
                    <button 
                        key={item.label}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                        title={item.label}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
        </aside>
    )
}

export default SidebarPage