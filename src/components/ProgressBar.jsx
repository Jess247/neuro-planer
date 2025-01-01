function ProgressBar({progress}) {
    return(
        <div className="mx-auto w-10/12 my-10 flex justify-center ">
            <div className="h-2 w-10/12 bg-slate-100 rounded-full flex items-center shadow">
                <div 
                    className={`h-[80%] bg-[#F76C5E] rounded-full ml-[1px]`}
                    style={{ width: `${progress}%` }}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar