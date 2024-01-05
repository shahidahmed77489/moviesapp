import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMoviesData } from "../utils/popularSlice";
import Movies from "../Components/Movies";
import { fetchData } from "../utils/trendingSlice";
import { fetchTopRatedMovies } from "../utils/topratedSlice";
import Footer from "../Components/Footer";
import { fetchSearchMovies } from "../utils/searchMovieSlice";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const MoviesFlix = () => {
  const inputSearch = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { popularmoviedata } = useSelector((state) => state.popularData);
  const { trendingmoviedata } = useSelector((state) => state.trendingData);
  const { toprateddata } = useSelector((state) => state.topRatedData);

  const movieSearchBtn = () => {
    dispatch(fetchSearchMovies(inputSearch.current.value));
    inputSearch.current.value = "";
    navigate("/searchMovie");
  };

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchPopularMoviesData());
    dispatch(fetchTopRatedMovies());
  }, []);

  return (
    <>
      <Header />
      <div className="top-0  text-white relative">
        <div className="bg-black opacity-70 w-full h-full absolute top-0 z-10"></div>
        <iframe
          className="lg:w-full lg:h-full sm:h-[70vh] sm:w-full xs:w-full xs:h-[70vh] aspect-video relative"
          src="https://www.youtube.com/embed/onrO_8Ruah8?si=FC9iV_cDO2sZhsYJ&autoplay=1&mute=1&reapeat=1"
        ></iframe>
        <div className="absolute top-[30%] xs:top-[30%] text-center z-20 w-full mx-auto]">
          <h1 className="text-2xl font-semibold text-colour sm:text-5xl md:text-6xl">
            Welcome.
          </h1>
          <h2 className="md:text-2xl text-colour ">
            Millions Of Movies , TV shows and people to discover. Explore now.
          </h2>
          <div className="relative my-4  w-[60%] mx-auto">
            <input
              type="text"
              placeholder="Search for a movie, tv show....."
              className="py-2 xs:py-1 px-4 rounded outline-none text-colour w-full lg:py-2"
              ref={inputSearch}
            />
            <button
              className="absolute top-0 -right-1   bg-colour xs:py-1  lg:py-2 px-2 py-2"
              onClick={movieSearchBtn}
            >
              search
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-40 relative z-10 ">
        <Movies data={trendingmoviedata} />
        <Movies data={popularmoviedata} movieHeader={"Popular Movies"} />
        <Movies data={toprateddata} movieHeader={"Top Rated Movies"} />
      </div>
      <Footer />
    </>
  );
};

export default MoviesFlix;
