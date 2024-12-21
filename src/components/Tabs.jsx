function Tabs() {
    const styles = 'text-[#F76C5E] w-1/2 text-center'
    const activeTabStyle = 'after:absolute after:content-[""] after:h-1 after:bg-[#F76C5E] after:w-10 after:top-9 after:left-[23.3%] after:rounded-tr-md after:rounded-tl-md'
    return(
        <nav className="flex justify-around shadow p-2 bg-[#E5E5E5]">
            <a className={styles + " " + activeTabStyle + " " + "border-r border-[#F76C5E]"} href="#">Tasks</a>
            <a className={styles} href="#">Timer</a>
        </nav>
    )
}

export default Tabs