import { Route, Routes } from "react-router-dom"
import Homepage from "./component/Pages/Homepage/homepage"
import Login from "./component/Pages/Login/login"
import Signup from "./component/Pages/Signup/signup"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
        </Routes>
    )
}

export default Routers;