import { Link, useLocation } from "react-router"
function Tabs() {
    const location = useLocation()
    const { hash, pathname, search } = location
    
    const styles = 'text-[#234e70] w-1/2 text-center font-medium'
    const activeStyles = 'text-[#F76C5E] w-1/2 text-center underline'
    return(
        <nav className="flex justify-around shadow py-5 bg-white">
            <Link 
                to={{
                    pathname:'/'
                }} 
                className={`${pathname !== '/timer' ? activeStyles : styles} border-r border-[#F76C5E]`} 
                >Tasks</Link>
            <Link 
                className={pathname === '/timer' ? activeStyles : styles}
                to={{
                    pathname:'/timer'
                }} 
                >Timer</Link>
        </nav>
    )
}

export default Tabs