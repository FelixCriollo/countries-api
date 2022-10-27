import { useCountries } from "@/context/countriesContext"
import { Link } from "react-router-dom"

import global from "@/global.module.css"
import style from "./styles.module.css"


export const Detail = () => {
  const { currentCountry } = useCountries()

  console.log(currentCountry)  

  return (
    <div className={global.container}>
      <Link to="/">
        <a>back</a>
      </Link>

      <div>

        <img />

        <div>
          <h2>COUNTRY NAME</h2>

          <div>
            detail
          </div>

          <div>
            border countries
          </div>
        </div>
      </div>
    </div>
  )
}