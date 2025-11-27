import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BlogSkeleton } from "../components/Skeleton"

interface blogType {
    id: string,
    title: string,
    content: string,
    user:{
        firstName: string,
        lastName: string,
    }
}

export default function() {
    const {id}  = useParams()
    const [blog, setBlog] = useState<blogType>()
    const [loading, setLoading] = useState(true);
    async function getblog(){
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`)
        setBlog(res.data.blog);
        setLoading(false);
    }
    useEffect(()=>{
        getblog()
    },[])
    if (loading){
        return (
            <BlogSkeleton />
        )
    }
    return (
        <div  className=" flex justify-center mt-20  " >
            <div id="main" className="  flex w-[80%] " >
                <div id="content" className="  w-[80%] " >
                    <div id="title" className=" text-5xl font-serif font-semibold " >{blog?.title}</div>
                    <div id="content" className=" mt-5 text-xl font-serif whitespace-pre-line tracking-wider text-justify " >{blog?.content}</div>
                </div>
                <div id="user" className=" pl-5" >
                    <div className=" text-gray-700 text-md " >Author .</div>
                    <div className=" mt-1 flex " >
                        <div className=" mr-3 w-8 h-8 p-1 rounded-full border text-center bg-black text-white " >{blog?.user.firstName[0]}</div>
                        <div className=" mr-1 text-lg font-light " >{blog?.user.firstName}</div>
                        <div className=" text-lg font-light  " >{blog?.user.lastName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}