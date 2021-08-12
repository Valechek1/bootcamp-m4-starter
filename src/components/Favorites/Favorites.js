import React, { Component } from "react";
import "./Favorites.css";
import { createList } from "../../api";

class Favorites extends Component {
  state = {
    title: "",
    id: "",
    linkActive: false,
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  preservationFilms = () => {
    createList(this.state.title, this.props.favorites).then((data) => {
      console.log(data);
      this.setState({
        id: data.id,
        linkActive: true,
      });
    });
  };

  render() {
    console.log(this.state);
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
          className={`favorites__save ${
            this.state.linkActive ? "link__none" : null
          }`}
          disabled={!this.state.title}
        >
          Сохранить список
        </button>
        <a
          href="/list/{this.state.id}"
          className={`link__none ${
            this.state.linkActive ? "link__block" : null
          }`}
        >
          Перейти к списку
        </a>
      </div>
    );
  }
}

export default Favorites;
