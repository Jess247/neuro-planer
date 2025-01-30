import { Link } from "react-router"
function Tabs() {
    const styles = 'text-[#F76C5E] w-1/2 text-center'
    return(
        <nav className="flex justify-around shadow py-5 bg-white">
            <Link 
                to={{
                    pathname:'/'
                }} 
                className={styles + " " + "border-r border-[#F76C5E]"} 
                >Tasks</Link>
            <Link 
                className={styles}
                to={{
                    pathname:'/timer'
                }} 
                >Timer</Link>
        </nav>
    )
}

export default Tabs