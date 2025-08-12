export default function CountryCard() {
    return (
        <div className="bg-white rounded-md shadow-md">
            <img className="object-fill rounded-t-md w-full" src="src/assets/germany.png"/>
            <div className="p-6">
                <h1 className="font-bold mb-3">Germany</h1>
                <p className="text-sm font-semibold">Population: <span className="font-normal">81,770,900</span></p>
                <p className="text-sm font-semibold">Region: <span className="font-normal">Europe</span></p>
                <p className="text-sm font-semibold">Capital: <span className="font-normal">Berlin</span></p>
            </div>
        </div>
    )
}