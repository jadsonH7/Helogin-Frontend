import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/apiLogin";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setLoading(true);
        try {
            await api.post('/register', { email, password });
            alert("Usuário registrado com sucesso!");
            window.location.href = '/login';
        } catch (err) {
            alert(`Error: ${err.response?.data?.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
            {/* Glow de fundo */}
            <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-sm">
                {/* Glow no card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-2xl blur-xl opacity-20" />

                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-2xl">

                    {/* Logo / título */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            He<span className="text-emerald-400">login</span>
                        </h1>
                        <h2 className="text-zinc-400 text-sm mt-1">
                            Crie sua conta
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                onChange={(ev) => setEmail(ev.target.value)}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600
                                    focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40
                                    transition-all duration-200"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-zinc-500 tracking-widest uppercase font-medium">
                                Senha
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                onChange={(ev) => setPassword(ev.target.value)}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600
                                    focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40
                                    transition-all duration-200"
                            />
                        </div>

                        {/* Divider */}
                        <div className="my-2 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

                        {/* Botão */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95
                                text-zinc-950 text-sm font-semibold tracking-wide
                                transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-3.5 h-3.5 border-2 border-zinc-900/40 border-t-zinc-900 rounded-full animate-spin" />
                                    Criando conta...
                                </span>
                            ) : (
                                "Criar conta"
                            )}
                        </button>

                        {/* Link login */}
                        <p className="text-center text-xs text-zinc-600 mt-1">
                            Já tem uma conta?{" "}
                            <Link
                                to="/login"
                                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
                            >
                                Entrar
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};