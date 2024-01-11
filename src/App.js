import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MoviesFlix from "./pages/MoviesFlix";
import DetailsPage from "./pages/DetailsPage";
import SearchMovie from "./Components/SearchMovie";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import { useEffect } from "react";
import { userLogin } from "./utils/authSlice";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authData);
  useEffect(() => {
    if (window.sessionStorage.getItem("userAuthentication"))
      dispatch(userLogin(""));
  }, [isAuthenticated]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<SignInPage />} />
            </>
          ) : (
            <>
              <Route path="/moviesFlix" element={<MoviesFlix />} />
              <Route path="/detailspage/:id" element={<DetailsPage />} />
              <Route path="/searchMovie" element={<SearchMovie />} />
              <Route path="*" element={<Navigate to={"/moviesFlix"} />} />
              <Route path="/movie" element={<MoviePage />} />
              <Route path="/tv" element={<TvPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
