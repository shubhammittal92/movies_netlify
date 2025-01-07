import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      if (!data.ok) throw new Error("Failed to fetch");
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  return { error };
};

export default useTopRatedMovies;