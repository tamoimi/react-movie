import React, { useEffect, useState } from "react";
import "./App.css";
import Test from "./Test";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <p>{movie.summary}</p>
            </div>
          ))}
        </div>
      )}
      <Test />
    </>
  );
}

export default App;
