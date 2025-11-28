import axios from "axios";
const url = import.meta.env.VITE_BACKEND_URL;
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {BlogCardSkeletion} from "../components/Skeleton";

interface AuthContextType {
    isLoggedIn : boolean;
    setIsLoggeIn : (value:boolean) => void
    user : {
        id : string,
        email : string,
        firstName: string,
        lastName: string
    },
};
interface userType {
    id : string,
    email : string,
    firstName: string,
    lastName: string
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider ({children} : {children : ReactNode}){    //object destructing of props and type of children 
    const [isLoggedIn, setIsLoggeIn] = useState(false);
    const [user, setUser] = useState<userType>({
        id: "",
        email: "",
        firstName: "",
        lastName: ""
    })
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function check () {
            const response = await axios.get(`${url}/user/me`,{
                withCredentials: true
            });
            if (response.data.authentication) {
                setIsLoggeIn(true)
                setUser(response.data.user)
            };
           setLoading(false); 
        };
        check()  
    },[]);
    if (loading) {
        return (
            <div>
                <div className=" border-b h-[75px] flex justify-center bg-white animate-pulse " >
                    <div className=" flex justify-between items-center w-[1192px] h-[75px]  " >
                        <div className=" bg-gray-300 rounded-xl  w-[130px] h-9 " ></div>
                        <div>
                            <div className="bg-gray-300/80 rounded-xl w-[130px] h-9"></div> 
                        </div>
                    </div>
                </div>
                <div className="pt-10 h-screen   flex flex-col items-center ">
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                </div>
            </div>
        )
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggeIn, user}} >
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
    return ctx
}