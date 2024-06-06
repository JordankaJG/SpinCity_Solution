import "./SelectCat.css";

interface Props {
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectCategory: string;
}

const SelectCat = ({ handleCategoryChange, selectCategory }: Props) => {
  return (
    <div>
      <div className="select_items_wrapper">
        <label>Choose a Category:</label>
        <select onChange={handleCategoryChange} className="select_option" value={selectCategory}>
          <option value="">All Categories</option>
          <option value="Popular Games">Popular Games</option>
          <option value="Top Slots">Top Slots</option>
          <option value="Video Slots">Video Slots</option>
          <option value="Video Poker">Video Poker</option>
          <option value="Skill Games">Skill Games</option>
          <option value="Mini Games">Mini Games</option>
        </select>
      </div>
    </div>
  );
};

export default SelectCat;
