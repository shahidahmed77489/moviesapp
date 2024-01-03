import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MoviesFlix from "./pages/MoviesFlix";
import DetailsPage from "./pages/DetailsPage";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/moviesFlix" element={<MoviesFlix />} />
          <Route path="/detailspage/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
