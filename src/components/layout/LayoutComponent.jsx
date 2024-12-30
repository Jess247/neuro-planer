import { Outlet } from 'react-router'
import Sidebar from '../Sidebar'
import Tabs from '../Tabs'

function LayoutComponent() {
    return(
        <main className="md:grid md:grid-cols-[23%_1fr] md:grid-rows-[auto_1fr] h-screen">
            {/* Sidebar - takes up 20% of the width */}
            <Sidebar className="col-span-1 row-span-1" />

            {/* Content Area */}
            <div className="col-span-1 row-span-2 flex flex-col">
                {/* Tabs - Top section */}
                <Tabs className="flex-none" />

                {/* Outlet - Content below the Tabs */}
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default LayoutComponent