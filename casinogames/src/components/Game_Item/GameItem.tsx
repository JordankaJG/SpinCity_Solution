import { Link } from "react-router-dom";
import "./GameItem.css";

interface Props {
  image: string;
  name: string;
}

const GameItem = ({ image, name }: Props) => {
  return (
    <Link to={`/gamepage/${name}`}>
      <div className="game_container">
        <div className="image-container">
          <img src={image} alt="/" />
        </div>
        <div className="game_name">{name}</div>
      </div>
    </Link>
  );
};

export default GameItem;
