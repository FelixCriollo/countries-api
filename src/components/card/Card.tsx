import { FC } from "react"
import { country } from "@types"
import style from "./styles.module.css"

export const Card: FC<country> = ({ 
  name, capital, flag, population, region 
}) => {
  return (
    <div className={style.card}>
      <div>
        <div className={style["img__container-aux"]} style={{background: `url(${flag})`}}></div>
        
        <div className={style.img__container}>
          <img className={style.img} src={flag} alt={name} />
        </div>
      </div>

      <div className={style.card__content}>
        <h3 className={style.country_name}>{name}</h3>
        
        <p className={style.data}>
          Population: 
          <span className={style.value}>{population}</span>
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
