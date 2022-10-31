import React from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

const Movie = (props) => {
  /*  const ctx = useContext(AppContext);
  const mvs = ctx.movieChunks; */

  let movieStars = "";
  props.stars.map((star) => {
    movieStars += star.name + ", ";
  });

  movieStars = movieStars.slice(0, -2);
  return (
    <div className={classes.movie}>
      <div className={classes.movieInfoAdditional}>
        <h4>
          Stars:
          {props.stars.map((star) => {
            return (
              <Link to={`/actors${star.id}`} className={classes.link}>
                {star.name}
              </Link>
            );
          })}
        </h4>
        <h4>Duration: {props.duration}min </h4>
      </div>
      <Link to={`/movies${props.ID}`} className={classes.titleLink}>
        <img src={props.img} width="300px" />
        <h3>{props.title} </h3>
        <h4>Year: {props.year} </h4>
      </Link>
    </div>
  );
};

export default Movie;
