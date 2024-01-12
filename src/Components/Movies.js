import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Movies = ({ data, movieHeader }) => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const movieCard = (id) => {
    navigate(`/detailspage/${id}`);
  };
  return (
    <>
      <div className=" w-full">
        <div className=" w-[95%] mx-auto">
          <h2 className="font-semibold text-3xl text-colour py-10">
            {movieHeader}
          </h2>
          <Slider {...settings}>
            {data?.results?.map((item) => {
              return (
                <>
                  <div
                    className="text-white font-semibold hover:scale-110 hover:transition-all duration-700  cursor-pointer "
                    onClick={() => movieCard(item?.id)}
                  >
                    <div className="md:w-[200px] xs:w-[150px]">
                      <img
                        className=" rounded ab md:w-[200px] xs:w-[150px] shadow-md shadow-gray-500 mb-2"
                        src={
                          item.poster_path
                            ? `https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`
                            : "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"
                        }
                        alt="error"
                      />
                    </div>

                    <span className="px-2 text-colour italic ">
                      Rating:{item?.vote_average?.toFixed(1)}
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
