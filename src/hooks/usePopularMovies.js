<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
<<<<<<< HEAD
  const [error, setError] = useState(false);
=======
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
<<<<<<< HEAD
    try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      // https://api.themoviedb.org/3/movie/now_playing
      API_OPTIONS
    );
    if (!data.ok) throw new Error("Failed to fetch");
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  } catch {
    setError(true);
  }
=======
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
<<<<<<< HEAD
  return { error };
};

export default usePopularMovies;
=======
};

export default usePopularMovies;
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
