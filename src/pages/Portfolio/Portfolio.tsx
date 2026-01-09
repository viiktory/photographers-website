import {useState} from "react";
import iconArrow from "../../assets/icon/arrowRight.svg"
import {Card} from "../../components";
import {portfolioItems} from "../../data/portfolio/portfolioItems.ts";
import "./Portfolio.css"

const Portfolio = () => {
  const [visible, setVisible] = useState(4)

  const handleMore = () => {
    setVisible((prev) => prev + visible)
  }

  return (
    <section id="projects" className="container portfolio">
      <div className="portfolio__content">
        {portfolioItems.slice(0, visible).map((item, index) => (
          <Card key={index}
                imgSrc={item.imgSrc} title={item.title}
                span={item.span}
                className="portfolio__card"
          />
        ))}
      </div>
      {visible < portfolioItems.length && (
        <div className="portfolio__btn">
          <button onClick={handleMore} className="btn">
            <span>Завантажити більше</span>
            <img src={iconArrow} alt="Відкриття фото"/>
          </button>
        </div>
      )}
    </section>
  )
}

export default Portfolio;