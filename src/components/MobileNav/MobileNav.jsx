import React, { useState } from "react";
import Icon from "../Icon";
import SideNav from "../SideNav/SideNav";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { openCart } from "../../stateMachine/cartMenuSlice";

function MobileNav({ updateSearch }) {
  const totalItemInTheCart = useSelector((state) => state.cart.totalItem);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex gap-8 items-center">
        <button
          href="/"
          className="relative hover:scale-105"
          onClick={(event) => {
            dispatch(openCart());
            event.preventDefault();
          }}
        >
          {totalItemInTheCart > 0 && (
            <div className="rounded-full z-[1] w-5 h-5 absolute top-2 -right-2  text-white bg-black font-bold text-xs flex justify-center items-center">
              <p className="mb-[1px]">{totalItemInTheCart}</p>
            </div>
          )}
          <Icon id="shopping-bag" />
        </button>
        <SearchInput updateSearch={updateSearch} />
        <MenuIcon />
        <Cart />
      </nav>
    </>
  );
}
export default MobileNav;

function MenuIcon() {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Icon id="menu" />
      </button>
      {isOpen && <SideNav isOpen={isOpen} closeMenu={closeMenu} />}
    </>
  );
}

function SearchInput({ updateSearch }) {
  const [isInput, setIsInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateSearch(isInput);
    setIsInput("");
  }

  return (
    <>
      <form className="relative" onSubmit={handleSubmit}>
        <label htmlFor="search-shoe" className="sr-only">
          Search
        </label>

        <Icon
          id="search"
          hoverState={false}
          onClick={handleSubmit}
          className="absolute top-[6px] left-[6px]"
          size={16}
          strokeWidth={2.3}
        />
        <input
          className="default_textArea pl-6 bg-inherit border-2 border-current rounded-md w-[125px]"
          type="text"
          name="search-shoe"
          placeholder="Search..."
          id="search-shoe"
          value={isInput}
          onChange={(event) => setIsInput(event.target.value)}
        />
      </form>
    </>
  );
}
