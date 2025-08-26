import CountryGrid from '../components/CountryGrid';
import FilterDropdown from '../components/FilterDropdown';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Home( {countries, searchText, setSearchText, selectedRegions, setSelectedRegions, loading, error} ) {
  if (loading) return (
        <>
            <Header />
            <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
                <p className="dark:text-white text-xl">Loading...</p>
            </div>
        </>
    )
  
  if (error) return (
    <>
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
            <p className="dark:text-white text-xl">Failed to load countries: {error.message}</p>
        </div>
    </>
    )

  const filteredCountries = countries.filter((c) => {
    const matchesSearch = c.name.common
      .toLowerCase()
      .includes(searchText.toLowerCase())
    const matchesRegion =
      selectedRegions.length === 0 || selectedRegions.includes(c.region)
    return matchesSearch && matchesRegion
  })

  return (
    <>
        <Header />
        <div className="mx-10 my-12 lg:mx-30">
            <div className="flex flex-col md:flex-row pb-12 justify-between items-center">
                <SearchBar setSearchText={setSearchText}/>
                <FilterDropdown selectedRegions={selectedRegions} setSelectedRegions={setSelectedRegions} />
            </div>
            <CountryGrid filteredCountries={filteredCountries} loading={loading} error={error} />
        </div>
    </>
  )
}
