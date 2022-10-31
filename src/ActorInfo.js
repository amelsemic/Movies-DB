import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./ActorInfo.module.css";

const ActorInfo = () => {
  const [actorData, setActorData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const actorID = useParams().id;

  const fetchInfo = useCallback(async () => {
    try {
      setIsLoading(true);

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ff422cc142mshf590ef307b32fd2p13c2e0jsn352f02c31e1d",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      const response = await fetch(
        `https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actorID}`,
        options
      );
      const data = await response.json();
      console.log(data);
      setActorData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [actorID]);

  return (
    <>
      {!isLoading && (
        <div className={classes.actorInfo}>
          <img src={actorData.image.url} />
          <h3>{actorData.name} </h3>
          <h4>
            Born: {actorData.birthDate}, {actorData.birthPlace}{" "}
          </h4>
          <p>{actorData.miniBios[0].text} </p>
        </div>
      )}

      <Link to="/">
        <button>Home page</button>
      </Link>
    </>
  );
};

export default ActorInfo;
