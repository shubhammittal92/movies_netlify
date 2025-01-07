import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.UpComingMovies);

  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      if (!data.ok) throw new Error("Failed to fetch");
      const json = await data.json();
      dispatch(addUpComingMovies(json.results));
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);

  return { error };

};

export default useUpComingMovies;