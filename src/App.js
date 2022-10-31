import React from "react";
import { Switch, Route } from "react-router-dom";
import ActorInfo from "./ActorInfo";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/title/:id">
        <SingleMovie />
      </Route>
      <Route path="/actors/name/:id">
        <ActorInfo />
      </Route>
      {/* mozda dodati error page */}
    </Switch>
  );
}

export default App;
