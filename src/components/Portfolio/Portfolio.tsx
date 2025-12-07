import {Card} from "../../components";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section id="projects" className="portfolio">
      <Card imgSrc="/images/drama/drama1.jpg" span="Вистави"
            title='"Маріупольська драма"'/>
      <Card imgSrc="/images/stars/stars1.jpg" span="Концерти"
            title="Оля Полякова"/>
      <Card imgSrc="/images/city/city1.jpg" span="Вуличні зйомки"
            title="Місто"/>
      <Card imgSrc="/images/people/people1.jpg" span="Приватні фотосесїї"
            title="Ліза"/>
    </section>
  )
}

export default Portfolio;