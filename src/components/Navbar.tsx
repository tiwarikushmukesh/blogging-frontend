import { Link } from "react-router-dom";
import { useAuth } from "../context-api/AuthContext"
import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL

export default function Navbar () {
    const {isLoggedIn, setIsLoggeIn} = useAuth();
    async function logout() {
        await axios.post(`${url}/user/logout`)
        setIsLoggeIn(false);
    }
    return (
        <div className=" border-b h-[75px] bg-white flex justify-center " >

            <div className=" flex justify-between items-center w-[1192px] h-[75px] " >

                <div className=" text-3xl font-serif " >Medium</div>
                <div>
                    {
                        isLoggedIn ?
                        <div> 
                            <Link to={"/write"} className=" text-base mr-5 font-serif " >Write</Link>
                            <button className=" text-base mx-2 border px-4 py-3 rounded-full bg-black text-white " onClick={logout} >Logout</button> 
                        </div>: 
                        <div>
                            <Link className=" text-base mx-2 px-4 py-3 " to={"/login"} >Login</Link>
                            <Link className=" text-base mx-2 border px-4 py-3 rounded-full bg-black text-white " to={"/signup"}>Get Started</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}