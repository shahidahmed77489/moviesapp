import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import TopCaste from "../Components/TopCaste";

const DetailsPage = () => {
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
    fetchMovieDetails();
  }, []);
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
          <div className="w-[600px] h-[400px] border-cyan-200 border absolute  z-50 right-[25%] top-[10%]">
            <iframe
              width="598"
              height="398"
              src={`https://www.youtube.com/embed/${isVideos?.results[9]?.key}?autoplay=1`}
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
        <div className="relative z-10 flex gap-8 px-20 items-center">
          <div className="py-6 ">
            <img
              className="rounded max-w-[300px]"
              src={`https://image.tmdb.org/t/p/original/${isDetails?.poster_path}`}
              alt=""
            />
          </div>
          <div className="text-white pb-20">
            <h2 className="text-4xl font-semibold my-3">{isDetails?.title}</h2>
            <p>
              {isDetails?.release_date} • <span>{isDetails?.runtime}min</span>
            </p>
            <div className="flex items-center gap-5 my-3">
              <p>Rating :</p>
              <p className="w-10 h-10 rounded-full border-red-500 border-2 flex justify-center items-center">
                {isDetails?.vote_average?.toFixed(1)}
              </p>
            </div>

            <button className="flex items-center gap-3" onClick={showModal}>
              <span>Play Trailer</span>
              <CiPlay1 />
            </button>
            <p className="text-xl italic text-gray-400">{isDetails?.tagline}</p>
            <p className="font-bold text-2xl">Overview</p>
            <p>{isDetails?.overview}</p>
          </div>
        </div>
      </div>
      <div>
        <TopCaste id={id} />
      </div>
    </>
  );
};

export default DetailsPage;
