import React from "react";
import "./Card.css";

// access the state here to run the handle click fn
// create a callback prop in App
export default function Card(props) {
  //console.log(props.listId)
  return (
    <div className="Card">
      <button type="button" onClick={() => props.onDelete(props.id, props.listId)}>
        {props.id}
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
