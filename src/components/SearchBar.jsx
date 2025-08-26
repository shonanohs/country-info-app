import search from "../assets/search.png";
import searchDark from "../assets/search-dark.png";

export default function SearchBar({ setSearchText, searchText }) {
  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="flex relative md:pb-0 pb-5">
      <img
        src={search}
        className="z-10 absolute left-6 top-4 h-6 pointer-events-none block dark:hidden"
        alt="search"
      />
      <img
        src={searchDark}
        className="z-10 absolute left-6 top-4 h-6 pointer-events-none hidden dark:block"
        alt="search"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchText}
        onChange={handleSearch}
        className="bg-white dark:bg-[#2d3742] dark:text-white rounded-sm shadow-md pl-15 pr-33 py-4 z-0 focus:outline-0"
      />
    </div>
  )
}
