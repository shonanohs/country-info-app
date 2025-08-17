import backLight from "../assets/back.png"
import backDark from "../assets/back-dark.png"

const infoCategories = ["Native Name: ","Population: ", "Region: ", "Sub Region: ", "Capital: ", "Top Level Domain: ", "Currencies: ", "Languages: "]
const borderCountries = ["France", "Germany", "Netherlands"]

export default function CountryInfo() {
    return (
        <div className="relative md:pb-0 pb-5 mx-10 my-12 lg:mx-30">
            <button className="hover:cursor-pointer bg-white dark:bg-[#2d3742] dark:text-white rounded-sm shadow-md pl-15 pr-10 py-2 z-0">
                <img className="absolute left-6 top-2.5 h-5 pointer-events-none block dark:hidden" src={backLight} alt="back"/>
                <img className="absolute left-6 top-2.5 h-5 pointer-events-none hidden dark:block" src={backDark} alt="back"/>
                Back
            </button>
            <div className="flex mt-15">
                <img className="w-150 h-100" src="src/assets/belgium.svg"/>
                <div className="ml-40">
                    <h1 className="font-bold text-2xl dark:text-white">Belgium</h1>
                    <div className="grid grid-cols-2 mt-10 mb-20">
                            {infoCategories.map(category => (
                                <p key={category} 
                                   className="font-semibold py-1 dark:text-white">
                                    {category}
                                    <span className="font-normal dark:text-white">Belgie</span></p>
                            ))}
                    </div>
                    <div className="flex gap-5">
                        <p className="font-semibold py-1 dark:text-white">Border Countries:</p>
                        {borderCountries.map(country => (
                            <button className="hover:cursor-pointer dark:text-white dark:bg-[#2d3742] bg-white rounded-sm shadow-md px-5 py-1">{country}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}