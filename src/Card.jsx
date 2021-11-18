import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="mytutorial" className="card_img" />
      <h3 className="card_info">{props.Name}</h3>
    </div>
  );
}

export default Card;
