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
        <div className=" w-[1192px] rounded-4xl  p-3 my-1 hover:bg-gray-100 cursor-pointer " onClick={()=>getBlog(id)} >
            <div className=" flex items-center " >
                <div className="m-2 text-base border p-1 px-3 rounded-full bg-black text-white " >{firstName[0]}</div>
                <div className=" ml-1 text-base font-san " >{firstName}</div>
                <div className=" ml-1 text-base " >{lastName}</div>
            </div>

            <div className=" pl-3 text-3xl font-bold " >{title}</div>
            <div className=" px-4 py-2 text-base font-serif " >{description}</div>
        </div>
    )
}