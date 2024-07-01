import React from "react";
import Icon from "../Icon";
import { Tweeter } from "../Icon";
import {
  UpperFooterNav1,
  UpperFooterNav2,
  UpperFooterNav3,
  BottomFooterNav,
} from "../../constants";

function Footer() {
  return (
    <footer className="bg-custom-gray-900">
      <ScreenExtraSmallToSmall />
      <ScreenSmallToMedium />
      <ScreenMediumToAbove />
    </footer>
  );
}

export default Footer;

function ScreenExtraSmallToSmall() {
  return (
    <>
      <div className="sm:hidden xs:flex min-h-[280px] xs:gap-8 px-10 pt-10 w-full xs:items-center xs:text-center xs:flex-col bg-custom-gray-900 text-white">
        <UpperFooterNavOne />
        <UpperFooterNavTwo />
        <UpperFooterNavThree />
        <IconNav />
      </div>
      <div className="sm:hidden xs:flex min-h-[50px] px-10 xs:flex-col xs:gap-5 items-center w-full bg-custom-gray-900 text-white">
        <div className="flex  items-center gap-2 text-xs font-bold">
          <Icon id="map-pin" size={"15px"} />
          <a href="/" onClick={(event) => event.preventDefault()}>
            India
          </a>
        </div>
        <p className="text-xs text-gray-400 font-semibold">
          <span className="text-xs">©</span> {new Date().getFullYear()}{" "}
          Shoe-off, Inc. All Rights Reserved
        </p>
        <BottomFooterNavOne />
      </div>
    </>
  );
}

function ScreenSmallToMedium() {
  return (
    <div
      id="small-screen"
      className="xs:hidden min-h-[280px]  md+:hidden sm:gap-8  px-10 pt-10 w-full justify-around pb-8  sm:flex bg-custom-gray-900 text-white"
    >
      <div className="flex flex-col gap-8">
        <UpperFooterNavOne />
        <UpperFooterNavTwo />
      </div>
      <div className="flex flex-col gap-4">
        <UpperFooterNavThree />
        <BottomFooterNavOne />
      </div>
      <div className="flex flex-col sm:mb-0 text-end">
        <IconNav />
        <div className="flex justify-end  items-center gap-2 text-xs font-bold">
          <Icon id="map-pin" size={"15px"} />
          <a href="/" onClick={(event) => event.preventDefault()}>
            India
          </a>
        </div>
        <p className="text-xs mt-4 text-gray-400 font-semibold">
          <span className="text-xs">©</span> {new Date().getFullYear()}{" "}
          Shoe-off, Inc. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

function ScreenMediumToAbove() {
  return (
    <>
      <div className="xs:hidden sm:hidden min-h-[280px] md+:gap-16  px-10 pt-10 w-full  md+:flex md+:text-start md+:items-start md+:flex-row  bg-custom-gray-900 text-white">
        <UpperFooterNavOne />
        <UpperFooterNavTwo />
        <UpperFooterNavThree />
        <IconNav />
      </div>
      <div className="xs:hidden sm:hidden min-h-[50px] px-10  md+:flex-row items-center w-full md+:flex md+:gap-10 bg-custom-gray-900 text-white">
        <div className="flex  items-center gap-2 text-xs font-bold">
          <Icon id="map-pin" size={"15px"} />
          <a href="/" onClick={(event) => event.preventDefault()}>
            India
          </a>
        </div>
        <p className="text-xs text-gray-400 font-semibold">
          <span className="text-xs">©</span> {new Date().getFullYear()}{" "}
          Shoe-off, Inc. All Rights Reserved
        </p>
        <BottomFooterNavOne />
      </div>
    </>
  );
}

function UpperFooterNavOne() {
  return (
    <nav className="flex flex-col gap-2 font-bold">
      {UpperFooterNav1.map((link) => (
        <a href="/" onClick={(event) => event.preventDefault()} key={link}>
          {link}
        </a>
      ))}
    </nav>
  );
}
function UpperFooterNavTwo() {
  return (
    <nav className=" flex flex-col gap-2 w-24 text-xs [&>*:first-child]:text-base   [&>*:first-child]:text-white  [&>*:first-child]:font-bold text-gray-200">
      {UpperFooterNav2.map((link) => (
        <a
          href="/"
          onClick={(event) => event.preventDefault()}
          key={link}
          className="hover:text-white hover:font-bold"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
function UpperFooterNavThree() {
  return (
    <nav className="flex flex-col gap-2 text-xs [&>*:first-child]:text-base  [&>*:first-child]:text-white  [&>*:first-child]:font-bold text-gray-200">
      {UpperFooterNav3.map((link) => (
        <a
          href="/"
          onClick={(event) => event.preventDefault()}
          key={link}
          className="hover:text-white hover:font-bold"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

function IconNav() {
  return (
    <nav className="flex-1  flex xs:mb-8 md+:mb-0 justify-end items-start ">
      <div className="flex gap-3 justify-center items-center">
        <a href="/" onClick={(event) => event.preventDefault()}>
          <Tweeter />
        </a>
        <a href="/" onClick={(event) => event.preventDefault()}>
          <Icon id="facebook" strokeWidth={1.6} />
        </a>

        <a href="/" onClick={(event) => event.preventDefault()}>
          <Icon id="youtube" strokeWidth={1.6} />
        </a>
        <a href="/" onClick={(event) => event.preventDefault()}>
          <Icon id="instagram" strokeWidth={1.6} />
        </a>
      </div>
    </nav>
  );
}

function BottomFooterNavOne() {
  return (
    <nav className="sm:gap-2 sm:text-start sm:mb-0 text-xs flex-1 text-gray-400 [&>a]:w-20 [&>a:last-child]:w-[81px] xs:mb-4 md+:text-end xs:text-center  xs:flex-col md+:flex-row flex justify-end md+:gap-8 xs:gap-4 font-semibold">
      {BottomFooterNav.map((link) => (
        <a
          href="/"
          onClick={(event) => event.preventDefault()}
          key={link}
          className="hover:text-white   hover:font-bold"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
