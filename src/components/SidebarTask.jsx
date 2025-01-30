import { MdNotes } from "react-icons/md"
import { Link } from "react-router"

function SidebarTask({name, icon: Icon, count}) {
    // props place holders  icon, isActive, amountOfTasks
    const isActive = true
    const amountOfTasks = 3
    const taskName = "Task"


    const color = isActive ? "bg-[#F76C5E] text-white" : "bg-slate-300"

    return(

        <Link 
            to={{
                pathname: name === 'Tasks' ? '/' : `/${name.toLowerCase()}` 
            }}
            className={`${color} flex items-center justify-between shadow py-2 px-4 w-[90%] m-auto mb-2 rounded`
            }>
                <div className="flex items-center gap-2">
                    {Icon && <Icon/>}
                    <span>{name}</span>
                </div>
                {count > 0 ? <span 
                    className="text-xs bg-slate-100 text-sky-800 w-5 h-5 text-center pt-[1.3px] rounded-full">{count}
                </span> :
                null}
        </Link>
    )
}

export default SidebarTask