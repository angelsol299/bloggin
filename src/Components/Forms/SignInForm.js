import React, { Component } from "react";

export class SignInForm extends Component {
  render() {
    return (
      <div className="form-group">
        <div className=" card">
          <h1>Bloggin</h1>
          <div className="login-form">
            <form>
              <br />
              <h2 className="text-center1">SignIn</h2>
              <div className="inputs">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Your email"
                  value={this.props.email}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.props.password}
                  onChange={this.props.onChange}
                />
              </div>
            </form>
            <br />
            <div className="form-group d-flex justify-content-center">
              <button className="login-button" onClick={this.props.onLogin}>
                Login
              </button>
              <br />
              <button
                className="btn btn-primary login-button"
                onClick={this.props.onRegister}
              >
                Register
              </button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p style={{ fontSize: "17px" }}>
                {" "}
                Welcome to your main bloggin solution
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
