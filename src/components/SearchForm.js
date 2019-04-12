import React, { useState } from "react";

const SearchForm = ({ search }) => {
  const [searchValue, setSearchValue, dropdownValue, setDropdown] = useState("");

  const handleSearchDropdown = e => {
    setDropdown(e.target.value)
      }

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = e => {
    console.log(e.target.value);
    e.preventDefault()
    search(searchValue, dropdownValue)
    resetInputField()
  }

  return (
    <form className="search">
      <select onChange={handleSearchDropdown}>
        <option value='prodname'>by product name</option>
        <option>by product type</option>
        <option>by brand name</option>
      </select>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default SearchForm;
