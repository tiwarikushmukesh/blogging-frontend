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
        <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
            
            {/* MAIN CONTENT */}
            <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
                {blog?.title}
            </h1>

            <div className="mt-6 text-lg md:text-xl font-serif whitespace-pre-line tracking-wide text-justify">
                {blog?.content}
            </div>
            </div>

            {/* AUTHOR SECTION (Only visible on large screens) */}
            <div className="hidden lg:block w-64  pl-8">
            <div className="text-gray-700 text-sm uppercase tracking-wide">
                Author
            </div>

            <div className="mt-3 flex items-center">
                <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-medium text-lg">
                {blog?.user.firstName[0]}
                </div>

                <div>
                <div className="text-lg font-medium">{blog?.user.firstName} {blog?.user.lastName}</div>
                </div>
            </div>
            </div>

        </div>
        </div>

    )
}