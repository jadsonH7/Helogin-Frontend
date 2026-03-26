import { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 h-14 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <h1 className="text-white font-bold text-lg tracking-tight">
                    He<span className="text-emerald-400">login</span>
                </h1>

                <button
                    className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir menu"
                >
                    <span className="w-5 h-px bg-zinc-400 group-hover:bg-white transition-colors duration-200" />
                    <span className="w-5 h-px bg-zinc-400 group-hover:bg-white transition-colors duration-200" />
                    <span className="w-3 h-px bg-zinc-400 group-hover:bg-white transition-colors duration-200 self-start" />
                </button>
            </header>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-72 bg-zinc-900 border-l border-zinc-800 shadow-2xl flex flex-col
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between px-6 h-14 border-b border-zinc-800">
                    <span className="text-white font-semibold text-sm tracking-wide">Menu</span>
                    <button
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200"
                        onClick={() => setOpen(false)}
                        aria-label="Fechar menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col px-3 py-4 gap-1">
                    {[
                        { label: "Dashboard", href: "#", icon: "⊞" },
                        { label: "Clientes",   href: "#", icon: "◎" },
                        { label: "Pedidos",    href: "#", icon: "◈" },
                        { label: "Configurações", href: "#", icon: "⊙" },
                    ].map(({ label, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 text-sm font-medium group"
                        >
                            <span className="text-zinc-600 group-hover:text-emerald-400 transition-colors duration-200 text-base">
                                {icon}
                            </span>
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Footer da sidebar */}
                <div className="mt-auto px-6 py-5 border-t border-zinc-800">
                    <p className="text-xs text-zinc-600 tracking-wide">v1.0.0 · Helogin</p>
                </div>
            </aside>
        </>
    );
};