import React from 'react'

export const MenuCard = ({name,image,price}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>₹{price}</p>
    </div>
  )
}
