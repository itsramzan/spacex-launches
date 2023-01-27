import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { searched } from "features/search/searchSlice";

const Search = () => {
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState(searchText);

  const handleSearched = (e) => {
    e.preventDefault();
    dispatch(searched(searchInput));
  };

  return (
    <form
      className="flex items-center relative w-full md:w-auto"
      onSubmit={handleSearched}
    >
      <input
        className="bg-transparent ring-2 ring-primary focus:ring-primary rounded-md pl-2 pr-12 py-2 w-full"
        type="text"
        spellCheck="false"
        placeholder="Rocket name (ex:falcon 9)"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <IoSearch
        onClick={handleSearched}
        className="absolute right-4 cursor-pointer"
      />
    </form>
  );
};

export default Search;
