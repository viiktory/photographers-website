import {Navigation} from "../../components";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Navigation/>
      </nav>
      <a aria-label="Logo" className="header__logo" href="/">Тетяна Колюка</a>
    </footer>
  )
}

export default Footer