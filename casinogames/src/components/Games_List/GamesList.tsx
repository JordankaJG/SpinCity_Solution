import { GameI } from "../../interfaces";
import GameItem from "../Game_Item/GameItem";
import "./GamesList.css";

interface GamesListProps {
  games: GameI[];
  searchTerm: string;
  selectCategory: string;
}

const GamesList = ({ games, searchTerm, selectCategory }: GamesListProps) => {
  const searchedGames = games.filter((game) => {
    const searchGamematch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch = selectCategory
      ? game.cats.find((cat) => cat.title === selectCategory)
      : game;

    return searchGamematch && categoryMatch;
  });

  return (
    <div>
      <div className="container">
        <div className="games_wrapper">
          {searchedGames &&
            searchedGames.map((el) => (
              <div className="game_item" key={el.id}>
                <GameItem image={el.icon_2} name={el.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GamesList;
