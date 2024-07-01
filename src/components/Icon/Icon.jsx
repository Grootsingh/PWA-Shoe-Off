import React from "react";
import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
  X,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  PlusCircle,
  MinusCircle,
  ThumbsUp,
} from "react-feather";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
  close: X,
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
  "map-pin": MapPin,
  plus: PlusCircle,
  minus: MinusCircle,
  success: ThumbsUp,
};

function Icon({
  id,
  color,
  size,
  strokeWidth,
  hoverState = true,
  ...delegated
}) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }
  const newStokeWidth = strokeWidth ? strokeWidth : 2;
  return (
    <div
      className={`${hoverState ? "hover:scale-110 hover:origin-center" : ""}`}
    >
      <Component
        color={color}
        strokeWidth={newStokeWidth}
        size={size}
        {...delegated}
      />
    </div>
  );
}

export default Icon;

const Tweeter = (props) => (
  <div className="hover:scale-110">
    <svg
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="none"
      height="21px"
      width="21px"
      fill="white"
      strokeWidth={2}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
    </svg>
  </div>
);

export { Tweeter };
