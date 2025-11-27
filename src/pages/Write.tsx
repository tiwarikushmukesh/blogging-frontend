import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Publish from "../components/Publish";

export default function WritePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [publishComponent, setPublishComponent] = useState(false);

    return (
        <div className="w-full flex justify-center  min-h-screen relative ">
            
            {publishComponent && (
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center"
                onClick={() => setPublishComponent(false)} // close on background click
            >
                <div
                className="bg-white p-5 rounded-xl shadow-xl"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
                >
                <Publish title={title} content={content} />
                </div>
            </div>
            )}
            
            <div className="w-[70%] pt-10 ">
                <nav className=" flex justify-end px-15 py-5 " >
                    <button className=" py-2 px-5  text-xl bg-green-700 text-white rounded-2xl cursor-pointer " onClick={()=>setPublishComponent(true)} >Publish</button>
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
