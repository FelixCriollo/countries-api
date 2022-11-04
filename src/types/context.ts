import { country } from "./country"

export type countryContextType = {
  loading: boolean
  countries: country[]
  handleCountries: (fn: Promise<country[]>) => void
  currentCountry: country
  setCurrentCountry: React.Dispatch<React.SetStateAction<country>>
  allCountries: country[]
}