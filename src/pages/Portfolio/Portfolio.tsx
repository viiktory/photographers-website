import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import iconArrow from "../../assets/icon/arrowRight.svg"
import {portfolioItems} from "../../data/portfolio/portfolioItems";
import {gallery} from "../../data/gallery/gallery"
import {Card, Modal} from "../../components";
import "./Portfolio.css"


const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [visible, setVisible] = useState(4)

  const handleCardClick = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  }

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
                onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      {visible < portfolioItems.length && (
        <div className="portfolio__btn">
          <button onClick={handleMore} className="btn">
            <span>Завантажити більше</span>
            <img src={iconArrow} alt="Відкриття"/>
          </button>
        </div>
      )}
      {isModalOpen && activeItem && (
        <Modal onClose={() => setModalOpen(false)}>
          <Swiper
            slidesPerView={1}
            navigation={true}
          >
            {gallery.map((img) => (
              <SwiperSlide key={img.id}>
                <img src={img.src} alt={img.alt}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
      )}
    </section>
  )
}

export default Portfolio;