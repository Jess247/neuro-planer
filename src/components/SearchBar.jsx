import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    return (
        <div className="w-11/12 py-1 px-4 mx-auto rounded-full my-3 shadow flex justify-between">
            <input 
                type="text" 
                aria-label="Search query" 
                placeholder="Search for Task..."
                className="font-light text-xs w-11/12 h-full"    
                />
            <button
                type="sumbit"
                className="hover:scale-110"
                >
                <FaSearch/>
                </button>
        </div>
    )
}

export default SearchBar