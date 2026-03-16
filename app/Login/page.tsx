'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    
    const [rememberMe, setRememberMe] = useState(false);

     type FormData = {
            email:string,
            password:string,
        }
        const[formData,setFormData] = useState<FormData>({
            email:"",
            password:"", 
        })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                .auth-page * { font-family: 'Inter', sans-serif; }
                .auth-input::placeholder { color: #6b7280; }
                .auth-input:focus { outline: none; }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .auth-card { animation: fadeUp 0.5s ease both; }
                .social-btn {
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 9999px;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: rgba(255,255,255,0.05);
                    padding: 10px 0;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                }
                .social-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); }
                .field-wrap {
                    display: flex; align-items: center; gap: 10px;
                    height: 48px; width: 100%;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 9999px;
                    background: rgba(255,255,255,0.04);
                    padding-left: 20px;
                    transition: border-color 0.2s;
                }
                .field-wrap:focus-within { border-color: #14b8a6; }
                .divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.1); }
            `}</style>

            <div className="auth-page min-h-screen bg-[#0C0414] flex items-center justify-center px-4">
                
                <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#D043FF] blur-[90px] opacity-25 z-0" />

                <div className="auth-card relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-10 shadow-2xl">
                    
                    <div className="mb-8 text-center">
                        <img src="/MyLogo.jpeg" alt="Logo" className="w-14 h-14 rounded-xl object-cover mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-white">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-400">Welcome back! Please sign in to continue.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 ml-40">
                       
                        <button type="button" aria-label="Sign in with Google" className="social-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#login_g)">
                                    <path d="M12 9.818V14.466h6.458c-.284 1.494-1.135 2.76-2.411 3.61l3.895 3.022C22.21 19.004 23.52 15.928 23.52 12.273c0-.851-.077-1.669-.218-2.455L12 9.818Z" fill="#4285F4" />
                                    <path d="M5.277 14.284 4.398 14.957l-3.11 2.421C3.264 21.295 7.31 24 12.001 24c3.24 0 5.957-1.069 7.942-2.902l-3.895-3.022c-1.069.72-2.432 1.157-4.047 1.157-3.12 0-5.77-2.105-6.72-4.942l-.004-.007Z" fill="#34A853" />
                                    <path d="M1.287 6.622A11.963 11.963 0 0 0 0 12c0 1.942.469 3.764 1.287 5.378L5.28 14.28A7.16 7.16 0 0 1 4.898 12c0-.797.142-1.56.382-2.28L1.287 6.622Z" fill="#FBBC05" />
                                    <path d="M12.002 4.778c1.767 0 3.338.61 4.592 1.789l3.437-3.437C17.947 1.19 15.242 0 12.002 0 7.31 0 3.264 2.695 1.29 6.622l3.992 3.098c.95-2.836 3.6-4.942 6.72-4.942Z" fill="#EA4335" />
                                </g>
                                <defs><clipPath id="login_g"><rect width="24" height="24" fill="white" /></clipPath></defs>
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="divider-line" />
                        <span className="text-xs text-gray-500 whitespace-nowrap">or sign in with email</span>
                        <span className="divider-line" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                       
                        <div className="field-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                            </svg>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="auth-input h-full w-full bg-transparent text-sm text-white"
                                required
                            />
                        </div>

                        <div className="field-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="auth-input h-full w-full bg-transparent text-sm text-white"
                                required
                            />
                        </div>

                        
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="peer hidden"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <span className="relative flex size-4 items-center justify-center rounded border border-white/20 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition">
                                    {rememberMe && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    )}
                                </span>
                                <span className="text-sm text-gray-400 select-none">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-teal-400 hover:text-teal-300 transition">Forgot password?</a>
                        </div>

                       
                        <button
                            type="submit"
                            className="mt-2 h-11 w-full cursor-pointer rounded-full bg-teal-500 hover:bg-teal-400 shadow-[0px_0px_20px_6px_rgba(20,184,166,0.35)] hover:shadow-[0px_0px_28px_10px_rgba(20,184,166,0.5)] text-white text-sm font-semibold transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>

                   
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link href="/SignUp" className="text-teal-400 hover:text-teal-300 underline transition">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}