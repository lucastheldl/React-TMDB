import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Movie from "./pages/movie/Movie";
import Search from "./pages/search/Search";
import Home from "./pages/home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/React-TMDB//" element={<Home />} />
          <Route path="/React-TMDB/movie/:id" element={<Movie />} />
          <Route path="/React-TMDB/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
