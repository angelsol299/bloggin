import React, { Component } from "react";

export class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button className="logout-button" onClick={this.props.onClick}>
          Logout
        </button>
      </div>
    );
  }
}

export default LogoutButton;
