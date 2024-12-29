function SubTask() {
    // props placeholders
    const taskName = "Task 1"
    const isActive = true
    const priority = "high"

    const color = isActive ? "bg-[#F76C5E] text-white" : "bg-slate-300"
    return(
        <div className={`${color} flex items-center justify-between shadow py-1 px-4 w-[80%] m-auto mb-2 rounded`}>
        <div className="flex items-center gap-2">
            <span>{taskName}</span>
        </div>
        <span className="text-xs bg-red-100 text-red-800 text-center px-2 rounded-xl shadow">{priority}</span>
    </div>
    )
}

export default SubTask