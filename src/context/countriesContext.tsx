import { createContext, useContext, ReactNode, FC, useState, useEffect } from "react"
import { country, countryContextType } from "@types"
import { countryAPI } from "@/api"

type Props = { children: ReactNode }
const initialValue: country = {
  borders: [],
  capital: "",
  cca3: "",
  currencies: [],
  flag: "",
  languages: [],
  name: "",
  population: 0,
  region: "",
  subregion: "",
  tld: ""
}

const countriesContext = createContext<countryContextType | null>(null)

export const CountriesProvider: FC<Props> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<country[]>([])
  const [currentCountry, setCurrentCountry] = useState<country>(initialValue)

  const handleCountries = (fn: Promise<country[]>) => {
    setLoading(true)

    fn.then((res: country[]) => {
      setLoading(false)
      setCountries(res)  
    })
  }
  
  useEffect(() => {
    countryAPI.all().then(res => {
      setLoading(false)
      setCountries(res)
    })
  }, [])

  return (
    <countriesContext.Provider value={{
      loading,
      countries,
      handleCountries,
      currentCountry,
      setCurrentCountry 
    }}>
      {children}
    </countriesContext.Provider>
  )
}

export const useCountries = () => useContext(countriesContext) as countryContextType

