<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
<<<<<<< HEAD
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
=======
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
<<<<<<< HEAD
      );
      if (!data.ok) throw new Error("Failed to fetch");
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, [movieId]);

  return { error };
};

export default useMovieTrailer;
=======
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
>>>>>>> a296deaec28a3f2ea500cfb9eadafc4420faf1b9
