import { act } from "@testing-library/react";
import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=e71a3551`;
//key might not work on every pc
const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  /* const [error, setError] = useState({show:false}); */
  const [srchResults, setSrchResults] = useState([]);
  const [movies, setMovies] = useState([])
  const [TVshows, setTVshows] = useState([])
  const [moviesNtvShows, setMoviesNtvShows] = useState([])
  const [actors, setActors] = useState([])
  const [searchInput, setSearchInput] = useState("movie");
  const [movieChunks, setMoviehunks] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const makeChunks = (movies) => {
    /*  let onlyMovies;
    if (movies.length > 0){
      movies.map((mov)=>{
        if(mov.titleType) onlyMovies.push(mov)
      })
    } */
    /* NASTAVITI ------- RAZDVAJANJE FILMOVA, SERIJA I GLUMACA */

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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '503da7ce58msh0b6306e1477e439p12147fjsncdebe2e8433c',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      let response = await fetch(
        "https://imdb8.p.rapidapi.com/title/find?q=" + `${searchInput}`,
        options
      );
      let data = await response.json();
      console.log(data)
      setSrchResults(data.results);
      separateDifferentRslts(data.results)
      console.log(data);

      /*    chunkove treba pravit kasnije, ne ovdje ispod*/
      makeChunks(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const separateDifferentRslts = (results) => {
/*     let auxMovies =[];
    let auxTVshows =[];
 */
    let auxMoviesNtvShows = []

    let auxActors =[];


    results.map((res) => {
      if (res.titleType) {
        auxMoviesNtvShows.push(res)
      } else auxActors.push(res)

    });
    if(auxMoviesNtvShows.length > 10) setMoviesNtvShows(auxMoviesNtvShows.slice(0, 9))
    else setMoviesNtvShows(auxMoviesNtvShows);

    if(auxActors.length>10) setActors(auxActors.slice(0,9))
    else setActors(auxActors)
    console.log("----------SEPARATED-------------")
  };
  console.log("Movies and TVshows: ", moviesNtvShows)
  
  console.log("Actors: ", actors)

  useEffect(() => {
    fetchData();
  }, [searchInput]);
  /*   console.log(movies); */

  const ctxValue = {
    moviesNtvShows,
    actors,
    searchInput,
    setSearchInput,
  };
  /*   console.log(movieChunks); */
  return (
    <AppContext.Provider value={ctxValue}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
