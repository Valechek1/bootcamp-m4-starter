import React, { Component } from "react";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    title: "",
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  render() {
    const { favorites } = this.props;
    return (
      <div className="favorites">
        <input
          value={this.state.title}
          placeholder="Введите название списка"
          className="favorites__name"
          onChange={this.onTitleChange}
        />
        <ul className="favorites__list">
          {favorites.map((item, idx) => {
            return (
              <li key={item.imdbID} className="favorites__list-item">
                {item.Title} ({item.Year})
                <button
                  className="favorites__save"
                  type="submit"
                  onClick={() => this.props.remove(idx)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          onClick={this.preservationFilms}
          type="button"
          className="search-box__form-submit"
          disabled={!this.state.title}
        >
          Сохранить список
        </button>
      </div>
    );
  }
}

export default Favorites;
