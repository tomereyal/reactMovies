import React, { useState, useEffect } from "react";
import "./App.css";
import DynamicHeader from "./components/header";
import { data } from "./data";
import MovieList, { IPropsMoviesList } from "../src/components/movies-list";
import MovieCards, { IPropsMoviesDeck } from "./components/movie-cards";
import { IPropsMovieCard } from "./components/movie-card";
import Container from "react-bootstrap/Container";
import FilterInput from "./components/filter-input";
import ColorChanger from "./components/color-changer";
import AddMovieForm from "./components/add-movie-form";

const movies: Array<any> = [
  {
    title: "Mulan",
    text:
      "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China.",
    url:
      "https://financerewind.com/wp-content/uploads/2020/07/28793015-EE67-426D-A578-232D5D734D81.jpeg",
    rating: 3,
  },
  {
    title: "Wonder Woman 1984",
    text:
      "Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dW1Bl4EngVCjHKn1qJHCs7Flxzvj8IHjhT2-Apu8e4GcPEMI",
    rating: 3,
  },
  {
    title: "The New Mutants",
    text:
      "Magik, Wolfsbane and other teenage mutants try to come to grips with their superpowers while staying at a secret facility.",
    url:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/TheNewMutantsPoster.jpeg",
    rating: 4,
  },
  {
    title: "Dune",
    text:
      "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
    url:
      "https://m.media-amazon.com/images/M/MV5BOWE5MGY1MjEtZWExYS00MTM3LTgwNzItMzhiMWJhMWZlOTA0XkEyXkFqcGdeQXVyMTU5MjAyODQ@._V1_SY1000_CR0,0,1606,1000_AL_.jpg",
    rating: 4,
  },
];
console.log(data);

function App() {
  const [currentMovies, setMovies] = useState(data);
  const [currentStarColor, setStarColor] = useState("red");

  function addMovie(movie: any): void {
    // const currentMoviesCopy =  [...currentMovies];
    const updatedMovies = [...currentMovies, movie];
    setMovies(updatedMovies);
  }

  function removeMovie(movieIdArgu: any): void {
    const currentMoviesCopy = [...currentMovies];
    const clickedMovieIndex: number = currentMovies.findIndex((movie) => {
      return movie.imdbID === movieIdArgu;
    });
    currentMoviesCopy.splice(clickedMovieIndex, 1);
    setMovies(currentMoviesCopy);
  }

  function searchByValue(inputValArgu: string): void {
    if (!inputValArgu) return setMovies(data);
    // const currentMoviesCopy = [...currentMovies];
    const filteredMovies = data.filter((movie) => {
      return movie.Title.toLowerCase().includes(inputValArgu);
    });
    setMovies(filteredMovies);
  }

  function changeStarColor(inputValArgu: string): void {
    if (!inputValArgu) return setStarColor("red");
    setStarColor(inputValArgu);
  }
  return (
    <div>
      <Container>
        <DynamicHeader
          text={"Movies"}
          headerClass={"Main-header"}
          containerClass={"Main-header-container"}
        />
        <AddMovieForm componentFunction={addMovie}></AddMovieForm>
        <FilterInput componentFunction={searchByValue}></FilterInput>
        <ColorChanger componentFunction={changeStarColor}></ColorChanger>

        {/* <MovieList movies={movies} /> */}
        <MovieCards movies={moviesAdapter(currentMovies)} />
      </Container>
    </div>
  );
  function moviesAdapter(movies: Array<any>): Array<IPropsMovieCard> {
    return movies.map((movie: any) => {
      const { Title, Year, rank, Poster, imdbID, Type, Likes } = movie;
      return {
        moreInfoBaseUrl: "http://imdb.com/title",
        title: Title,
        year: Year,
        poster: Poster,
        type: Type,
        movieId: imdbID,
        rating: rank,
        likes: Likes,
        starColor: currentStarColor,
        removeMovie,
      };
    });
  }
}

export default App;
