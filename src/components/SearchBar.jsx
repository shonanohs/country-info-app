export default function SearchBar() {
    return (
        <div className="flex relative">
            <button>
                <img src="src/assets/search.png" className="z-10 absolute left-10 top-4 h-6 hover:cursor-pointer"/>
            </button>
            <input type="text" placeholder="Search for a country..." className="bg-white rounded-sm shadow-md/10 pl-20 pr-40 py-4 z-0 focus:outline-0"/>
        </div>
    )
}