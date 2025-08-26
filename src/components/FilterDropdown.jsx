import { useState } from "react";
import dropdownLight from "../assets/dropdown-arrow.png";
import dropdownDark from "../assets/dropdown-arrow-dark.png";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function FilterDropdown({ selectedRegions, setSelectedRegions }) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible)
  }

  function toggleRegion(region) {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region))
    } else {
      setSelectedRegions([...selectedRegions, region])
    }
  }

  return (
    <div className="relative">
      <button
        className="flex bg-white dark:bg-[#2d3742] p-5 rounded-sm shadow-md h-15 w-60 justify-between items-center text-[#1a1a1a] hover:cursor-pointer"
        onClick={handleClick}
      >
        <p className="dark:text-white">Filter by Region</p>
        <img
          src={dropdownLight}
          className="h-3 block dark:hidden"
          alt="filter by region"
        />
        <img
          src={dropdownDark}
          className="h-3 hidden dark:block"
          alt="filter by region"
        />
      </button>

      <div
        className={`bg-white dark:bg-[#2d3742] py-5 rounded-sm shadow-md absolute w-60 top-18 transition-all duration-300 ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul>
          {regions.map((region) => (
            <li
              key={region}
              className={`py-1 px-10 hover:cursor-pointer dark:text-white hover:bg-[#d1d1d1] dark:hover:bg-[#202830] ${
                selectedRegions.includes(region) ? "bg-[#d1d1d1] dark:bg-[#202830]" : ""
              }`}
              onClick={() => toggleRegion(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
