<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
<<<<<<< HEAD
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      if (!data.ok) throw new Error("Failed to fetch");
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch {
      setError(true);
    }
=======
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
<<<<<<< HEAD

  return { error };
};

export default useNowPlayingMovies;
=======
};

export default useNowPlayingMovies;
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
