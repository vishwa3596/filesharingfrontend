import { Link } from "react-router-dom"

const Header = () => {
    
    return (
        <div className="w-full h-24 flex flex-row justify-center items-center">
            <div className="w-3/5 h-full flex flex-row items-center">
                <p className="w-24 text-2xl font-semibold"> Bag's </p>
                <div className="w-11/12 px-3 flex flex-row justify-between items-center">
                    <div className="w-fit px-3 flex flex-row justify-between">
                        <p className="text-md pr-3 text-left font-light">Features</p>
                        <p className="text-md px-3 text-left font-light">Pricing</p>
                        <p className="text-md px-3 text-left font-light">Community</p>
                    </div>
                    <div>
                        <p className="text-md font-light cursor-pointer">
                            <Link to="/auth/login">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
                <button className="w-24 px-3 py-2 bg-indigo-300 rounded-lg shadow-sm">
                    <Link to="/auth/signup">
                        Sign up
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Header