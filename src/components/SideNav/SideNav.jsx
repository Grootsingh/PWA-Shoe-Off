import React from "react";
import Icon from "../Icon";
import { NavLinks } from "../../constants";
import { Dialog } from "@headlessui/react";

function SideNav({ isOpen, closeMenu }) {
  return (
    <Dialog open={isOpen} onClose={closeMenu}>
      <div
        className="fixed  inset-0 bg-black/30 animate-fade"
        aria-hidden="true"
      />
      <div className="fixed z-20 inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="animate-slide will-change-transform fixed right-0 h-full w-[300px] bg-white">
          <div className="px-6 py-8 h-full  flex flex-col ">
            <CloseBtn closeMenu={closeMenu} />
            <PrimaryNav />
            <SecondaryNav />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default SideNav;

function CloseBtn({ closeMenu }) {
  return (
    <div id="space" className="flex-1">
      <button className="absolute p-3 top-3 right-3" onClick={closeMenu}>
        <Icon id="close" />
      </button>
    </div>
  );
}

function PrimaryNav() {
  return (
    <>
      <nav className="text-lg  font-semibold flex flex-col gap-4">
        {NavLinks.map((link) => {
          return (
            <a
              href="/"
              key={link}
              className="first-of-type:text-custom-secondary group hover:font-bold"
            >
              <span>{link}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

function SecondaryNav() {
  return (
    <>
      <nav className="text-sm flex-1  text-custom-gray-700 flex flex-col gap-[14px] justify-end">
        <a href="/" className="hover:font-semibold">
          <span>Terms and Conditions</span>
        </a>
        <a href="/" className="hover:font-semibold">
          <span>Privacy Policy</span>
        </a>
        <a href="/" className="hover:font-semibold">
          <span>Contact Us</span>
        </a>
      </nav>
    </>
  );
}
