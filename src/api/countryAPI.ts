import { country } from "@types"
import { region } from "@types"

function countriesResult(countries: country[]): country[] {
  return countries.map((c: any): country => {
    const languages: string[] = c.languages ? Object.values(c.languages) : ["Sin idiomas"]
    const tld = c.tld === undefined ? ["No found"] : c.tld[0]  
    const currencyArr = c.currencies !== undefined ? Object.values(c.currencies) : []
    let currencies: string[] = []

    if (currencyArr) {
      currencies = currencyArr.map((c: any) => c.name)
    }

    return {
      name: c.name.common,
      population: c.population,
      region: c.region,
      capital: c.capital,
      flag: c.flags.png,
      tld: tld,
      languages: languages,
      subregion: c.subregion,
      currencies: currencies,
      borders: c.borders,
      cca3: c.cca3
    }
  })
}

type API = {
  all: () => Promise<country[]>,
  byRegion: (region: region) => Promise<country[]>,
  byName: (name: string) => Promise<country[]>,
}

export const countryAPI: API = {
  all: async (): Promise<country[]> => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countries = await response.json()
    return countriesResult(countries)
  },
  byName: async (name: string): Promise<country[]> => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const countries = await response.json()
      return countriesResult(countries)
    } catch (error) {
      return [];
    }
  },
  byRegion: async (region: region): Promise<country[]> => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const countries = await response.json()
      
      return countriesResult(countries)
    } catch (error) {
      return [];
    }
  },
}