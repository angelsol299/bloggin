import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const category = event.target.elements.category.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
      category: category
    };
    if (description && imageLink && category) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <select name="category" className="select-category">
              <option className="text-select">Life Style</option>
              <option className="text-select">Technology</option>
              <option>Love</option>
              <option>Travel</option>
              <option>Work</option>
            </select>
            <input type="text" placeholder="Desciption" name="description" />
            <input
              type="text"
              placeholder="Add a link of a photo"
              name="link"
            />
            <button> Post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
