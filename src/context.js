import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=e71a3551`;
//key might not work on every pc
const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  /* const [error, setError] = useState({show:false}); */
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("movie");
  const [movieChunks, setMoviehunks] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const makeChunks = (movies) => {
    if (movies.length > 0) {
      const chunkSize = 7;
      const auxMovieChunks = [];
      for (let i = 0; i < movies.length; i += chunkSize) {
        const chunk = movies.slice(i, i + chunkSize);
        auxMovieChunks.push(chunk);
      }
      setMoviehunks(auxMovieChunks);
    }
  };

  const fetchMovies = async () => {
    setIsLoading(true);

    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff422cc142mshf590ef307b32fd2p13c2e0jsn352f02c31e1d",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      let response = await fetch(
        "https://imdb8.p.rapidapi.com/title/find?q=" + `${searchInput}`,
        options
      );
      let data = await response.json();
      console.log(data);

      /*   let response = await fetch(`${API_ENDPOINT}` + "&s=" + `${searchInput}`);
      let data = await response.json(); */

      setMovies(data.results);
      makeChunks(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchInput]);
  console.log(movies);

  const ctxValue = {
    movies,
    movieChunks,
    searchInput,
    setSearchInput,
  };
  console.log(movieChunks);
  return (
    <AppContext.Provider value={ctxValue}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
