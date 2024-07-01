import React, { useState } from "react";
import SuperHeader from "../SuperHeader";
import MainHeader from "../MainHeader";
import ShoeGrid from "../ShoeGrid";
import ShoeCategory from "../ShoeCategory";
import Footer from "../Footer/Footer";
import { openDB } from "idb";
import { useDispatch } from "react-redux";
import { resetCart } from "../../stateMachine/cartSlice";
function App() {
  const [isSearch, setIsSearch] = useState("");
  const dispatch = useDispatch()
  function updateSearch(newSearch) {
    setIsSearch(newSearch);
  }

  React.useState(()=>{
    async function resetCartState(){
      const idb = await openDB("shoe-storage", 1, {
        async upgrade(db) {
          await db.createObjectStore("cart");
        },
      });
  
      const data = await idb.get("cart", "cartState");
      if(data){
        dispatch(resetCart(data))
      }
    }
    resetCartState()
  },[])


  return (
    <>
      <header>
        <SuperHeader updateSearch={updateSearch} />
        <MainHeader updateSearch={updateSearch} />
      </header>
      <div className="flex flex-row-reverse px-4 sm:px-8  py-16 gap-8">
        <ShoeGrid isSearch={isSearch} />
        <ShoeCategory />
      </div>
      <Footer />
    </>
  );
}

export default App;
