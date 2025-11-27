import type { ChangeEvent } from "react";

interface parameter {
    name: string;
    placeholder : string;
    type? : string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
}

export default function ({name, placeholder, type, onChange}: parameter) {
    return (
        <div>
            <div className=" text-lg p-1 " >
                {name}
            </div>

            <input className=" m-1 p-2 border border-gray-400 w-80 sm:w-100 lg:w-130 h-12 rounded-md focus:outline-black " type={type || "text"} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}