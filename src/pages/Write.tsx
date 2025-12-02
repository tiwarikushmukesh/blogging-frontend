import { useCallback, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { url } from "../link/backendurl";
import { useParams } from "react-router-dom";
import StatusToggle from "../components/StatusToggle";


export default function WritePage() {
    const {blogId} = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [publishComponent, setPublishComponent] = useState(false);

    useEffect(()=>{
        axios.get(`${url}/blog/${blogId}`)
        .then(res => {
            setTitle(res.data.blog.title);
            setContent(res.data.blog.content);
        })
    },[])

    const save = useCallback(async()=>{
        axios.put(`${url}/blog/save`,{
            id: blogId,
            title,
            content
        })
    },[title,content])

    const debounceRef= useRef<ReturnType<typeof setTimeout>>(0)
    const debounseSave = useCallback(()=>{
        clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(()=>save(),1000);
    },[save])

    return (
        <div className="w-full flex justify-center min-h-screen relative px-4 sm:px-6">
            
            {/* PUBLISH POPUP */}
            {publishComponent && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={() => setPublishComponent(false)}
                >
                    <div
                        className="bg-white p-4 sm:p-6 rounded-xl shadow-xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StatusToggle id={blogId!} title={title} published={true} />
                    </div>
                </div>
            )}

            {/* MAIN WRITING AREA */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] pt-10">

                {/* NAV */}
                <nav className="flex justify-end px-2 sm:px-6 py-4">
                    <button
                        className="
                            py-2 px-4 sm:px-6 
                            text-lg sm:text-xl 
                            bg-green-700 
                            text-white 
                            rounded-2xl 
                            cursor-pointer 
                            hover:bg-green-800 
                            active:scale-95
                        "
                        onClick={() => setPublishComponent(true)}
                    >
                        Publish
                    </button>
                </nav>

                {/* TITLE INPUT */}
                <TextareaAutosize
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                        debounseSave()
                    }}
                    placeholder="Title..."
                    className="
                        w-full 
                        text-3xl sm:text-4xl md:text-5xl 
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
                    onChange={(e) => {
                        setContent(e.target.value)
                        debounseSave()
                    }}
                    placeholder="Tell your story..."
                    className="
                        w-full 
                        mt-6 
                        text-base sm:text-lg md:text-xl 
                        font-serif 
                        leading-7 sm:leading-8 
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
