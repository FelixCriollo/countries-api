import { allCountry } from "@/api"
import { country } from "@types"
import { useEffect, useState } from "react"
import { Card } from "../card"
import global from "@/global.module.css"
import style from "./style.module.css"

export const Main = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [countries, setCountries] = useState<country[]>([])
  
  useEffect(() => {
    allCountry().then(res => {
      setLoading(false)
      setCountries(res)
    })
  }, [])

  if(loading) {
    return (<p>Cargando</p>)
  } else {
    return (
      <div className={`${global.container} ${style.card_container}`}>
        {countries.map((country: country) => (
          <Card {...country} />
        ))}
      </div>
    )
  }
}
