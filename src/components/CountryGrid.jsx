import CountryCard from "./CountryCard";

export default function CountryGrid( {filteredCountries, countries, loading, error, setFilteredCountries} ) {
    if (loading) return <p>Loading countries...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="grid gap-25 grid-cols-1 md:grid-cols-4 md:gap-15">
            {filteredCountries.map(country => (
                    <CountryCard 
                        key={country.name.common} 
                        flag={country.flags.png} 
                        name={country.name.common} 
                        population={country.population} 
                        region={country.region} 
                        capital={country.capital[0]}
                        setFilteredCountries={setFilteredCountries}
                        countries={countries} />
                    ))}
        </div>
    )
}