import CountryInfo from "../components/CountryInfo";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function CountryDetail({ countries }) {
    const { countryName } = useParams();

    const country = countries.find(
        (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
    );

    if (!country) return (
    <>
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
        <p className="dark:text-white text-xl">Country not found</p>
        </div>
    </>
    )

    return (
        <>
            <Header />
            <CountryInfo country={country} countries={countries} />
        </>
    )
}