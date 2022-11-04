import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import style from "./styles.module.css"

export const CardSkeleton = () => {
  return (
    <div className={style.card}>
      <Skeleton className={style.skeleton} width="100%" height={160} />

      <div className={style.card__content}>
        <Skeleton className={style.skeleton} style={{marginBottom: "0.3em"}} width={150} />
        <Skeleton className={style.skeleton} style={{marginBottom: "0.22em"}} width={100} />
        <Skeleton className={style.skeleton} style={{marginBottom: "0.22em"}} width={120} />
        <Skeleton className={style.skeleton} style={{marginBottom: "0.22em"}} width={110} />
        <Skeleton className={style.skeleton} style={{marginBottom: "0.22em"}} width={90} />
        <Skeleton className={style.skeleton} style={{marginBottom: "0.22em"}} width={110} />
      </div>
    </div>
  )
}
