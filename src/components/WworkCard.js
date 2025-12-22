import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WworkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="1st project"/>
        <h2 className="porject-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.view} className="btn">View</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WworkCard;