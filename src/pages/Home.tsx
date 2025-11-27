import Blog from "../components/Blogs";
import Navbar from "../components/Navbar";

export default function Home () {
    return (
        <div className=" relative h-screen w-full "  >
          <div className=" fixed w-full " ><Navbar/></div>
           <Blog /> 
        </div>
    )
}