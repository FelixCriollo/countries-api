import { country } from "@types"
import { Card } from "../card"
import { Filter } from "../filters"
import { useCountries } from "@/context/countriesContext"
import global from "@/global.module.css"
import style from "./style.module.css"

export const Main = () => {
  const { loading, countries } = useCountries()

  console.log(`loading: ${loading}`);

  return (
    <main className={global.container}>
      <Filter />
      
      {
        loading 
          ? <p>Cargando...</p> 
          : <div className={style.card_container}>
              {countries.map((country: country) => (
                <Card key={country.name} {...country} />
              ))}
            </div>
      }
    </main>
  )
}
