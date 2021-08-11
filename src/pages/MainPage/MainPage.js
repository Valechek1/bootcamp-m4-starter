import React, { Component } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";
import { searchMoviesTitle } from "../../api.js";
import { searchMoviesFilmId } from "../../api.js";
import { additionApi } from "../../api.js";

class MainPage extends Component {
  state = {
    movies: [],
    nameFilm: "",
    favorites: [],
  };

  searchLineChangeHandler = (e) => {
    this.setState({ nameFilm: e.target.value });
  };

  addFilmList = (movie) => {
    const newFavorites = [...this.state.favorites, movie];
    console.log(newFavorites);
    this.setState({
      favorites: newFavorites,
    });
  };

  removingFavorite = (index) => {
    const newFavorites = this.state.favorites.filter((elment, ind) => {
      return ind !== index;
    });
    this.setState({
      favorites: newFavorites,
    });
  };

  searchFilm = () => {
    searchMoviesTitle(this.state.nameFilm).then((data) => {
      console.log(data);
      this.setState({
        movies: data,
      });
    });
  };

  preservationFilms = () => {
    additionApi(this.state.title, )
  };

  render() {
    return (
      <div className="main-page">
        <Header />
        <main className="main-page__content">
          <section className="main-page__main-section">
            <div className="main-page__search-box">
              <SearchBox
                searchLineChangeHandler={this.searchLineChangeHandler}
                searchFilm={this.searchFilm}
                nameFilm={this.state.nameFilm}
              />
            </div>
            <div className="main-page__movies">
              <Movies
                movies={this.state.movies}
                adFilmList={this.addFilmList}
              />
            </div>
          </section>
          <aside className="main-page__favorites">
            <Favorites
              favorites={this.state.favorites}
              remove={this.removingFavorite}
            />
          </aside>
        </main>
      </div>
    );
  }
}

export default MainPage;
