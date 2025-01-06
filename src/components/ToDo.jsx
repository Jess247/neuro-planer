import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { IoMdCheckboxOutline } from "react-icons/io"
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"

function ToDo({name, isChecked, setTodoList, id}) {

    const handleClick = () => {
        setTodoList(prevTodoList => prevTodoList.map((todo, index) => index === id ? {...todo, isChecked:!todo.isChecked}:todo))
    }
    return(
        <div className="flex justify-between items-center w-11/12 mx-auto my-3 bg-slate-100 py-2 px-4 rounded shadow">
            <div 
                className="flex items-center gap-4"
                onClick={handleClick}>
                {isChecked ? <IoMdCheckboxOutline/> : <MdCheckBoxOutlineBlank/>}
                <span className={isChecked ? "line-through": ""}>{name}</span>
            </div>
            <FaTrashAlt/>
        </div>
    )
}

export default ToDo