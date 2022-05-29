const LoginForm = () => {
	
    return (
        <div className="w-full h-4/5 flex flex-row justify-center items-center overflow-visible">
            <div className="sm:w-3/5 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/4 flex flex-col">
                <div className="w-full border-2 rounded-lg py-3 px-3 flex flex-col">
                    <div className="w-full px-3 py-3">
                        <p className="text-sm font-semibold font-Fira mb-1">
                                Username or email
                        </p>
                        <input 
                            className="w-full border rounded-md border-indigo-200 px-2 py-3 text-slate-500 focus:outline-none focus:border-fuchsia-800"
                            placeholder="Username or email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="w-full px-3 py-3">
                        <div className="w-full flex flex-row justify-between items-center">
                            <p 
                                className="text-sm text-left font-semibold font-Fira mb-1">
                                    Password
                            </p>
                            <div className="cursor-pointer">
                                <p className="text-xs text-left font-semibold font-Inconsolata text-indigo-700 mb-1">
                                    Forgot Password?
                                </p>
                            </div>
                            
                        </div>

                        <label
                            className="appearance-none flex flex-row justify-between items-center w-full border rounded-md border-indigo-200 px-2 py-3 focus:border-fuchsia-800">
                            <input
                                type="password"
                                className="appearance-none focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Enter Password"
                                autoComplete="off"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-500" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                            </svg>
                        </label>
                    </div>
                    <div className="w-full px-3 pt-1 pb-3">
                        <button className="w-full px-3 py-3 rounded-md shadow-md bg-green-300 font-semibold font-Inconsolata">
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="w-full border-2 rounded-lg py-3 px-3 mt-3 flex flex-row justify-center items-center">
                    <p className="text-sm text-left font-medium font-Fira">New to Bag's?</p>
                    <div className="cursor-pointer pl-1">
                        <p className="text-sm text-left font-semibold font-Inconsolata text-indigo-700">Create Account</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}


export default LoginForm;