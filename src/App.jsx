import CountryGrid from './components/CountryGrid'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

export default function App() {

  return (
    <>
      <Header />
      <div className="mx-10 my-12 lg:mx-30">
        <div className="flex pb-12">
          <SearchBar />
        </div>
      <CountryGrid />
      </div>
    </>
  )
}
