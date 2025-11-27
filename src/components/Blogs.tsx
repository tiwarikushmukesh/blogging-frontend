import { Link } from "react-router-dom";
import { useAuth } from "../context-api/AuthContext";
import useBlogs from "../Hooks/useBlogs";
import Blog from "./BlogCard";
import { BlogCardSkeletion } from "./Skeleton";

export default function () {
    const { isLoggedIn } = useAuth()
    const {loading, blogs} = useBlogs()

    if(isLoggedIn){
        return (
            <div>
                {/* fake header */}
                <div className="h-[75px]"></div>
                {/* userAllBlogs */}
                <div className=" pt-10 h-screen   flex flex-col items-center " >
                    {loading? <>
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                    <BlogCardSkeletion />
                    </> : blogs.map((blog,index) => { return (<div key={index} ><Blog 
                    id={blog.id}
                    firstName={blog.user.firstName} 
                    lastName={blog.user.lastName}
                    title={blog.title}
                    description={blog.description}
                    /></div>)})}
                </div>
            </div> 
        )
    }else{
        return(
        <div >
            <div className=" h-screen  flex justify-center items-center " >

                <div className=" w-[1192px] h-[370px] flex justify-between " >
                    <div>
                        <div className="  text-[90px]  font-serif h-[250px] w-[720px]
                        " >Human<br />Stories & ideas</div>

                        <div className="my-5 text-2xl font-extralight " >A place to read, write, and deepen your understanding</div>

                        <Link className=" text-xl  border px-4 py-3 rounded-full bg-black text-white " to={"/signup"}>Get Started</Link>
                    </div>
                    <img src="medium.webp" alt="logo" className=" w-[400px] h-[600px] -translate-y-1/5 " />
                </div>
            </div>
        </div>
        )
    } 
}