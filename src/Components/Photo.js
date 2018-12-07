import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "./Spinner/Spinner";

class Photo extends Component {
  render() {
    const post = this.props.post;
    if (post) {
      return (
        <figure className="figure">
          <Link to={`/single/${post.id}`}>
            {" "}
            <img
              className="photo"
              src={post.imageLink}
              alt={post.description}
            />
          </Link>
          <figcaption>
            {" "}
            <h2 style={{ color: "#2193b0" }} y>
              {" "}
              {post.category}{" "}
            </h2>{" "}
            <p> {post.description} </p>{" "}
          </figcaption>
          <div className="button-container">
            <button
              onClick={() => {
                this.props.startRemovingPost(this.props.index, post.id);
                this.props.history.push("/");
              }}
            >
              {" "}
              Remove{" "}
            </button>
            <Link className="button" to={`/single/${post.id}`}>
              <div className="comment-count">
                <div className="speech-bubble"> </div>
                {this.props.comments[post.id]
                  ? this.props.comments[post.id].length
                  : 0}
              </div>
            </Link>
          </div>
        </figure>
      );
    } else {
      return <Spinner />;
    }
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
};

export default Photo;
