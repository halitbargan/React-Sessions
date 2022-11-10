import Button from "../button/Button";
import cardStyle from "./card.module.css";

//*module.css unique className'ler ürettiği için
//* stil ezilmeleri olmaz.


const Card = ({img, btnName, dil}) => {
  return (
    <div>
        <h1 className={cardStyle['title']}>{dil}</h1>
        <img className={cardStyle['images']} src={img} alt="img" />
        <Button btnName={btnName}/>
    </div>
  )
}

export default Card