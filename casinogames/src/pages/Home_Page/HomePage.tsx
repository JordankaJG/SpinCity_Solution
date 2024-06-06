import { useState } from "react";
import GamesList from "../../components/Games_List/GamesList";
import "./HomePage.css";
import SearchBar from "../../components/Search_bar/SearchBar";
import useFetch from "../../hooks/useFetch";
import SelectCat from "../../components/Select_Category/SelectCat";

const Homepage = () => {
  const [games] = useFetch("http://localhost:8000/games");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="search_filter">
        <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
        <SelectCat
          handleCategoryChange={handleCategoryChange}
          selectCategory={selectCategory}
        />
      </div>

      {games && (
        <GamesList
          games={games}
          searchTerm={searchTerm}
          selectCategory={selectCategory}
        />
      )}
    </div>
  );
};

export default Homepage;
