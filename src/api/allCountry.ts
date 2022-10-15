import { country } from "@types"

export const allCountry = async (): Promise<country[]> =>  {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const countries = await response.json()

  const result: country[] = []

  for (const country of countries) {
    const obj: country = {
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
      flag: country.flags.svg
    }
    
    result.push(obj)
  }
  
  return result
}