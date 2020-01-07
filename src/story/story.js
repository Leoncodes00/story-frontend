import React from "react";
import "./story.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../card/card.component";
import StoryBox from "../storybox/storybox";
import images from "../images";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      images: images,
      name: "",
      storyText: "",
      user: [],
      submitted_name: "",
      submitted_text: ""
    };
  }

  saveName = event => {
    return this.setState({
      name: event.target.value
    });
  };

  saveStory = event => {
    return this.setState(
      {
        storyText: event.target.value
      },
      () => console.log(this.state.storyText)
    );
  };

  submitStory = () => {
    return this.setState(
      {
        submitted_name: this.state.name,
        submitted_text: this.state.storyText
      },
      () => {
        fetch("http://localhost:3000/stories", {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          method: "POST",
          body: JSON.stringify({
            story_name: this.state.submitted_name,
            text: this.state.submitted_text
          })
        });
      }
    );
  };

  render() {
    return (
      <div>
        <img
          className="image"
          src={
            this.state.images[
              Math.floor(Math.random() * this.state.images.length)
            ]
          }
        />

        <StoryBox
          saveName={this.saveName}
          name={this.state.name}
          storyText={this.state.storyText}
          submitStory={this.submitStory}
          saveStory={this.saveStory}
        />
      </div>
    );
  }
}

export default Story;
