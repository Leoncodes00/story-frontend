import React, { Component } from "react";
import "./storybox.css";

export class StoryBox extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.submitStory();
  };

  handleChange = event => {
    this.props.saveName(event);
  };

  textBoxChange = event => {
    this.props.saveStory(event);
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label className="story-name">
              <input
                onChange={this.handleChange}
                placeholder="story name"
                type="text"
                name="name"
                value={this.props.name}
              />
            </label>
            <input className="submit-button" type="submit" />
            <textarea
              onChange={this.textBoxChange}
              placeholder="once upon a time..."
              type="text"
              className="text-box"
            ></textarea>
          </form>
        </div>
      </div>
    );
  }
}

export default StoryBox;
