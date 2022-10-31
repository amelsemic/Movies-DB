import React from "react";
import { AppContext } from "./context";
import { useContext } from "react";
import Movie from "./Movie";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = (props) => {
  const ctx = useContext(AppContext);
  const mvs = ctx.movieChunks;

  return (
    <div className="movies">
      {mvs.length > 0 &&
        mvs[props.currentPage - 1].map((mov) => {
          return (
            <Movie
              ID={mov.id}
              img={mov.image.url}
              title={mov.title}
              year={mov.year}
              stars={mov.principals}
              duration={mov.runningTimeInMinutes}
            />
          );
        })}
    </div>
  );
};

export default Movies;
