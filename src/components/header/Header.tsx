import global from "@/global.module.css"
import style from "./styles.module.css"
import { DarkModeIcon } from "./darkModeIcon"

export const Header = () => {
  const handleDarkMode = () => {
    const body = document.querySelector("body")  

    if(body!.classList.contains("light-theme")) {
      body!.classList.add("dark-theme")
      body!.classList.remove("light-theme")
    } else {
      body!.classList.add("light-theme")
      body!.classList.remove("dark-theme")
    }
  }

  return (
    <header className={style.header_shadow}>
      <div className={`${global.container} ${style.header}`}>
        <h1>Where in the world?</h1>

        <button
          onClick={handleDarkMode}
          className={style.dark_mode__cont}
        >
          <DarkModeIcon />
          <p>Dark Mode</p>
        </button>
      </div>
    </header>
  )
}
