import React, { useState } from "react";

const SearchForm = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdown] = useState("")

  const handleSearchDropdown = e => {
    console.log(dropdownValue)
    setDropdown(e.target.value)
      }

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = e => {
    e.preventDefault()
    search(searchValue, dropdownValue)

  }

  return (
    <form className="search">
      <select onChange={handleSearchDropdown}>
        <option value={'product_type'}>search by product category</option>
        <option value={'brand'}>search by brand</option>
      </select>

        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="ie. lipstick"
        />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default SearchForm;
