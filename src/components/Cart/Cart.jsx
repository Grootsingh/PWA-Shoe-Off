import React from "react";
import { Dialog } from "@headlessui/react";
import Icon from "../Icon";
import { formatPrice } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../stateMachine/cartSlice";
import { closeCart } from "../../stateMachine/cartMenuSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const isOpen = useSelector((state) => state.cartMenu.value);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [thanksPopUp, setThanksPopup] = React.useState(false);

  function closeThanksPopup() {
    setThanksPopup(false);
  }

  return (
    <>
     <Dialog
        open={isOpen}
        onClose={() => {}}
        onClick={(event) => {
          if (event.target?.id === "onClose") {
            dispatch(closeCart());
            console.log("hihi")
          }
        }}
      >
        <div
          className="fixed inset-0 bg-black/30 animate-fade"
          aria-hidden="true"
        />
        <div
          id="onClose"
          className="fixed inset-0  flex w-screen items-center justify-center p-4 z-[5]"
        >
          <Dialog.Panel className="flex flex-col animate-slide will-change-transform fixed right-0 h-full w-[300px] bg-white">
            <CloseBtn />
            <div id="space" className="h-16"></div>
            <div className="overflow-auto flex-1 px-6 pb-8 flex flex-col  ">
              {cart.map((eachShoe) => {
                const {
                  slug,
                  name,
                  imageSrc,
                  price,
                  salePrice,
                  inTheCartCount,
                } = eachShoe;

                return (
                  <div key={slug} className="pb-2">
                    <div className="relative flex">
                      <div className="overflow-hidden w-[75%] rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md">
                        <img src={imageSrc} alt={name} className="w-[90%]" />
                      </div>
                      <div className="w-[25%] flex flex-col justify-evenly">
                        <div className="w-full flex justify-center">
                          {salePrice ? (
                            <p className="font-semibold text-xl  text-black">
                              {formatPrice(salePrice)}
                            </p>
                          ) : (
                            <p className="font-semibold text-xl text-black">
                              {formatPrice(price)}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-evenly gap-2">
                          <button
                            onClick={() => dispatch(removeFromCart(eachShoe))}
                          >
                            <Icon hoverState={false} id="minus" />
                          </button>
                          <div className="w-2 flex justify-center">
                            <p className="font-semibold">{inTheCartCount}</p>
                          </div>
                          <button onClick={() => dispatch(addToCart(eachShoe))}>
                            <Icon hoverState={false} id="plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="font-semibold">{name}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex p-2 h-20 justify-center items-center">
              <button
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(closeCart());
                  if (cart.length > 0) {
                    setThanksPopup(true);
                  }
                }}
                data-autofocus={true}
                className="rounded-full w-[55%] bg-custom-gray-900 hover:bg-gray-500 flex items-center justify-center text-white font-semibold  h-10"
              >
                Buy
              </button>
              <div className="flex-1 flex justify-center items-center">
                <p className="font-bold">Total: {formatPrice(totalPrice)}</p>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <ThanksForBuying
        thanksPopUp={thanksPopUp}
        closeThanksPopup={closeThanksPopup}
      />
    </>
  );
}

export default Cart;

function CloseBtn() {
  const dispatch = useDispatch();
  return (
    <button
      className="absolute p-3 top-3 right-3"
      onClick={() => dispatch(closeCart())}
    >
      <Icon id="close" />
    </button>
  );
}

function ThanksForBuying({ thanksPopUp, closeThanksPopup }) {
  return (
    <Dialog
      open={thanksPopUp}
      onClose={() => {
        closeThanksPopup();
      }}
    >
      <div
        className="fixed inset-0 bg-black/30 animate-fade"
        aria-hidden="true"
      />
      <div
        id="onClose"
        className="fixed inset-0  flex w-screen items-center justify-center p-4 z-[5]"
      >
        <Dialog.Panel className="flex flex-col justify-center items-center  fixed  py-6 px-2 rounded-md w-[300px] bg-white">
          <button
            className="absolute p-3 top-3 right-3"
            onClick={() => closeThanksPopup()}
          >
            <Icon id="close" />
          </button>
          <div className="flex flex-col justify-center items-center">
            <Icon id="success" size={100} color={"hsl(240deg 60% 63%)"} />
            <p className="text-center mt-2 font-bold text-lg text-custom-secondary">
              Thanks for Purchasing from US
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
