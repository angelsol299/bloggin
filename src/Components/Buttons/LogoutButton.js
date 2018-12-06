import React, { Component } from "react";

export class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button
          style={{ borderRadius: "10px", marginRight: "17px" }}
          className="btn btn-danger"
          onClick={this.props.onClick}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default LogoutButton;
