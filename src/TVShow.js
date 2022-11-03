import React from "react";
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

const TVShow = (props) => {

  let stars;
  if(props.stars)
  {
    if(props.stars.length !==0){
      stars=props.stars.map((star) => {
        return (
          <Link to={`/actors${star.id}`} className={classes.link}>
            {star.name}
          </Link>
        );
      });
    } else stars ="loading"
  }


  return (
    <div className={classes.movie}>
      <div className={classes.movieInfoAdditional}>
        <h4>
          Stars: {stars}
        </h4>
        <h4> avg episode duration: {props.duration} </h4>
      </div>
      <Link to={`/movies${props.ID}`} className={classes.titleLink}>
        <img src={props.img} width="300px" />
        <h3>{props.title} </h3>
        <h4>TV Show  {props.startYear}-{props.endYear} </h4>
      </Link>
    </div>
  );
};

export default TVShow;
