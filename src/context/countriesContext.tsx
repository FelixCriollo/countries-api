import { createContext, useContext, ReactNode, FC, useState, useEffect } from "react"
import { country, countryContextType } from "@types"
import { countryAPI } from "@/api"

type Props = { children: ReactNode }

const countriesContext = createContext<countryContextType | null>(null)

export const CountriesProvider: FC<Props> = ({children}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<country[]>([])

  const handleCountries = async (fn: Promise<country[]>): Promise<void> => {
    setLoading(true)

    fn.then((res: any) => {
      setLoading(false)
      setCountries(res)  
    })
  }

  useEffect(() => {
    countryAPI().allCountry().then(res => {
      setLoading(false)
      setCountries(res)
    })
  }, [])

  return (
    <countriesContext.Provider value={{
      loading,
      countries,
      handleCountries
    }}>
      {children}
    </countriesContext.Provider>
  )
}

export const useCountries = () => useContext(countriesContext) as countryContextType

