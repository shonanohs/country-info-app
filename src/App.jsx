import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch country info to display from REST Countries API
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,currencies,languages,borders,cca3"
        );
        setCountries(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
            <Home
              countries={countries}
              searchText={searchText}
              setSearchText={setSearchText}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/country/:countryName" element={<CountryDetail countries={countries} />}/>
      </Routes>
    </BrowserRouter>
  )
}
