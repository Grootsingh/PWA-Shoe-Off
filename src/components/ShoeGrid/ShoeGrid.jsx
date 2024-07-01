import React, { useState, useEffect } from "react";
import BreadCrumbs from "../BreadCrumbs";
import ShoeCard from "../ShoeCard";
import Dropdown from "../Dropdown";

function ShoeGrid({ isSearch }) {
  const [isFilter, setIsFilter] = useState("Show all");

  function changeFilter(newfilter) {
    setIsFilter(newfilter);
  }
  useEffect(() => {
    changeFilter("Show All");
  }, [isSearch]);

  return (
    <main className="flex-1">
      <div className="-mb-1 xs:block lg:hidden">
        <BreadCrumbs />
      </div>
      <header className="flex justify-between items-baseline">
        <h2 className="font-semibold text-2xl">Running</h2>
        <Dropdown isFilter={isFilter} changeFilter={changeFilter} />
      </header>
      <div id="space" className="h-8" />
      <div className="grid grid-cols-shoe gap-8">
        <ShoeCard isFilter={isFilter} isSearch={isSearch} />
      </div>
    </main>
  );
}

export default ShoeGrid;
