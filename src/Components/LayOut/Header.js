import React, { Component } from "react";
import LogoutButton from "../Buttons/LogoutButton.js";

export class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <h4>
          Welcome to our platform
          {this.props.header}
        </h4>

        {this.props.state && <LogoutButton onClick={this.props.OnLogout} />}
      </div>
    );
  }
}

export default Header;
