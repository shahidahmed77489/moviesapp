import axios from "axios";
import React, { useEffect, useState } from "react";

const TopCaste = ({ id }) => {
  const [isTopCaste, setTopCaste] = useState([]);
  const getTopCaste = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=31275e8f53732b09ba77ddf6326ba93d`
    );
    setTopCaste(response.data);
  };
  useEffect(() => {
    getTopCaste();
  }, []);

  return (
    <div className="text-white my-10">
      <h2 className="m-5 text-4xl text-colour">Top Cast</h2>
      <div className="flex justify-evenly flex-wrap">
        {isTopCaste?.cast?.slice(0, 6)?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div>
                <img
                  className="w-[200px] rounded"
                  src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                  alt=""
                />
                <p className="text-xl font-semibold">{item?.name}</p>
                <p className="text-colour italic">{item?.character}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TopCaste;
