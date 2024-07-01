import React from "react";
import Icon from "../Icon";

function Dropdown({ isFilter, changeFilter }) {
  return (
    <div className="flex items-baseline">
      <label htmlFor="sort" className=" text-custom-gray-700 mr-4">
        Sort
      </label>
      <div className="relative">
        <Icon
          id="chevron-down"
          className="absolute text-custom-gray-900 pointer-events-none right-2 top-4"
        />
        <select
          className="bg-gray-100 text-custom-gray-900 px-4 pr-11 py-4 rounded-lg  font-semibold text-base"
          name="sort"
          id="sort"
          value={isFilter}
          onChange={(event) => changeFilter(event.target.value)}
        >
          <option value="Show All">Show all</option>
          <option value="New Released">New Released</option>
          <option value="Sale">Sale</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
