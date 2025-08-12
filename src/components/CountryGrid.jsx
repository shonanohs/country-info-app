import CountryCard from "./CountryCard";

export default function CountryGrid() {
    return (
        <div className="grid gap-25 grid-cols-1 md:grid-cols-4 md:gap-15">
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
        </div>
    )

}