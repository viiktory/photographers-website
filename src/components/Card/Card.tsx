import "./Card.css"

type Props = {
  key?: number
  imgSrc: string;
  span?: string;
  title?: string;
  onOpen?: () => void;
  className?: string;
};

const Card = ({imgSrc, span, title, onOpen}: Props) => {
  return (
    <div className="card">
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