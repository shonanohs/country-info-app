import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function FilterDropdown() {
    const [visible, setVisible] = useState(false)
    
    function handleClick() {
        setVisible(!visible)
    }

    return (
        <div className="relative">
            <button className="flex bg-white p-5 rounded-sm shadow-md h-15 w-60 justify-between items-center text-[#1a1a1a] hover:cursor-pointer" onClick={handleClick}>
                <p>Filter by Region</p>
                <img src="src/assets/dropdown-arrow.png" className="h-3" alt="filter by region"/>
            </button>
            <div   className={`bg-white py-5 rounded-sm shadow-md absolute w-60 top-18 transition-all duration-300 ${
                                visible
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                            }`}>
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