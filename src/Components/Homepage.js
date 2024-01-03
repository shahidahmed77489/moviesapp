import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/popularSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.popularData);
  // const { data } = useSelector((state) => state.popularData);
  // console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className="bg-black absolute top-0 left-0 h-screen  opacity-60 w-full">
        <h2>Shahid Ahmed </h2>
      </div>
    </>
  );
};

export default Homepage;
