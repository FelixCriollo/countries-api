import { country } from "@types"
import { Card, CardSkeleton } from "../card"
import { Filter } from "../filters"
import { useCountries } from "@/context/countriesContext"

import global from "@/global.module.css"
import style from "./style.module.css"

const SkeletonLoading = () => {
  return (
    <>
      <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
      <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
    </>
  )
}

export const Main = () => {
  const { loading, countries } = useCountries()

  return (
    <main className={global.container}>
      <Filter />
      {
        countries.length === 0 && loading === false
          ? <p>Elemento no encontrado</p>
          : null
      }
      {
        loading 
          ? <div className={style.card_container}><SkeletonLoading /></div> 
          : <div className={style.card_container}>
              {countries.map((country: country) => (
                <Card key={country.name} {...country} />
              ))}
            </div>
      }
    </main>
  )
}
