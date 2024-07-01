import React from "react";
import { useDispatch } from "react-redux";
import { openCart } from "../../stateMachine/cartMenuSlice";

function CartPopUp({ popupItem, resetPopupItem }) {
  const { name, imageSrc } = popupItem;
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-2 z-10 right-2 bg-gray-200 w-56 p-2 rounded-2xl`}
    >
      <div className="overflow-hidden w-full rounded-tl-xl rounded-tr-xl">
        <img src={imageSrc} alt={name} />
      </div>

      <p className="font-semibold text-center pt-1">{name}</p>
      <div className="flex justify-center gap-2 w-full">
        <button
          onClick={() => {
            dispatch(openCart());
            resetPopupItem();
          }}
          className="rounded-full w-full bg-custom-gray-900 hover:bg-gray-500 flex items-center justify-center text-white font-semibold  h-10"
        >
          Checkout Bag
        </button>
      </div>
    </div>
  );
}

export default CartPopUp;
