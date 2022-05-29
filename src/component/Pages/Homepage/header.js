import { Link } from "react-router-dom"

const Header = () => {
    
    return (
        <div className="w-full h-24 flex flex-row justify-center items-center">
            <div className="w-3/5 h-full flex flex-row items-center">
                <p className="w-24 text-2xl font-bold font-Fira"> Bag's </p>
                <div className="w-11/12 px-3 flex flex-row justify-between items-center">
                    <div className="w-fit px-3 flex flex-row justify-between">
                        <p className="text-sm pr-3 text-left font-light font-Fira">Features</p>
                        <p className="text-sm px-3 text-left font-light font-Fira">Pricing</p>
                        <p className="text-sm px-3 text-left font-light font-Fira">Community</p>
                    </div>
                    <div>
                        <p className="text-sm font-light cursor-pointer font-Fira">
                            <Link to="/auth/login">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
                <Link to="/auth/signup">
                    <button className="w-24 px-3 py-2 bg-emerald-300 rounded-lg shadow-md font-Inconsolata font-semibold text-md">
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header