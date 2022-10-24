import { FC } from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { country } from "@types"
import style from "./styles.module.css"

export const Card: FC<country> = ({ 
  name, capital, flag, population, region 
}) => {

  const populationFormat = (n: number) => new Intl.NumberFormat("en-US").format(n) 

  return (
    <div className={style.card}>
      <div className={style.img__container}>
        <img src={flag} alt={name} />
      </div>

      <div className={style.card__content}>
        <h3 className={style.country_name}>{name}</h3>
        

        <p className={style.data}>
          Population: 
          <span className={style.value}>{populationFormat(population)}</span>
        </p>
        <p className={style.data}>
          Region: 
          <span className={style.value}>{region}</span>
        </p>
        <p className={style.data}>
          Capital: 
          <span className={style.value}>{capital} </span>
        </p>
      </div>
    </div>
  )
}
