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
                            className="w-full border rounded-md border-indigo-200 px-2 py-3 text-slate-500
                            focus:outline-none focus:border-fuchsia-800"
                            placeholder="Enter Primary Email" 
                        />
                    </div>
                    <div className="w-full px-3 py-3">
                        <p 
                            className="text-sm font-semibold font-Fira mb-1 text-slate-900">
                                Password
                        </p>
                        <label
                            className="flex flex-row justify-between items-center w-full border rounded-md
                            border-indigo-200 px-2 py-3 focus:border-fuchsia-800"
                        >
                            <input 
                                type="password" 
                                className="focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Enter Password" 
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 stroke-slate-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
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
                        <label
                            className="appearance-none flex flex-row justify-between items-center w-full border
                            rounded-md border-indigo-200 px-2 py-3 focus:border-fuchsia-800"
                        >
                            <input 
                                type="password" 
                                className="appearance-none focus:outline-none text-slate-500 w-full pr-2"
                                placeholder="Confirm Password" 
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 stroke-slate-500"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            >
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 stroke-rose-600"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </label>
                    </div>
                    <div className="w-full px-3 pt-1 pb-3">
                        {isloading && <button
                            disabled
                            className="w-full px-3 py-3 flex flex-row justify-center items-center rounded-md shadow-md
                            bg-green-200 font-semibold font-Inconsolata text-slate-900"
                        >
                            <svg
                                role="status"
                                className="inline w-5 h-5 mr-3 text-slate-800 fill-slate-200 stroke-slate-200 animate-spin"
                                 viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"/>
                            </svg>
                            Signing up...
                        </button>}
                        {isloading === false && <button
                            onClick={() => setLoading(true)}
                            className="
                                w-full px-3 py-3 flex flex-row justify-center items-center rounded-md shadow-md bg-green-300
                                font-semibold font-Inconsolata text-slate-900"
                        >
                            Sign up
                        </button>}
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