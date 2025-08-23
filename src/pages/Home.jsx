import CountryGrid from '../components/CountryGrid';
import FilterDropdown from '../components/FilterDropdown';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Home( {filteredCountries, setFilteredCountries, countries, loading, error} ) {

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
        
    return (
        <>
            <Header />
            <div className="mx-10 my-12 lg:mx-30">
                <div className="flex flex-col md:flex-row pb-12 justify-between items-center">
                    <SearchBar setFilteredCountries={setFilteredCountries} countries={countries}/>
                    <FilterDropdown setFilteredCountries={setFilteredCountries} countries={countries} />
                </div>
                <CountryGrid filteredCountries={filteredCountries} countries={countries} />
            </div>
        </>
    )
}