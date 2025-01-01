import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { IoMdCheckboxOutline } from "react-icons/io"
import { FaTrashAlt } from "react-icons/fa"

function Task() {
    const isChecked = false
    const taskText = "Get your shit together!"
    return(
        <div className="flex justify-between items-center w-11/12 mx-auto my-3 bg-slate-100 py-2 px-4 rounded shadow">
            <div className="flex items-center gap-4">
                {isChecked ? <IoMdCheckboxOutline/> : <MdCheckBoxOutlineBlank/>}
                <span>{taskText}</span>
            </div>
            <FaTrashAlt/>
        </div>
    )
}

export default Task