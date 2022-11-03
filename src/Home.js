import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import { useContext, useState } from "react";
import { AppContext } from "./context";

const Home = () => {
  const ctx = useContext(AppContext);
  const chunks = ctx.srchResults;
  const [curPage, setCurPage] = useState(1);
  const selectPageHandler = (newPage) => {
    setCurPage(newPage);
  };
  return (
    <>
      <SearchForm />
      <Movies currentPage={curPage} />
      {/* <Pagination
        curPage={curPage}
        onSelectPage={selectPageHandler}
        chunksLength={chunks.length}
      /> */}
    </>
  );
};

export default Home;
