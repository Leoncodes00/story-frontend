import React, { Component } from "react";

export class ViewComponent extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div>
        <h5>Story Name: {this.props.info.story_name}</h5>
        <h6>Text: {this.props.info.text}</h6>
      </div>
    );
  }
}

export default ViewComponent;
