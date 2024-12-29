function SubTask() {
    return(
        <div className={`${color} flex items-center justify-between shadow py-2 px-4 w-[90%] m-auto mb-2 rounded`}>
        <div className="flex items-center gap-2">
            <span>{taskName}</span>
        </div>
        <span className="text-xs bg-slate-100 text-sky-800 w-5 h-5 text-center pt-[1.3px] rounded-full">{amountOfTasks}</span>
    </div>
    )
}

export default SubTask