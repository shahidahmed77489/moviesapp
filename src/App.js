import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MoviesFlix from "./pages/MoviesFlix";
import DetailsPage from "./pages/DetailsPage";
import SearchMovie from "./Components/SearchMovie";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/moviesFlix" element={<MoviesFlix />} />
          <Route path="/detailspage/:id" element={<DetailsPage />} />
          <Route path="/searchMovie" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
