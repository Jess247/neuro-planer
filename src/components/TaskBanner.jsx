import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router"

function TaskBanner({title, id}) {

    

    return(
        <Link   
            to={{pathname:`/${id}`}} 
            state={{title:title}}
            className="flex justify-between items-center w-11/12 mx-auto my-3 bg-slate-100 py-2 px-4 rounded shadow hover:bg-[#F76C5E] hover:text-white hover:cursor-pointer ease-in-out duration-300">
            <div 
                className="flex items-center gap-4">
                <span>{title}</span>
            </div>
            <FaTrashAlt/>
        </Link>
    )
}

export default TaskBanner