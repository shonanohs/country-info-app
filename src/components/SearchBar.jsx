export default function SearchBar({ setFilteredCountries, countries }) {
  function handleSearch(e) {
    const search = e.target.value.toLowerCase()
    const searchMatches = countries.filter(country =>
      country.name.common.toLowerCase().includes(search)
    );
    setFilteredCountries(searchMatches)
  }

  return (
    <div className="flex relative md:pb-0 pb-5">
      <img
        src="src/assets/search.png"
        className="z-10 absolute left-10 top-4 h-6 pointer-events-none"
        alt="search"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        className="bg-white rounded-sm shadow-md pl-20 pr-40 py-4 z-0 focus:outline-0"
      />
    </div>
  )
}
