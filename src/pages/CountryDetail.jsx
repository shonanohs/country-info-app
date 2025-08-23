import CountryInfo from "../components/CountryInfo";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CountryDetail({ countries }) {
    const { countryName } = useParams();
    const [showNotFound, setShowNotFound] = useState(false);

    const country = countries.find(
        (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
    );


    useEffect(() => {
    if (!country) {
        const timer = setTimeout(() => setShowNotFound(true), 250)
        return () => clearTimeout(timer)
    } else {
        setShowNotFound(false)
    }
    }, [country])

    if (!country && showNotFound) {
    return (
        <>
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-6rem)]">
            <p className="dark:text-white text-xl">Country not found</p>
        </div>
        </>
    )
    }

    if (!country) return <Header />

    return (
        <>
            <Header />
            <CountryInfo country={country} countries={countries} />
        </>
    )
}