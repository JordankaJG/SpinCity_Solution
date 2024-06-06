import "./SearchBar.css";

interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}
const SearchBar = ({ handleSearch, searchTerm }: Props) => {
  return (
    <div>
      <div className="search_bar_wrapper">
        <label>Search for a game:</label>
        <input
          type="text"
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Enter a game..."
        />
      </div>
    </div>
  );
};
export default SearchBar;
