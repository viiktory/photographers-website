import {Navigation} from "../../components"
import "./Header.css"

const Header = () => {
  return (
    <header className="header container">
      <span aria-label="Logo" className="header__logo">Тетяна Колюка</span>
      <div>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header