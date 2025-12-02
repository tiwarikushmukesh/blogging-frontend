import axios from "axios";
import { useEffect, useState } from "react";

import { url } from "../link/backendurl";

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
     axios.get(`${url}/blog/allblogs`)
     .then(response => {
        setBlogs(response.data.blogs)
        setLoading(false);
     })
   },[]);
   return{
    loading, blogs
   }
}

export function useUserBlogs() {
   const [loading, setLoading] = useState(true); 
   const [blogs, setBlogs] = useState<blogDetail[]>([]);
   
   useEffect(()=>{
     axios.get(`${url}/blog/userAllBlogs`)
     .then(response => {
        setBlogs(response.data.blogs)
        setLoading(false);
     })
   },[]);
   return{
    loading, blogs
   }
}