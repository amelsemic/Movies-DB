import React from "react";
import { AppContext } from "./context";
import { useContext } from "react";
import Movie from "./Movie";
import Person from "./Person";
import classes from "./Movies.module.css";
import TVShow from "./TVShow";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = (props) => {
  const { moviesNtvShows:moviesAndTVshows, actors } = useContext(AppContext);
/* movies and tv shows -- jedna varijabla */
  console.log(moviesAndTVshows);

  return (
      <div className={classes.gridContainer}>
        <div >
          <h2>Movies and TV shows</h2>
        <div className={classes.movies}>
          {moviesAndTVshows.length > 0 &&
            moviesAndTVshows.map((mov) => {
              if(mov.image && mov.titleType=="movie") {
                return (
                  <Movie
                    key={mov.id}
                    ID={mov.id}
                    img={mov.image.url}
                    title={mov.title}
                    year={mov.year}
                    stars={mov.principals}
                    duration={mov.runningTimeInMinutes}
                  />
                );
              }
              if(mov.image && mov.titleType=="tvSeries") {
                return (
                  <TVShow
                    key={mov.id}
                    ID={mov.id}
                    img={mov.image.url}
                    title={mov.title}
                    startYear={mov.seriesStartYear}
                    endYear={mov.seriesEndYear}
                    stars={mov.principals}
                    duration={mov.runningTimeInMinutes}
                  />
                );
              }
            })} 
        </div>
        </div>
        
        <div className={classes.line} ></div>

        <div className={classes.people}>
          <h3>People:</h3>
          {actors.length>0 && actors.map((per)=>{

            if(per.image) return(<Person id={per.id} img={per.image.url} name={per.name} knownFor={per.knownFor} /> )

          }) }
        </div>
      </div>

     
  );
};

export default Movies;

 {/* <div className="movies">
      <h2>Movies</h2>
      {movies.length > 0 &&
        movies.map((mov) => {
          return (
            <Movie
              key={mov.id}
              ID={mov.id}
              img={mov.image.url}
              title={mov.title}
              year={mov.year}
              stars={mov.principals}
              duration={mov.runningTimeInMinutes}
            />
          );
        })}
        <h2>TV shows</h2>
        {TVshows.length > 0 &&
        TVshows.map((shw) => {
          return (
            <Movie
              key={shw.id}
              ID={shw.id}
              img={shw.image.url}
              title={shw.title}
              year={shw.year}
              stars={shw.principals}
              duration={"lotta episodes"}
            />
          );
        })}
    </div> */}
