import { Header } from "./components/header"
import { Main } from "./components/main"
import { CountriesProvider } from "./context/countriesContext"

function App() {
  return (
    <>
      <Header />

      <CountriesProvider>
        <Main />
      </CountriesProvider>
    </>
  )
}

export default App
