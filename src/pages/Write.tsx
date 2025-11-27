import axios from "axios";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { url } from "../link/backendurl";
import { useNavigate } from "react-router-dom";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function publish(){
        await axios.post(`${url}/blog/create`,{
            title,
            content
        })
        navigate("/")
    }

    return (
        <div className="w-full flex justify-center pt-10 min-h-screen">
            <div className="w-[70%]">

                <nav className=" flex justify-end px-15 py-5 " >
                    <button className=" py-2 px-5  text-xl bg-green-700 text-white rounded-2xl " onClick={()=>{publish()}} >Publish</button>
                </nav>

                {/* TITLE INPUT */}
                <TextareaAutosize
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title..."
                    className="
                        w-full 
                        text-5xl 
                        font-bold 
                        font-serif 
                        bg-transparent 
                        outline-none 
                        resize-none 
                        placeholder:text-gray-400 
                    "
                />

                {/* CONTENT INPUT */}
                <TextareaAutosize
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Tell your story..."
                    className="
                        w-full 
                        mt-6 
                        text-xl 
                        font-serif 
                        leading-8 
                        bg-transparent 
                        outline-none 
                        resize-none 
                        placeholder:text-gray-400
                    "
                    minRows={5}
                />

            </div>
        </div>
    );
}
