import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "./context";

const SingleMovie = () => {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /* catching the actors info */
  const movieID = useParams().id;
  const ctx = useContext(AppContext);
  const mvs = ctx.moviesNtvShows;
  const thisMovie = mvs.find((mov) => {
    /* const id = mov.id.slice(7, 16);
        console.log(id); */
    return mov.id.slice(7, 16) == movieID;
  });
  console.log(thisMovie ? thisMovie.principals : "waiting");
  /* catching the actors info */

  const fetchMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=e71a3551 &i=${movieID}`
      );
      const data = await response.json();
      /*       console.log(data); */
      setMovieData(data);
      console.log(data)
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
            {"Stars: "}
            {thisMovie
              ? thisMovie.principals.map((actor, i) => {
                  if (thisMovie.principals.length - 1 == i) return <Link to={`/actors${actor.id}`} >{actor.name} </Link> ;
                  else return <Link to={`/actors${actor.id}`} >{actor.name + ", "} </Link> 
                })
              : "loading"}
          </h4>
          <h4>Awards:{movieData.Awards} </h4>
          <h4>Country:{movieData.Country} </h4>
          <h4>Genre:{movieData.Genre} </h4>
          <h4>Released:{movieData.Released} </h4>
          <h4>Written by:{movieData.Writer} </h4>
          <h4>IMDB rating:{movieData.imdbRating} {`(${movieData.imdbVotes}votes)`} </h4>
         <h4>Rotten Tomatoes:{movieData.Ratings[1]?.Value} </h4> 
         <h5>Earnings according to BoxOffice: {movieData.BoxOffice} </h5>
         <h3>Plot:</h3>
          
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
