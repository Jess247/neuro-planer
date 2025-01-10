import TaskBanner from "./TaskBanner"
import { FaPlus } from "react-icons/fa"
function Home({tasks}) {

    const handleClick = () => {
        console.log('clickidyClack')
    }
    return(
        <main>
            <div className="flex justify-center items-center">
                <h1 className="font-semibold text-4xl text-center my-8">Current Tasks</h1>
                <FaPlus 
                    className="relative -right-[30%]" 
                    size={25}
                    onClick={handleClick}/>
            </div>
            {tasks.map((task, index) => <TaskBanner key={index} title={task} id={index}/>)}
        </main>
    )
}

export default Home