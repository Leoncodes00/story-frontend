import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import images from "../images";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          className="image"
          src={images[Math.floor(Math.random() * images.length)]}
        />
      </div>
    );
  }
}
