import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const [error, setError] = useState(false);
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
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
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
  return { error };
};

export default usePopularMovies;
