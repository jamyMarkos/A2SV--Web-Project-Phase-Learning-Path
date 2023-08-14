import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center py-2 mb-1">
        <div className="hover:cursor-pointer font-light text-2xl" id="logo">
          Easy Meals
        </div>
        <div className="flex justify-between items-center border px-3 py-2">
          <select name="options" className="focus:outline-none text-[13px]">
            <option value="option 0">ALL CATEGORIES</option>
            <option value="option 1">Option 1</option>
            <option value="option 2">Option 2</option>
            <option value="option 3">Option 3</option>
          </select>
          <input
            type="text"
            placeholder="Search Recipes..."
            className="focus:outline-none ml-2"
          />
          <FaSearch
            size={20}
            color="#ba6f06"
            className="ml-3 hover:cursor-pointer"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Search;
