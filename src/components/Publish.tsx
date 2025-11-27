import axios from "axios";
import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize";
import { url } from "../link/backendurl";
import { useNavigate } from "react-router-dom";

export default function ({title, content}: {title: string, content: string}) {
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    async function publish(){
        axios.post(`${url}/blog/create`,{
            title,
            content,
            description,
        })
        navigate("/")
    }
    return (
        // <div className=" p-4 rounded-2xl " >
        //     <div className=" text-xl font-serif " >{title}</div>
        //     <TextareaAutosize
        //         value={description}
        //         onChange={(e) => setDescription(e.target.value)}
        //         placeholder="description..."
        //         className="
        //             w-full 
        //             mt-1
        //             text-xl 
        //             font-serif 
        //             leading-8 
        //             bg-transparent 
        //             outline-none 
        //             resize-none 
        //             placeholder:text-gray-400
        //         "
        //         minRows={2}
        //     />
        //     <button className=" py-2 px-5  text-xl bg-green-700 text-white rounded-2xl cursor-pointer " onClick={()=>publish()} >Publish</button>            
        // </div>
        <div className="p-6  bg-white/70 w-[500px] border border-white/40">
        <div className="text-2xl font-serif font-semibold text-gray-900 mb-3">
            {title}
        </div>

        <TextareaAutosize
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="
            w-full 
            text-lg 
            font-serif 
            leading-7 
            bg-white/40
            rounded-xl
            p-4
            outline-none 
            border
            border-gray-300
            focus:border-gray-400
            focus:ring-1
            focus:ring-gray-300
            resize-none 
            placeholder:text-gray-400
            transition-all
            "
            minRows={3}
        />

        <button
            onClick={publish}
            className="
            mt-5 
            w-full 
            py-3 
            text-lg 
            font-medium 
            rounded-xl 
            bg-green-600 
            hover:bg-green-700 
            text-white 
            transition-all 
            shadow-md
            hover:shadow-lg
            "
        >
            Publish
        </button>
        </div>

    )
}