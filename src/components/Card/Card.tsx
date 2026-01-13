import "./Card.css"

type Props = {
  imgSrc: string;
  span?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
};

const Card = ({imgSrc, span, title, onClick, className}: Props) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      <img src={imgSrc} alt={title}/>
      <h3>{title}</h3>
      <span>{span}</span>
    </div>
  )
}

export default Card;