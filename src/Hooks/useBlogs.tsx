import axios from "axios";
import { useEffect, useState } from "react";

interface blogDetail{
    id: string,
    title: string,
    description: string,
    user: {
        firstName: string,
        lastName: string
    }
}

export default function useBlogs () {
   const [loading, setLoading] = useState(true); 
   const [blogs, setBlogs] = useState<blogDetail[]>([]);
   
   useEffect(()=>{
     axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/allblogs`)
     .then(response => {
        setBlogs(response.data.blogs)
        setLoading(false);
     })
   },[]);
   return{
    loading, blogs
   }
}