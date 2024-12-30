import Header from './Header'
import SearchBar from './SearchBar'
import SidebarTask from './SidebarTask'
import SubTask from './SubTask'
import { MdNotes } from "react-icons/md"


function Sidebar() {
    // state vars placeholder
    const noteCount = 0

    return(
        <side className="border-r-[1px] h-screen">
            <Header/>
            <SearchBar/>
            <SidebarTask name="Notes" icon={MdNotes} count={noteCount} />
            <SidebarTask />
            <SidebarTask />
            <SidebarTask />
        </side>
    )
}

export default Sidebar