import Home from "./pages/Home"
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function fetchCountries() {
        try {
        const response = await axios.get(
            "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
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
    <>
      <Home countries={countries} loading={loading} error={error} />
    </>
  )
}
