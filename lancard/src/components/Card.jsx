import Language from "./Language";
import { data } from "../data/data";

const Card = () => {
  return (
    <div className="card">
      <h1>Card</h1>
      <div className="langWrapper">
        {data.map((lang, index) => (
          // this is the map function for the card
          <Language {...lang} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
