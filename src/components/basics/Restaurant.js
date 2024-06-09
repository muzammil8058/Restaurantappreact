import React  , {useState } from 'react'
import "./style.css"
import Menu from "./menudata" 
import MenuCard from "./MenuCard"
import Navbar from "./navbar"



 const uniqueList = [ ...new Set (Menu.map((curElem) => {

  return curElem.category;
 })) ,
  "All"
 
];
const Restaurant = () => {
    const [menuData , setMenuData]  = useState(Menu)

    const [menuList ] = useState(uniqueList)


    const filterItem = (category)=> {
      if (category === "All") {
        setMenuData(Menu);
        return;
      }
      const updatedList = Menu.filter((curElem)=> {
      return curElem.category === category;

      });

      setMenuData(updatedList);

    };
      
    console.log(menuData);
  return (
    <div>

    < Navbar filterItem = {filterItem} menuList = {menuList}/>

    < MenuCard  menudata = {menuData}  / >
    </div>
  )
}



export default Restaurant;
