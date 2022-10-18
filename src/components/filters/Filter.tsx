import { region } from "@types"
import { useCountries } from "@/context/countriesContext"
import { countryAPI } from "@/api"
import { useState } from "react"
import style from "./styles.module.css"

const regions: region[] = ["Africa", "America", "Asia", "Europe", "Oceania"]

export const Filter = () => {
  const { handleCountries } = useCountries()
  const [ search, setSearch ] = useState<string>("")

  return (
    <div className={style.filter}>
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          handleCountries(countryAPI().countryByName(search))
        }}
      >
        <button type="submit">yape</button>
        
        <input 
          onChange={(e) => setSearch(e.target.value) }
          value={search} 
          type="text" placeholder="Search for a country..."
        />
      </form>

      <select 
        onChange={(e) => 
          handleCountries(countryAPI().countryByRegion(e.target.value as region))
        }
      >
        {regions.map((region: region) => (
          <option className={style.option} value={region} key={region}>{region}</option>
        ))}
      </select>
    </div>
  )
}
