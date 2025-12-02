import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context-api/AuthContext"
import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL

export default function Navbar () {
    const {isLoggedIn, setIsLoggeIn , user } = useAuth();
    const navigate = useNavigate();
    async function logout() {
        await axios.post(`${url}/user/logout`)
        setIsLoggeIn(false);
    }
    function dashboard(){
        navigate("/user")
    }
    async function createBlog(){
        const response = await axios.post(`${url}/blog/create`)
        const blogId = response.data.blog
        navigate(`/write/${blogId}`)
    }
    return (
        <div className="border-b h-[75px] bg-white flex justify-center">
        <div className="w-full max-w-6xl h-[75px] flex justify-between items-center px-4">
            
            {/* Logo */}
            <div className="text-2xl sm:text-3xl font-serif">
            StoryArc
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-3 sm:space-x-5">

            {isLoggedIn ? (
                <>
                <button
                    onClick={() => createBlog()}
                    className="text-sm sm:text-base font-serif"
                >
                    Write
                </button>

                <button
                    onClick={logout}
                    className="text-sm sm:text-base font-serif 
                    cursor-pointer "
                >
                    Logout
                </button>

                <div onClick={dashboard}  className=" border w-10 h-10 text-center text-xl pt-1 bg-black text-white rounded-full cursor-pointer " >{user.firstName[0]}</div>
                </>
            ) : (
                <>
                <Link
                    to="/login"
                    className="text-sm sm:text-base px-2 sm:px-4 py-2"
                >
                    Login
                </Link>

                <Link
                    to="/signup"
                    className="
                    text-sm sm:text-base 
                    border px-4 py-2 sm:py-3 
                    rounded-full 
                    bg-black text-white
                    "
                >
                    Get Started
                </Link>
                </>
            )}

            </div>
        </div>
        </div>

    )
}