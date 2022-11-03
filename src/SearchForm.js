import React from "react";
import { AppContext } from "./context";
import { useContext } from "react";

const SearchForm = () => {
  const ctx = useContext(AppContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    /* console.log(event.target.elements.search.value);
    console.log(ctx.movies); */
    ctx.setSearchInput(event.target.elements.search.value);
  };

  return (
    <form className="search-form" onSubmit={formSubmitHandler}>
      <label htmlFor="search">Search movies/TV shows/people:</label>
      <input className="form-input" id="search" type="text" />
    </form>
  );
};

export default SearchForm;
