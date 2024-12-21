import logo from '../assets/img/brain.png'
function Header() {
    return(
        <header className="flex items-center gap-2 shadow p-4">
           <img 
                src={logo} 
                alt="Brain icon." 
                className="w-8"
            />
            <h1 className="text-[#F76C5E]">NeroPlaner</h1>
        </header>
    )
}

export default Header