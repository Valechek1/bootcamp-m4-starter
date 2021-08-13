import React, { Component } from "react";
import "./ListPage.css";
import { gettingListMovies } from "../../api.js";

class ListPage extends Component {
  state = {
    movies: [{ title: "The Godfather", year: 1972, imdbID: "", id: "" }],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    gettingListMovies(id).then((data) => {
      this.setState({
        imdbID: data.movies,
        id: data.id,
      });
      console.log(data);
      console.log(this.state);
    });

    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  }

  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">Мой список</h1>
        <ul>
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <a
                  href="https://www.imdb.com/title/tt0068646/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.title} ({item.year})
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
