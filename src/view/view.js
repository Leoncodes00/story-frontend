import React, { Component } from "react";
import ViewComponent from "./view-component";
import RenderView from "./RenderView";
let FETCHEDDATA = [];
let NAMEDATA = [];

export class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filterWord: ""
    };
    NAMEDATA.push(this.state.data);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stories`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          data: data
        })
      );
  }

  callView = data => {
    FETCHEDDATA.push(data);
    console.log(FETCHEDDATA[0].length);
    for (let i = 0; i < FETCHEDDATA[0].length; i++) {
      NAMEDATA.push(FETCHEDDATA[0][i].story_name);
    }
    console.log(NAMEDATA[0]);
  };

  handleChange = event => {
    this.setState({
      filterWord: event.target.value
    });
  };

  render() {
    const { data, filterWord } = this.state;
    const filteredName = data.filter(value =>
      value.story_name.toLowerCase().includes(filterWord.toLowerCase())
    );
    return (
      <div>
        <form>
          <label className="story-name">
            <input
              onChange={this.handleChange}
              placeholder="search"
              type="text"
              value={this.state.filterWord}
            />
          </label>
        </form>
        <RenderView name={filteredName} />
      </div>
    );
  }
}

export default View;
