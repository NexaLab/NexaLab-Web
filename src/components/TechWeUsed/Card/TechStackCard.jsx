import React from 'react'
import "./TechStackCard.css"



function TechStackCard(props) {
  return (
    <div id='tech-stack-card'>
        <img src={props.techImage} alt="" />
    </div>
  )
}

export default TechStackCard;