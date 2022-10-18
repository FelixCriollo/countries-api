import { SVGProps } from "react"
import { FC } from "react"
import style from "./styles.module.css"

export const DarkModeIcon: FC<SVGProps<SVGSVGElement>>  = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fillOpacity: 1,
      }}
      className={style.svg}
      d="M8.605 15.648C4.387 15.648.961 12.215.961 8S4.39.352 8.605.352c.258 0 .512.015.77.039a.64.64 0 0 1 .465.996 6.331 6.331 0 0 0-1.098 3.57 6.34 6.34 0 0 0 5.723 6.332c.226.02.422.16.515.363a.644.644 0 0 1-.05.633 7.643 7.643 0 0 1-6.325 3.363Zm-.39-14A6.37 6.37 0 0 0 2.242 8c0 3.508 2.856 6.367 6.363 6.367a6.378 6.378 0 0 0 4.622-1.992 7.658 7.658 0 0 1-3.778-2.27 7.623 7.623 0 0 1-1.234-8.457Zm0 0"
    />
  </svg>
)