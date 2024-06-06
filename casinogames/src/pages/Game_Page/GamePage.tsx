import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { GameI } from "../../interfaces";
import "./GamePage.css";

const GamePage = () => {
  const [games] = useFetch("http://localhost:8000/games");

  const { name } = useParams<{ name: string }>();
  const [selectedGame, setSelectedGame] = useState<GameI>();

  useEffect(() => {
    if (name && games) {
      const findGame = games.find((el) => el.name === name);

      setSelectedGame(findGame);
    }
  }, [name, games]);

  return (
    <div>
      {selectedGame && (
        <div className="game_wrapper">
          <div className="image_container">
            <img src={selectedGame.icon_2} alt="" />
          </div>
          <div className="image_name">{selectedGame.name}</div>
        </div>
      )}
    </div>
  );
};
export default GamePage;
