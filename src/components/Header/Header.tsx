import {useEffect, useState} from "react";
import {Navigation} from "../../components";
import "./Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLight(entry.isIntersecting);
      },
      {threshold: 0.2}
    );

    if (homeSection) observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${isLight ? "header__light" : "header__dark"}`}>
      <a className="header__logo" href="#home">Тетяна Колюка</a>
      <Navigation activeSection={activeSection}/>
    </header>
  );
};

export default Header;
