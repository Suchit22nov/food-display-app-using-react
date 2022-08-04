import React from 'react'
import { MenuCard } from '../components/MenuCard';
import {MenuList} from "../helpers/MenuList"
import "../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((list)=>{ return (
                <MenuCard name={list.name} image={list.image} price={list.price}/>
            )

            })}
            
        </div>
    </div>
  )
}

export default Menu