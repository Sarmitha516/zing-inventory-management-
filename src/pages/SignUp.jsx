import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('isLoggedIn', 'true');
        } catch (e) {}
        navigate('/');
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                // style={{ backgroundImage: "url('/BG.png')" }}
            />
            <div className="relative z-10 w-full max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-purple-200/40 bg-white/80 backdrop-blur">
                    <div className="hidden lg:block lg:col-span-8 min-h-[660px] bg-cover bg-center" style={{ backgroundImage: "url('/login-bg.png')" }} />
                    <div className="lg:col-span-4 p-8 lg:p-14 flex items-center">
                        <div className="w-full">
                            <div className="flex items-center justify-center mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-70"></div>
                                        <img 
                                            className="relative w-12 h-12 rounded-full border-2 border-purple-300/60 shadow-lg" 
                                            src="/logo.svg" 
                                            alt="LOGO" 
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent">
                                           ZING
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent mb-8 text-center">Create Account</h1>
                            <form onSubmit={onSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-1.5">Username</label>
                                    <input id="username" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition" placeholder="Choose a username" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                                    <input id="password" type="password" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition" placeholder="Create a password" />
                                </div>
                                <div>
                                    <label htmlFor="confirm" className="block text-sm font-semibold text-slate-700 mb-1.5">Confirm Password</label>
                                    <input id="confirm" type="password" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition" placeholder="Confirm your password" />
                                </div>
                                <button type="submit" className="w-full py-3 rounded-xl font-semibold text-white shadow-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition">Sign Up</button>
                            </form>
                            <p className="mt-5 text-center text-sm text-slate-600">Already have an account? <a href="/login" className="text-purple-700 hover:underline">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


