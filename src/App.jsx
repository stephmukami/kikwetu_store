import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import RouterSwitch from './RouterSwitch'
import Home from './components/Home'
import './App.css'
function App() {

  const [selected,setSelected] = useState([])

  function addtoCart(item) {
    //setSelected((prevSelected) => [...prevSelected, item]);
    if(selected.includes(item)){
      item.quantity++
    }else{
      setSelected((prevSelected) => [...prevSelected, item]);

    }
  }

  function increaseAmount(checked) {
    setSelected((prevArray) =>
      prevArray.map((item) => {
        if (checked.id === item.id) {
          return {
            ...checked,
            quantity: checked.quantity + 1,
          };
        }
        return item;
      })
    );
  }
  

  function decreaseAmount(checked) {
    setSelected((prevArray) =>
      prevArray.map((item) => {
        if (checked.id === item.id) {
          if (checked.quantity > 1) { // Check if the quantity is greater than 0
            return {
              ...checked,
              quantity: checked.quantity - 1,
            };
          }
        }
        return item;
      })
    );
  }
  

function removeFromCart(id){
    setSelected((prevArray) =>
    prevArray.filter((item)=> item.id !==id)

    );
}

function handleQuantityChange(itemId, quantity) {
  const updatedItems = selected.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        quantity: quantity,
      };
    }
    return item;
  });
  setSelected(updatedItems);
}



//for testing
useEffect(() => {
    console.log("Selected items:", selected);
  }, [selected]);

  return (
    <>
  
    <RouterSwitch
    addtoCart = {addtoCart}
    removeFromCart ={removeFromCart}
    selected ={selected}
    onQuantityChange={handleQuantityChange}
    increaseAmount = {increaseAmount}
    decreaseAmount = {decreaseAmount}
    />
    </>
  )
}

export default App
