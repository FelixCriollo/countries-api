import { country } from "./country"

export type countryContextType = {
  loading: boolean
  countries: country[]
  handleCountries: (fn: Promise<country[]>) => Promise<void>
}