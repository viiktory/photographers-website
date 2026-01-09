import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {gallery} from "../../data/gallery/gallery.ts";
import "./Gallery.css"

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <Swiper
        slidesPerView={3}
        spaceBetween={26}
        loop={true}
        modules={[Autoplay]}
        autoplay={{delay: 2000}}
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.src} alt={img.alt}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Gallery;