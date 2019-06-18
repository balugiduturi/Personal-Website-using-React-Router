import React from "react";
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  formSubmit() {
    this.setState({
      value: ""
    });
  }

  handleChnages(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChnages.bind(this)}
        />
        <input
          type="button"
          value="submit"
          onClick={this.formSubmit.bind(this)}
        />
        <Prompt
          when={this.state.value !== ""}
          message="are you sure you want to leave without sending a message?"
        />
      </div>
    );
  }
}

export default Contact;
