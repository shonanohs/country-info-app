import backLight from "../assets/back.png";
import backDark from "../assets/back-dark.png";
import { Link } from "react-router-dom";

export default function CountryInfo({ country, countries }) {
    const infoCategories = [
    { label: "Native Name", value: country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common },
    { label: "Region", value: country.region },
    { label: "Capital", value: country.capital?.[0] },
    { label: "Sub Region", value: country.subregion },
    { label: "Languages", value: country.languages ? Object.values(country.languages).join(", ") : "" },
    { label: "Population", value: country.population.toLocaleString() },
    { label: "Currencies", value: country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "" }
    ]

    const borderCountries = country.borders || [];

    const borderCountryNames = borderCountries.map(code => {
        const match = countries.find(c => c.cca3 === code)
        return match ? match.name.common : code
    })

    return (
    <div className="relative pb-5 mx-10 my-12 lg:mx-30">
        <Link to="/">
            <button className="hover:cursor-pointer bg-white dark:bg-[#2d3742] dark:text-white rounded-sm shadow-md pl-15 pr-10 py-2">
                <img
                className="absolute left-6 top-2.5 h-5 pointer-events-none block dark:hidden"
                src={backLight}
                alt="back"
                />
                <img
                className="absolute left-6 top-2.5 h-5 pointer-events-none hidden dark:block"
                src={backDark}
                alt="back"
                />
                Back
            </button>
        </Link>

        <div className="flex mt-10">
            <img className="w-full max-w-lg" src={country.flags.svg} alt={`${country.name.common} flag`} />
            <div className="ml-30  min-w-250 max-w-250">
                <h1 className="font-bold text-2xl dark:text-white">{country.name.common}</h1>

                <div className="grid grid-cols-2 gap-y-2 gap-x-30 mt-10 mb-20 max-w-150">
                {infoCategories.map((item) => (
                    <p key={item.label} className="font-semibold dark:text-white">
                    {item.label}: <span className="font-normal">{item.value}</span>
                    </p>
                ))}
                </div>

                <div className="flex flex-wrap gap-3">
                    <p className="font-semibold dark:text-white">Border Countries:</p>
                    {borderCountryNames.length > 0 ? (
                        borderCountryNames.map((border) => (
                        <Link key={border} to={`/country/${border}`}>
                            <button
                                key={border}
                                className="hover:cursor-pointer dark:text-white dark:bg-[#2d3742] bg-white rounded-sm shadow-md px-5 py-1"
                            >
                                {border}
                            </button>
                        </Link>
                        ))
                    ) : (
                        <span className="dark:text-white">None</span>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}