import { useCountries } from "@/context/countriesContext"
import { Link } from "react-router-dom"
import ArrowLeft from "@/routes/detail/ArrowLeft"

import global from "@/global.module.css"
import style from "./styles.module.css"


export const Detail = () => {
  const { currentCountry, allCountries } = useCountries()
  const populationFormat = (n: number) => new Intl.NumberFormat("en-US").format(n)

  let borderCountries: string[] = []

  if (currentCountry.borders !== undefined) { 
    for (const country of allCountries) {
      for (const border of currentCountry.borders) {
        if (country.cca3 === border) {
          borderCountries.push(country.name)
        }
      }
    }
  }

  // todo add onclick event, that redirect to respective country detail

  return (
    <div className={`${global.container} ${style.detail}`}>
      <Link to="/">
        <span className={style.back}>
          <ArrowLeft />
          Back
        </span>
      </Link>

      <div className={style.detail__container}>
        <img className={style.img} src={currentCountry.flag} alt={currentCountry.name} />

        <div className={style.right__side}>
          <h2 className={style.name}>{currentCountry.name}</h2>

          <div className={style.data__container}>
            <ul>
              <li className={style.data}>
                Native Name: 
                <span> {currentCountry.nativeName}</span>
              </li>
              <li className={style.data}>
                Population: 
                <span> {populationFormat(currentCountry.population)}</span>
              </li>
              <li className={style.data}>
                Region: 
                <span> {currentCountry.region}</span>
              </li>
              <li className={style.data}>
                Sub Region: 
                <span> {currentCountry.subregion}</span>
              </li>
              <li className={style.data}>
                Capital: 
                <span> {currentCountry.capital}</span>
              </li>
            </ul>

            <ul>
              <li className={style.data}>
                Top Level Domain: 
                <span> {currentCountry.tld}</span>
              </li>
              <li className={style.data}>
                Currencies: 
                <span> {currentCountry.currencies.join(", ")}</span>
              </li>
              <li className={style.data}>
                Languages: 
                <span> {currentCountry.languages.join(", ")}</span>
              </li>
            </ul>
          </div>

          <div className={`${style.data} ${style.border_container}`}>
            <h2  className={style.heading2}>Border Country: </h2>

            <ul className={style.borders}>
              { 
                borderCountries.map((border: string) => (
                  <li key={border} className={style.border}>{border} </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}