import React, { Fragment } from "react";
import { formatPrice, isNewShoe } from "../../utils";
import { useFilter } from "../../Hooks";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stateMachine/cartSlice";
import CartPopUp from "../CartPopUp/CartPopUp";

function ShoeCard({ isFilter, isSearch }) {
  const ShoeList = useFilter(isFilter, isSearch);
  const dispatch = useDispatch();
  const [popupItem, setPopupItem] = React.useState({});
  const [fade, setfade] = React.useState("");
  if (ShoeList == undefined || !ShoeList.length) {
    return <PageNotFound isSearch={isSearch} />;
  }

  return (
    <>
      {ShoeList.map((shoeItem) => {
        const {
          slug,
          name,
          imageSrc,
          price,
          salePrice,
          releaseDate,
          numOfColors,
        } = shoeItem;
        return (
          <Fragment key={slug}>
            <div className="relative">
              <a href={`/${slug}`} onClick={(event) => event.preventDefault()}>
                <div className="overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md">
                  <img
                    src={imageSrc}
                    alt={name}
                    className="motion-safe:hover:origin-[50%_75%] transition-all will-change-transform duration-[600ms] motion-safe:hover:scale-110 motion-safe:hover:transition-all motion-safe:hover:duration-200  motion-safe:focus:scale-110 motion-safe:focus:transition-all motion-safe:focus:duration-200 "
                  />
                </div>
                {isNewShoe(releaseDate) && (
                  <p className="absolute bg-custom-secondary text-white font-bold text-xs top-3 -right-1 px-3 py-2 rounded-sm">
                    {isNewShoe(releaseDate)}
                  </p>
                )}
                {salePrice && (
                  <p className="absolute bg-custom-primary text-white font-bold text-xs top-3 -right-1 px-3 py-2 rounded-sm">
                    Sale
                  </p>
                )}
                <div className="flex justify-between mt-3 text-custom-gray-900">
                  <p className="font-semibold ">{name}</p>
                  {salePrice ? (
                    <p className="line-through">{formatPrice(price)}</p>
                  ) : (
                    <p>{formatPrice(price)}</p>
                  )}
                </div>
                {salePrice && (
                  <p className="absolute right-0 font-semibold text-custom-primary">
                    {formatPrice(salePrice)}
                  </p>
                )}

                <p className="text-custom-gray-700">
                  {numOfColors === 1
                    ? `${numOfColors} Color`
                    : `${numOfColors} Colors`}
                </p>
              </a>
              <button
                onClick={() => {
                  dispatch(addToCart(shoeItem));
                  setPopupItem(shoeItem);
                  setfade("fadeIn");
                }}
                className="rounded-full bg-custom-gray-900 hover:bg-gray-500 flex items-center justify-center text-white font-semibold w-full h-10 mt-1"
              >
                Add To bag
              </button>
            </div>
          </Fragment>
        );
      })}
      <CartCardPopup popupItem={popupItem} fade={fade} setfade={setfade} />
    </>
  );
}

export default ShoeCard;

function PageNotFound({ isSearch }) {
  return (
    <div className="absolute w-fitcontent">
      <p className="font-semibold text-2xl text-gray-400">
        {` We could not find anything for "${isSearch}".`}
      </p>
    </div>
  );
}

function CartCardPopup({ popupItem, setfade, fade }) {
  const TimeOutRef = React.useRef({
    fadeOut: undefined,
    resetPopup: undefined,
  });
  function resetPopupItem() {
    setfade("disappear");
  }
  React.useEffect(() => {
    if (fade === "fadeIn") {
      TimeOutRef.current.fadeOut = setTimeout(() => {
        setfade("fadeOut");
        TimeOutRef.current.resetPopup = setTimeout(() => {
          resetPopupItem();
        }, 1 * 500);
      }, 3 * 1000);
    }

    return () => {
      clearTimeout(TimeOutRef.current.fadeOut);
      clearTimeout(TimeOutRef.current.resetPopup);
    };
  }, [fade, popupItem?.slug]);

  return (
    <>
      {fade === "fadeIn" ? (
        <div className="animate-fadeIn">
          <CartPopUp popupItem={popupItem} resetPopupItem={resetPopupItem} />
        </div>
      ) : undefined}
      {fade === "fadeOut" ? (
        <div className={`animate-fadeOut ${popupItem?.name ? "" : "hidden"}`}>
          <CartPopUp popupItem={popupItem} resetPopupItem={resetPopupItem} />
        </div>
      ) : undefined}
    </>
  );
}
