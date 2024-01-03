import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findId } from "../utils/showTrailerSlice";

const Movies = ({ data, movieHeader }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true,
    centerMode: true,
    autoplay: false,
    speed: 2000,
    loop: Infinity,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipe: true,
    draggable: true,
  };
  const movieCard = (id) => {
    dispatch(findId(id));
    navigate(`/detailspage/${id}`);
  };

  return (
    <>
      <div className="bg-black w-full">
        <div className=" w-[95%] mx-auto">
          <h2 className="font-semibold text-3xl text-white py-10">
            {movieHeader}
          </h2>
          <Slider {...settings}>
            {data?.results?.map((item) => {
              return (
                <>
                  <div
                    className="text-white font-semibold "
                    onClick={() => movieCard(item?.id)}
                  >
                    <img
                      className=" rounded ab w-[150px]"
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt="error"
                    />
                    <span className="px-2 text-red-700">
                      Rating:{item?.vote_average.toFixed(1)}
                    </span>
                    <p className="py-1 px-2">{item?.title}</p>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Movies;
