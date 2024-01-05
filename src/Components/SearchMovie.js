import React from "react";
import { useSelector } from "react-redux";
import Movies from "./Movies";
import { Link } from "react-router-dom";
const SearchMovie = () => {
  const { searchMovieData } = useSelector((state) => state.searchData);
  console.log(searchMovieData);

  return (
    <div>
      <Link to={"/moviesFlix"}>
        <button className="text-colour">◀Back To Home </button>
      </Link>
      {searchMovieData?.results?.length ? (
        <Movies movieHeader={"Searched"} data={searchMovieData} />
      ) : (
        <>
          <h2 className="text-white text-colour text-5xl flex justify-center  items-center h-[100vh]">
            Movie Not Found : 🙃🙃🙃🙃🙃
          </h2>
        </>
      )}
    </div>
  );
};

export default SearchMovie;
