import { country } from "@types"
import { Card, CardSkeleton } from "@/components/card"
import { Filter } from "@/components/filters"
import { useCountries } from "@/context/countriesContext"
import { useNavigate } from "react-router-dom"

import global from "@/global.module.css"
import style from "./styles.module.css"

const SkeletonLoading = () => {
  return (
    <>
      <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
      <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
    </>
  )
}

export const Home = () => {
  const { loading, countries, setCurrentCountry } = useCountries()
  const navigate = useNavigate()
  
  const handleOnClick = (country: country) => {
    setCurrentCountry(country)
    navigate(`/countries/${country.name}`)
  }

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
                <div key={country.name} onClick={() => handleOnClick(country)}>
                  <Card {...country} />
                </div>
              ))}
            </div>
      }
    </main>
  )
}
