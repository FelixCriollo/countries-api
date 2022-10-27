import { region } from "@types"
import { useCountries } from "@/context/countriesContext"
import { countryAPI } from "@/api"
import { ChangeEvent, FormEvent, useState } from "react"
import style from "./styles.module.css"
import SearchSVG from "@/assets/SearchSVG"

const regions: region[] = ["Africa", "America", "Asia", "Europe", "Oceania"]

export const Filter = () => {
  const { handleCountries } = useCountries()
  const [ search, setSearch ] = useState<string>("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (search !== "") {
      handleCountries(countryAPI.byName(search))
    }
  } 

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    value === "all" 
      ? handleCountries(countryAPI.all())
      : handleCountries(countryAPI.byRegion(value as region))
  }

  return (
    <div className={style.filter}>
      <form 
        className={style.form}
        onSubmit={handleSubmit}
      >
        <button className={style.button} type="submit">
          <SearchSVG />
        </button>

        <input 
          className={style.input}
          onChange={(e) => setSearch(e.target.value) }
          value={search} 
          type="text" placeholder="Search for a country..."
        />
      </form>

      <select 
        className={style.selector}
        onChange={handleSelect}
      >
        <option value="all">-- All Regions --</option>
        {regions.map((region: region) => (
          <option className={style.option} value={region} key={region}>{region}</option>
        ))}
      </select>
    </div>
  )
}
