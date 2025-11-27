import { useNavigate } from "react-router-dom"
interface parameters {
    id: string,
    firstName: string,
    lastName: string,
    title: string,
    description: string,
}

export default function ({id ,firstName, lastName ,title, description} : parameters) {
    const navigate = useNavigate()
    async function getBlog (id : string) {
        navigate(`/blog/${id}`)
    }
    return(
        <div
        className="
            w-full 
            max-w-3xl 
            rounded-3xl 
            p-4 
            my-2 
            hover:bg-gray-100 
            cursor-pointer 
            transition 
            duration-200
        "
        onClick={() => getBlog(id)}
        >
        {/* USER */}
        <div className="flex items-center">
            <div className="m-2 text-sm sm:text-base border p-1 px-3 rounded-full bg-black text-white">
            {firstName[0]}
            </div>

            <div className="ml-1 text-sm sm:text-base font-sans">
            {firstName}
            </div>

            <div className="ml-1 text-sm sm:text-base">
            {lastName}
            </div>
        </div>

        {/* TITLE */}
        <div className="pl-3 text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {title}
        </div>

        {/* DESCRIPTION */}
        <div className="px-4 py-2 text-sm sm:text-base md:text-lg font-serif text-gray-700">
            {description}
        </div>
        </div>

    )
}