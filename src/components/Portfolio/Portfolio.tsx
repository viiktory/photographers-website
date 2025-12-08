// import iconArrow from "../../assets/arrowRight.svg"
import {Card} from "../../components";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section id="projects" className="portfolio">
      <Card imgSrc="/images/drama/drama1.jpg"
            title='Індивідуальна зйомка'
            span="Персональні портрети або фотосесії тільки для вас"/>
      <Card imgSrc="/images/stars/stars1.jpg" title="Репортажна зйомка"
            span="Живі кадри подій, свят, заходів"
      />
      <Card imgSrc="/images/city/city1.jpg"
            title="Студійна зйомка"/>
      <Card imgSrc="/images/people/people1.jpg"
            title="Сімейна зйомка "/>
      <Card imgSrc="/images/stars/stars1.jpg"
            title="Зйомка концертів і різних масових заходів "/>
      <Card imgSrc="/images/people/people1.jpg"
            title="Мої проекти "/>
      {/*<button className="portfolio__btn">*/}
      {/*  <span>Завантажити більше</span>*/}
      {/*  <img src={iconArrow} alt="Відкриття фото"/>*/}
      {/*</button>*/}
    </section>
  )
}

export default Portfolio;