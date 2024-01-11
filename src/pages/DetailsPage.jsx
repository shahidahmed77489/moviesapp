import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import TopCaste from "../Components/TopCaste";
import { fetchSimiliarMovies } from "../utils/similiarSlice";
import { fetchRecommendMovies } from "../utils/recommendSlice";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../Components/Movies";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const [isDetails, setDetails] = useState([]);
  const [isVideos, setVideos] = useState([]);
  const [isModal, setModal] = useState(false);
  const { id } = useParams();
  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
      );
      setDetails(response.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovieDetails();
    dispatch(fetchSimiliarMovies(id));
    dispatch(fetchRecommendMovies());
  }, [id]);
  const { similiarMoviesData } = useSelector((state) => state.similiarData);
  const { recommendMoviesData } = useSelector((state) => state.recommendData);
  console.log(similiarMoviesData);
  const backgroundImageStyle = {
    backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${isDetails?.backdrop_path}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "500px",
  };
  const showModal = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=8a2de2b52f9dca99b4245cfbe450ccd3`
    );
    setVideos(res?.data);
    setModal(!isModal);
    console.log(id);
  };
  const closeModal = () => {
    setModal(!isModal);
  };
  return (
    <>
      {isModal && (
        <>
          <div className="w-[600px] h-[400px] border-cyan-200 border absolute  z-50 xs:right-[0%] mdl:right-[25%] top-[10%]">
            <iframe
              title="Unique Title"
              width="598"
              height="397"
              src={
                isVideos?.results[9]?.key
                  ? `https://www.youtube.com/embed/${isVideos?.results[9]?.key}?autoplay=1`
                  : `https://www.youtube.com/embed/d9MyW72ELq0?si=QqSgkJs7xWnaankn?autoplay=1`
              }
              frameborder="0"
              allowfullscreen
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute right-2 -top-1 text-white text-3xl "
            >
              &times;
            </button>
          </div>
        </>
      )}
      <div style={backgroundImageStyle} className="relative">
        <div className="absolute w-full bg-black top-0 h-full opacity-70"></div>
        <div className="relative z-10 xs:flex-wrap md:flex-nowrap flex md:gap-8 xs:gap-0 px-20 items-center">
          <div className="py-6 xs:py-2">
            <img
              className="rounded xs:max-w-[150px] md:max-w-[300px]"
              src={`https://image.tmdb.org/t/p/original/${isDetails?.poster_path}`}
              alt=""
            />
          </div>
          <div className="text-white pb-20 mdl:w-[50%] xs:w-full xs:p-0">
            <h2 className="lg:text-4xl font-semibold my-3">
              {isDetails?.title}
            </h2>
            <p>
              {isDetails?.release_date} • <span>{isDetails?.runtime}min</span>
            </p>
            <div className="flex items-center gap-2 my-3">
              <p>Rating :</p>
              <p className="w-10 h-10  rounded-full border-colour border-2 flex justify-center items-center">
                {isDetails?.vote_average?.toFixed(1)}
              </p>
            </div>

            <button
              className="flex items-center gap-3 border-2 border-colour px-2 py-1 rounded hover:colour  xs:my-1 mdl:my-3"
              onClick={showModal}
            >
              <span>Play Trailer</span>
              <CiPlay1 />
            </button>
            <p className="text-xl italic text-gray-400 xs:text-[12px] mdl:text-xl ">
              {isDetails?.tagline}
            </p>
            <p className="font-bold text-2xl xs:hidden md:block">Overview</p>
            <p className="xs:hidden mdl:block">{isDetails?.overview}</p>
          </div>
        </div>
      </div>
      <div>
        <TopCaste id={id} />
        <Movies data={similiarMoviesData} movieHeader={"Similiar Movies"} />
        <Movies
          data={recommendMoviesData}
          movieHeader={"Recommendation Movies"}
        />
      </div>
    </>
  );
};

export default DetailsPage;
