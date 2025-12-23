import gallery1 from "../../../public/images/gallery/gallery1.jpg";
import gallery2 from "../../../public/images/gallery/gallery2.jpg";
import gallery3 from "../../../public/images/gallery/gallery3.jpg";
import "./Gallery.css"

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={gallery1} alt=""/>
      <img src={gallery2} alt=""/>
      <img src={gallery3} alt=""/>
    </section>
  )
}

export default Gallery;