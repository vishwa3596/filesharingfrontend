import { useState } from "react"

const Signupform = () => {
    const [isloading, setLoading] = useState(false)
    return (
        <div className="w-full h-4/5 flex justify-center items-center overflow-visible">
            <div className="sm:w-3/4 md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/4 flex flex-col">
                <div className="w-full px-3 py-3 border-2 rounded-md flex flex-col">
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-semibold font-Fira mb-1 text-slate-900">
                                Primary Email
                        </p>
                        <input 
                            className="w-full border rounded-md border-indigo-200 px-2 py-3 text-slate-500 focus:outline-none focus:border-fuchsia-800"
                            placeholder="Enter Primary Email" 
                        />
                    </div>
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-semibold font-Fira mb-1 text-slate-900">
                                Password
                        </p>
                        <label className="flex flex-row justify-between items-center w-full border rounded-md border-indigo-200 px-2 py-3 focus:border-fuchsia-800">
                            <input 
                                type="password" 
                                className="focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Enter Password" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" 
                                />
                            </svg>
                        </label>
                    </div>
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-semibold font-Fira mb-1 text-slate-900">
                                Confirm Password
                        </p>
                        <label className="appearance-none flex flex-row justify-between items-center w-full border rounded-md border-indigo-200 px-2 py-3 focus:border-fuchsia-800">
                            <input 
                                type="password" 
                                className="appearance-none focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Confirm Password" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </label>
                    </div>
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-semibold font-Fira mb-1 text-slate-900">
                                Public Username
                        </p>
                        <label className="flex flex-row justify-between items-center w-full border rounded-md border-indigo-200 px-2 py-3 focus:border-fuchsia-800">
                            <input 
                                type="text" 
                                className="focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Assigned username" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-rose-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </label>
                    </div>
                    <div className="w-full px-3 pt-1 pb-3">
                        <button className="w-full px-3 py-3 rounded-md shadow-md bg-green-300 font-semibold font-Inconsolata text-slate-900" onClick={() => setLoading(prevState => !prevState)}>
                            
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="w-full px-3 py-3 mt-3 border-2 rounded-md flex flex-row justify-center items-center">
                    <p className="text-sm text-left font-medium font-Fira">Existing Account?</p>
                    <div className="cursor-pointer pl-1">
                        <p className="text-sm text-left font-semibold font-Inconsolata text-indigo-700">Sign in</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signupform