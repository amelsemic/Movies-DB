import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "./context";

const SingleMovie = () => {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /* catching the actors info */
  const movieID = useParams().id;
  const ctx = useContext(AppContext);
  const mvs = ctx.movies;
  const thisMovie = mvs.find((mov) => {
    const id = mov.id.slice(7, 16);
    /*     console.log(id); */
    return id == movieID;
  });
  /* catching the actors info */

  const fetchMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e71a3551 &i=${movieID}`
      );
      const data = await response.json();
      console.log(data);
      setMovieData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [movieID]);

  const fetchActors = useCallback;

  return (
    <>
      {!isLoading && (
        <div>
          <img src={movieData.Poster} />
          <h3>{movieData.Title} </h3>
          <h4>Year: {movieData.Year} </h4>
          <h4>
            Stars: ubacitii
            {/*    {thisMovie.principals[0]} */}
          </h4>
          <p>{movieData.Plot} </p>
        </div>
      )}

      <Link to="/">
        <button>Home page</button>
      </Link>
    </>
  );
};

export default SingleMovie;
