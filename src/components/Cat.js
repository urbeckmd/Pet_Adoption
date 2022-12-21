import React from 'react';
import "./Cat.css"

function Cat(props) {
  return (
    <div className="cat_container">
        <img src={props.image} alt="cat image" className="cat_image" />
        <p className='cat_name'>{props.name}</p>
    </div>
  )
}

export default Cat