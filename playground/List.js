import React, { Component } from "react";
import ReactDom from "react-dom";

class List extends Component {
  render() {
    const tasks = ["take the trash", "yes do it now", "now you better do it"];
    return (
      <ol>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}

export default List;
