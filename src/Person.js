import classes from "./Person.module.css";
import React from "react";
import { Link } from "react-router-dom";
const Person = (props) => {

    let knownFor = "";
     props.knownFor.map((mov)=>{
        knownFor+= `${mov.title}, `
    });
    

  return (
    <Link to={`/actors${props.id}`} className={classes.titleLink}>
      <div className={classes.person}>
        <img src={props.img}  />
        <div className={classes.personInfo} >
          <h3>{props.name} </h3>
          <p>Known for: {knownFor.slice(0, -2)} </p>
        </div>
      </div>
    </Link>
  );
};

export default Person;
