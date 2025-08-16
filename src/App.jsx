import Home from "./pages/Home"
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

export default function App() {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetch country info to display from REST Countries API
    useEffect(() => {
    async function fetchCountries() {
        try {
        const response = await axios.get(
            "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
        );
        setCountries(response.data);
        setFilteredCountries(response.data);
        } catch (error) {
        setError(error);
        } finally {
          setLoading(false);
        }
    }
    fetchCountries();
    }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={
              <Home 
              filteredCountries={filteredCountries} 
              setFilteredCountries={setFilteredCountries} 
              countries={countries} 
              loading={loading} 
              error={error}
              />} 
            />
        </Routes>
      </BrowserRouter>
    </>
  )
}
