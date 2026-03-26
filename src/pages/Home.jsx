import { useEffect, useState } from "react";
import { api } from "../services/apiLogin";
import { Header } from "../components/Header";

export const Home = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        api.get('/home')
            .then((res) => setUser(res.data.user))
            .catch(() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
            });
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };
    if (!user) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <p className="text-zinc-400 text-sm tracking-widest uppercase animate-pulse">
                    Carregando...
                </p>
            </div>
        );
    }
    return (
        <>
            <Header />
            <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
                <div className="relative max-w-2xl w-full">
                    {/* Glow de fundo */}
                    <div className="absolute -inset-1 rounded-2xl blur-xl opacity-20" />

                    {/* Card principal */}
                    <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-2xl">

                        {/* Badge de status */}
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-emerald-400 tracking-widest uppercase font-medium">
                                Sessão ativa
                            </span>
                        </div>

                        <h1 className="text-3xl flex gap-3 font-bold text-white mb-2 tracking-tight">
                            React + Vite
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                com Tailwind
                            </span>
                        </h1>

                        <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                            Bem-vindo,{" "}
                            <span className="text-white font-semibold border-b border-emerald-500/50 pb-px">
                                {user.email}
                            </span>
                        </p>

                        <p className="text-zinc-500 mt-2 text-sm">
                            Esta é uma página de{" "}
                            <strong className="text-emerald-400 font-semibold">LOGIN</strong>{" "}
                            bem sucedido!
                        </p>

                        {/* Divider */}
                        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

                        <button
                            className="w-full py-3 cursor-pointer px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-sm font-medium tracking-wide border border-zinc-700 hover:border-zinc-500 transition-all duration-200 active:scale-95"
                            onClick={logout}
                        >
                            Sair da conta
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};