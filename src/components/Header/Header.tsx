import {useEffect, useState} from "react";
import {Navigation} from "../../components";
import "./Header.css";

const Header = () => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const homeSection = document.querySelector(".home__section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLight(entry.isIntersecting);
      },
      {threshold: 0.1}
    );

    if (homeSection) observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`header ${isLight ? "header__light" : "header__dark"}`}>
      <a aria-label="Logo" className="header__logo" href="/">Тетяна Колюка</a>
      <nav>
        <Navigation/>
      </nav>
    </header>
  );
};

export default Header;
