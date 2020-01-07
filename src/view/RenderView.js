import React, { Component } from "react";
import ViewComponent from "./view-component";

export class RenderView extends Component {
  renderData = () => {
    return this.props.name.map(info => <ViewComponent info={info} />);
  };
  render() {
    return <div>{this.renderData()}</div>;
  }
}

export default RenderView;
