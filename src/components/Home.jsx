import TaskBanner from "./TaskBanner"

function Home({tasks}) {
    return(
        <main>
            <h1 className="font-semibold text-4xl text-center my-8">Current Tasks</h1>
            {tasks.map((task, index) => <TaskBanner key={index} title={task}/>)}
        </main>
    )
}

export default Home