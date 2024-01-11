import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieData } from "../utils/movieSlice";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const [isValue, setValue] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesContent = useSelector((state) => state.movieData.getMovieData);

  useEffect(() => {
    dispatch(fetchMovieData(isValue));
  }, [isValue]);
  const movieCard = (id) => {
    navigate(`/detailspage/${id}`);
  };
  const decrementBtn = () => {
    if (isValue < 2) {
      setValue(1);
    } else {
      setValue((prev) => prev - 1);
    }
  };
  const incrementBtn = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <>
      <h2 className="my-10 text-colour text-3xl pl-10 ">Movies:</h2>
      <div className=" flex-wrap text-white gap-3  w-[94%] mx-auto flex  ">
        {moviesContent?.results?.map((item) => {
          return (
            <>
              <div
                className="md:w-[200px] xs:w-[150px]"
                onClick={() => movieCard(item?.id)}
              >
                <img
                  className=" rounded  md:w-[200px] xs:w-[150px] shadow-md shadow-gray-500 mb-2"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                  alt="error"
                />
                <span className="px-2 text-colour italic ">
                  Rating:{item?.vote_average?.toFixed(1)}
                </span>
                <p className="py-1 px-2">{item?.title}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="text-center ">
        <button
          className="bg-colour text-white font-semibold px-4 py-2 rounded xs:text-[10px] md:text-[16px] mx-3"
          onClick={decrementBtn}
        >
          Prev
        </button>
        <button
          className="bg-colour text-white font-semibold px-4 py-2 rounded xs:text-[10px] md:text-[16px]"
          onClick={incrementBtn}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MoviePage;
