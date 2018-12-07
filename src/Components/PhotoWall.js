import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "./Spinner/Spinner";

//anchor tag, href attribute

class PhotoWall extends Component {
  render() {
    const photo = this.props.posts;
    //nuevo
    if (<div className="photoGrid" />) {
      return (
        <div>
          <Link className="addIcon" to="/AddPhoto">
            {" "}
          </Link>
          <br />
          <div className="button-class">
            <button
              className="sort-button"
              onClick={() =>
                this.props.posts.sort(function(a, b) {
                  if (a < b) return -1;
                  else if (a > b) return 1;
                  return 0;
                })
              }
            >
              Latest
            </button>
            {"    "}
            <button
              className="sort-button"
              onClick={() =>
                this.props.posts.sort(function(a, b) {
                  return a < b ? -1 : 1;
                })
              }
            >
              By Subject
            </button>
          </div>
          <br />
          <br />
          <div className="photoGrid">
            {this.props.posts.map(post => (
              <Photo post={post} {...this.props} />
            ))}
          </div>
        </div>
      );
    } else {
      return <p>loading...</p>;
    }
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;

/*
by date

.sort(function(a, b) {
              if (a < b) return -1;
              else if (a > b) return 1;
              return 0;
            })


selects
  <select
          className="align-items-center"
          name="category"
          onChange={this.onChange}
        >
          <option>By category</option>
          <option>Life Style</option>
          <option>Technology</option>
          <option>Love</option>
          <option>Travel</option>
          <option>Work</option>
        </select>

            */
