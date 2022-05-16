const LoginForm = () => {
    return (
        <div className="w-full h-3/5 flex justify-center items-center">
            <div className="sm:w-2/5 xl:w-1/5 flex flex-col overflow-scroll">
                <div className="w-full border-2 rounded-lg py-3 px-3 flex flex-col overflow-scroll">
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-bold mb-1">
                                Username or email
                        </p>
                        <input 
                            className="w-full border rounded-md border-indigo-200 px-2 py-3 text-slate-500 focus:outline-none"  
                            placeholder="Username or email" 
                        />
                    </div>
                    <div className="w-full px-3 py-3">
                        <div className="w-full flex flex-row justify-between items-center">
                            <p 
                                className="text-sm text-left font-bold mb-1">
                                    Password
                            </p>
                            <div className="cursor-pointer">
                                <p className="text-xs text-left font-normal text-indigo-900 mb-1"> 
                                    Forgot Password?
                                </p>
                            </div>
                            
                        </div>
                        
                        <input 
                            className="w-full border rounded-md border-indigo-200 px-2 py-3 text-slate-500 focus:outline-none" 
                            placeholder="Enter password" 
                        />
                    </div>
                    <div className="w-full px-3 pt-1 pb-3">
                        <button className="w-full px-3 py-3 rounded-md shadow-md bg-emerald-400">
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="w-full border-2 rounded-lg py-3 px-3 mt-3 flex flex-row justify-center items-center">
                    <p className="text-sm text-left font-normal">New to Bag's?</p>
                    <div className="cursor-pointer pl-1">
                        <p className="text-sm text-left font-normal text-indigo-900">Create Account</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}


export default LoginForm;