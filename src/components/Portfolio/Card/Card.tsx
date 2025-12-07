type Props = {
  imgSrc: string;
  span: string;
  title: string;
  onOpen?: () => void;
  className?: string;
};

const Card = ({imgSrc, span, title, onOpen}: Props) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title}/>
      <span>{span}</span>
      <h3>{title}</h3>

      {onOpen && (
        <button onClick={onOpen}>
          View
        </button>
      )}
    </div>
  )
}

export default Card;