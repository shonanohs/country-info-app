const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function FilterDropdown() {
    return (
        <div className="relative">
            <button className="flex bg-white p-5 rounded-sm shadow-md h-15 w-60 justify-between items-center text-[#1a1a1a] hover:cursor-pointer">
                <p>Filter by Region</p>
                <img src="src/assets/dropdown-arrow.png" className="h-3" alt="filter by region"/>
            </button>
            <div className="bg-white py-5 rounded-sm shadow-md absolute w-60 top-18 invisible">
                <ul>
                    {regions.map(region => (
                            <li
                                key={region}
                                className="py-1 px-10 hover:cursor-pointer hover:bg-[#d1d1d1]"
                            >
                                {region}
                            </li>
                            ))}
                </ul>
            </div>
        </div>
    )
}