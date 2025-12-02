import axios from "axios";
import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize";
import { url } from "../link/backendurl";
import { useNavigate } from "react-router-dom";

export default function ({id, title, published}: {id: string, title:string, published: boolean}) {
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    async function publish(){
        axios.put(`${url}/blog/status`,{
            id,
            published,
            description,
        })
        navigate("/")
    }
    return (
        <div className="
            p-4 sm:p-6 
            bg-white/70 
            w-[90%] sm:w-[450px] md:w-[500px] 
            border border-white/40 
            rounded-xl
        ">

            {/* TITLE PREVIEW */}
            <div className="text-xl sm:text-2xl font-serif font-semibold text-gray-900 mb-3 wrap-break-words">
                {title}
            </div>

            {/* DESCRIPTION INPUT */}
            <TextareaAutosize
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description..."
                className="
                    w-full 
                    text-base sm:text-lg 
                    font-serif 
                    leading-6 sm:leading-7 
                    bg-white/40
                    rounded-xl
                    p-3 sm:p-4
                    outline-none 
                    border border-gray-300
                    focus:border-gray-400
                    focus:ring-1 focus:ring-gray-300
                    resize-none 
                    placeholder:text-gray-400
                    transition-all
                "
                minRows={3}
            />

            {/* PUBLISH BUTTON */}
            <button
                onClick={publish}
                className="
                    mt-5 
                    w-full 
                    py-3 
                    text-base sm:text-lg 
                    font-medium 
                    rounded-xl 
                    bg-green-600 
                    hover:bg-green-700 
                    active:scale-[0.98]
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