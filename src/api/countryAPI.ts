import { country } from "@types"
import { region } from "@types"

function countriesResult(countries: country[]): country[] {
  return countries.map((c: any) => {
    return {
      name: c.name.official,
      population: c.population,
      region: c.region,
      capital: c.capital,
      flag: c.flags.png
    }
  })
}

type API = {
  allCountry: () => Promise<country[]>,
  countryByRegion: (region: region) => Promise<country[]>,
  countryByName: (name: string) => Promise<country[]>,
}

export const countryAPI = (): API => {
  return {
    allCountry: async (): Promise<country[]> => {
      const response = await fetch("https://restcountries.com/v3.1/all")
      const countries = await response.json()
      return countriesResult(countries)
    },
    countryByName: async (name: string): Promise<country[]> => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const countries = await response.json()
      return countriesResult(countries)
    },
    countryByRegion: async (region: region): Promise<country[]> => {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const countries = await response.json()
      
      return countriesResult(countries)
    },
  }
}