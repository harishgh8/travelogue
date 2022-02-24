import React from "react";
import "../style.css";

export default function CanvasCards(props) {
  return (
    <div className="canvas-card">
      <div className="card--image">
        <img className="card-image" src={props.item.image} />
      </div>
      <div className="card-details">
        <img className="svg-icon" src="https://freesvg.org/img/map-pin.png" />
        <span className="card-country">{props.item.country}</span>{" "}
        <a className="google-maps" href={props.item.gmaps}>
          View on gogle maps
        </a>
        <h1 className="card-place">{props.item.place}</h1>
        <p className="card-duration">{props.item.duration}</p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
