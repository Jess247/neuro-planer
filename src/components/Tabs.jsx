function Tabs() {
    const styles = 'text-[#F76C5E] w-1/2 text-center'
    return(
        <nav className="flex justify-around shadow py-5 bg-white">
            <a className={styles + " " + "border-r border-[#F76C5E]"} href="#">Tasks</a>
            <a className={styles} href="#">Timer</a>
        </nav>
    )
}

export default Tabs