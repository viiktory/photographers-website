import "./Card.css"

type Props = {
  imgSrc: string;
  span?: string;
  title?: string;
  onOpen?: () => void;
  className?: string;
};

const Card = ({imgSrc, span, title, onOpen, className}: Props) => {
  return (
    <div className={`card ${className}`}>
      <img src={imgSrc} alt={title}/>
      <h3>{title}</h3>
      <span>{span}</span>

      {onOpen && (
        <button onClick={onOpen}>
          View
        </button>
      )}
    </div>
  )
}

export default Card;