import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "../MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSearchMovies(data.results);
  };
  useEffect(() => {
    const searchWithQuery = `${searchURL}?${apiKey}&query=${query}`;

    getSearchMovies(searchWithQuery);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {searchMovies.length === 0 && <p>Carregando...</p>}
        {searchMovies.length > 0 &&
          searchMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
