import CountryGrid from '../components/CountryGrid'
import FilterDropdown from '../components/FilterDropdown'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function Home( {filteredCountries, setFilteredCountries, countries} ) {
    return (
        <>
            <Header />
            <div className="mx-10 my-12 lg:mx-30">
                <div className="flex flex-col md:flex-row pb-12 justify-between items-center">
                    <SearchBar />
                    <FilterDropdown setFilteredCountries={setFilteredCountries} countries={countries} />
                </div>
                <CountryGrid filteredCountries={filteredCountries} />
            </div>
        </>
    )
}