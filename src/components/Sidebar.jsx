import Header from './Header'
import SearchBar from './SearchBar'
import SidebarTask from './SidebarTask'
import SubTask from './SubTask'
import { MdNotes } from "react-icons/md"
import { FaCheck } from "react-icons/fa"
import { IoMdDoneAll } from "react-icons/io"
import { GiAchievement } from "react-icons/gi"


function Sidebar() {
    // state vars placeholder
    const noteCount = 0
    const taskObjs = [
        {
            name: "Notes",
            icon: MdNotes,
            count: 0
        },
        {
            name: "task",
            icon: FaCheck,
            count: 0
        },
        {
            name: "done",
            icon: IoMdDoneAll,
            count: null
        },
        {
            name: "achievements",
            icon: GiAchievement,
            count: null
        },
]

    return(
        <aside className="border-r-[1px] h-screen">
            <Header/>
            <SearchBar/>
            {taskObjs.map(obj => <SidebarTask name={obj.name} icon={obj.icon} count={obj.count}/>)}
        </aside>
    )
}

export default Sidebar