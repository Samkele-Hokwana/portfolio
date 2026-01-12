import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WworkCard = (props) => {
  // Function to handle click based on the type of view prop
  const handleViewClick = (e) => {
    // If view is a function (for PDFs), call it and prevent NavLink navigation
    if (typeof props.view === 'function') {
      e.preventDefault(); // Prevent NavLink navigation
      props.view(); // Call the PDF opening function
    }
    // If view is a string (URL), NavLink will handle navigation normally
  }
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="1st project"/>
        <h2 className="porject-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              {/* If view is a function, use onClick. If it's a string, use to prop */}
              {typeof props.view === 'function' ? (
                <button className="btn" onClick={handleViewClick}>
                  View
                </button>
              ) : (
                <NavLink to={props.view} className="btn">
                  View
                </NavLink>
              )}
            </div>
        </div>
    </div>
  )
}

export default WworkCard;