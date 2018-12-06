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

            <div className="form-group d-flex justify-content-center">
              <button className="login-button" onClick={this.props.onLogin}>
                <strong> Login</strong>
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
              <p style={{ fontSize: "20px", color: "#2193b0" }}>
                {" "}
                Welcome to your blog
              </p>
              <p style={{ fontSize: "20px", color: "#2193b0" }}>
                Where every day bloggin is a reality
              </p>
              <p style={{ fontSize: "20px", color: "#2193b0" }}>
                Where your thoughts become your life
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
