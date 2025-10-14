import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState("login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[350px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900"
        >
            <h1 className="mt-10 text-3xl font-medium text-zinc-900 dark:text-white">
                {state === "login" ? "Login" : "Register"}
            </h1>
            <p className="pb-6 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Please {state === "login" ? "sign in" : "sign up"} to continue
            </p>

            {state !== "login" && (
                <div className="flex items-center w-full h-12 gap-2 pl-6 mt-4 overflow-hidden bg-white border rounded-full dark:bg-zinc-800 border-zinc-300/80 dark:border-zinc-700">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                        <path d="M20 21a8 8 0 0 0-16 0" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input type="text" placeholder="Name" className="w-full h-full text-sm bg-transparent outline-none text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400" name="name" value={data.name} onChange={onChangeHandler} required />
                </div>
            )}

            <div className="flex items-center w-full h-12 gap-2 pl-6 mt-4 overflow-hidden bg-white border rounded-full dark:bg-zinc-800 border-zinc-300/80 dark:border-zinc-700">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input type="email" placeholder="Email id" className="w-full h-full text-sm bg-transparent outline-none text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400" name="email" value={data.email} onChange={onChangeHandler} required />
            </div>

            <div className="flex items-center w-full h-12 gap-2 pl-6 mt-4 overflow-hidden bg-white border rounded-full dark:bg-zinc-800 border-zinc-300/80 dark:border-zinc-700">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 dark:text-zinc-400" viewBox="0 0 24 24" >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input type="password" placeholder="Password" className="w-full h-full text-sm bg-transparent outline-none text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400" name="password" value={data.password} onChange={onChangeHandler} required />
            </div>

            <div className="mt-5 text-left">
                <a className="text-sm text-indigo-500 dark:text-indigo-400" href="#" >
                    Forgot password?
                </a>
            </div>

            <button type="submit" className="w-full mt-2 text-white transition-opacity bg-indigo-500 rounded-full h-11 hover:opacity-90" >
                {state === "login" ? "Login" : "Create Account"}
            </button>

            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 mb-11">
                {state === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                <button type="button" className="text-indigo-500 dark:text-indigo-400" onClick={() => setState((prev) => prev === "login" ? "register" : "login")} >
                    {state === "login" ? "Register" : "Login"}
                </button>
            </p>
        </form>
  )
}

export default Login
