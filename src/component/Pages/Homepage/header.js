const Header = () => {
    return (
        <div className="w-full h-24 ">
            <div className="w-full h-full flex flex-row desktop:justify-center tablet:justify-between">
                <div className="w-4/5 flex flex-row">
                    <div className="w-1/5 mr-10 flex flex-row-reverse items-center">
                        <p className="font-mono text-3xl font-bold text-indigo-500">
                            Bag                            
                        </p>
                    </div>
                    <div className="w-3/5 flex items-center justify-between">
                        <div className="w-2/4 flex flex-row items-center justify-between">
                            <div className="w-full flex flex-row items-center justify-between">
                                <p className="font-mono text-md font-light">
                                    Features
                                </p>
                                <p className="font-mono text-md font-light">
                                    Community
                                </p>
                                <p className="font-mono text-md font-light">
                                    Pricing
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-row-reverse items-center">
                            <p className="font-mono Menlo text-md font-light">
                                Sign in
                            </p>
                        </div>
                    </div>
                    <div className="w-1/5 ml-10 flex flex-row items-center">
                        <button className="font-mono text-md bg-indigo-300 px-3 py-3 rounded-md shadow-md">
                            Sign up 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header