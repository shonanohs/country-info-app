import { NumericFormat } from 'react-number-format';

export default function CountryCard({ flag, name, population, region, capital }) {
  return (
    <div className="bg-white rounded-md shadow-md hover:cursor-pointer">
      <div className="w-full h-48 overflow-hidden rounded-t-md">
        <img
          className="w-full h-full object-cover"
          src={flag}
          alt={`Flag of ${name}`}
        />
      </div>

      <div className="p-6">
        <h1 className="font-bold mb-3">{name}</h1>
        <p className="text-sm font-semibold">
          Population: <NumericFormat className="font-normal" value={population} thousandSeparator=","></NumericFormat>
        </p>
        <p className="text-sm font-semibold">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="text-sm font-semibold">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
}
