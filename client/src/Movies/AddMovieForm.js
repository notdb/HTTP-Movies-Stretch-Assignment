import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import axios from "axios";

export default class AddMovieForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: []
    };
  }

  onUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Add New Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your movie name"
            name="title"
            value={this.state.formData.title}
            onChange={this.onUpdate}
          />
          <input
            type="text"
            placeholder="Director"
            name="director"
            value={this.state.formData.director}
            onChange={this.onUpdate}
          />
          <input
            type="text"
            placeholder="Metascore"
            name="metascore"
            value={this.state.formData.metascore}
            onChange={this.onUpdate}
          />

          <button type="submit">Add movie</button>
        </form>
      </div>
    );
  }
}
