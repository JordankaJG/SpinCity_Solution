import React, { useEffect, useState } from "react";
import { GameI } from "../interfaces";
import { Interface } from "readline";

const useFetch = (url: string) => {
  const [games, setGames] = useState<Array<GameI>>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, [url]);
  return [games];
};

export default useFetch;
