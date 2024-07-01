import React from "react";
import BreadCrumbs from "../BreadCrumbs";

function ShoeCategory() {
  return (
    <aside className="basis-[248px] xs:hidden lg:block">
      <div className="mt-[18px] mb-11">
        <BreadCrumbs />
      </div>
      <SideBar />
    </aside>
  );
}

export default ShoeCategory;

const categoryList = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Training & Gym",
  "Football",
  "Skateboarding",
  "American Football",
  "Baseball",
  "Golf",
  "Tennis",
  "Athletics",
  "Walking",
];
function SideBar() {
  const [isClicked,setClick] = React.useState("Running")
  return (
    <>
      <div className="flex flex-col font-semibold gap-2 text-custom-gray-900 ">
        {categoryList.map((name) => {
          const style = name === isClicked ? "text-custom-primary" : "";

          return (
            <a
              href={"/"}
              className={`hover:font-bold hover:scale-[1.01] ${style}`}
              key={name}
              onClick={(event)=> {
                event.preventDefault()
                setClick(event.target.innerText)
              }}
            >
              {name}
            </a>
          );
        })}
      </div>
    </>
  );
}
