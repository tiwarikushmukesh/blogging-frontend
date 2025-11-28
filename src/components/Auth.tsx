import { useState } from "react"
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context-api/AuthContext";
const url = import.meta.env.VITE_BACKEND_URL;

interface loginValueType {
    firstName: string;
    lastName: string;
    email: string;
    password : string;
    confirmPassword : string
}

export default function ({type}:{type: "create" | "login"}) {
    const navigate = useNavigate();
    const [value, setValue] = useState<loginValueType>({
        firstName: "",
        lastName: "",
        email : "",
        password : "",
        confirmPassword: "",
    });
    const [response, setResponse] = useState("")
    const {setIsLoggeIn} = useAuth();
    const isCreate = type === "create";

    // create account function 
    async function createAccount (value : loginValueType) { 
        if (value.password !== value.confirmPassword){ 
            setResponse("Password differ");
            return
        }
        try{
            await axios.post(`${url}/user/signup`, {
                firstName : value.firstName,
                lastName : value.lastName,
                email : value.email,
                password : value.password
            })
            navigate("/login");
        }catch(err:any){
           setResponse(err.response?.data?.message || "Error Login user")
        }

    }

    // login account function
    async function loginAccount (value:loginValueType) {
        try{
            await axios.post(`${url}/user/signin`,{
                email: value.email,
                password: value.password,
            })
            setIsLoggeIn(true);
            navigate("/");
        }catch(err : any){
            setResponse(err.response?.data?.message || "Error Login user")
        }
    }

    return (
        <div className=" h-screen flex flex-col justify-center items-center relative">
            <div className=" text-3xl lg:text-5xl font-bold mb-1  " >
                {type === "create" ? "Create an account" : "Login an account"}
            </div>

            <div className=" text-lg lg:text-2xl font-light text-gray-400 mb-6 " >
                {type === "create" ? "Already have an account? " : "Don't have an account? "}
                <Link to={type === "create" ? "/Login" : "/Signup"} className=" underline ">
                    {type === "create" ? "Login" : "Create"}
                </Link>
            </div>

            {
                isCreate && (
                    <>
                        <Input name="firstName" placeholder="John" onChange={(e)=>{
                            setValue({
                                ...value,
                                firstName: e.target.value
                            })
                        }} />
                        <Input name="lastName" placeholder="Doe" onChange={(e)=>{
                            setValue({
                                ...value,
                                lastName: e.target.value
                            })
                        }} />
                    </>
                )
            }

            <Input name="Email" placeholder="johndoe@gmail.com" onChange={(e)=>{
                setValue({
                    ...value,
                    email: e.target.value
                })
            }} />
            <Input name="Password" type="password" placeholder="password" onChange={(e)=>{
                setValue({
                    ...value,
                    password: e.target.value
                })
            }}/>

            {
                isCreate && 
                (<>
                    <Input name="Confirm Password" placeholder="confirm password" type="password" onChange={(e)=>{
                        setValue({
                            ...value,
                           confirmPassword : e.target.value 
                        })
                    }} /> 
                </>)
            }

            {response && <p className=" text-red-800 " >{response}</p>}

            {
                type === "create" ? <button onClick={()=> createAccount(value)} className=" border mt-4 p-2 w-80 sm:w-100 lg:w-130 h-12 rounded-md bg-gray-700 text-white text-lg hover:bg-gray-950 cursor-pointer " >Sign Up</button> : <button onClick={()=> loginAccount(value)} className=" border mt-4 p-2 w-80 sm:w-100 lg:w-130 h-12 rounded-md bg-gray-700 text-white text-lg hover:bg-gray-950 cursor-pointer " >Login</button>
            }
        </div>
    )
}