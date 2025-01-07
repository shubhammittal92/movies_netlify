import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const { error: usePopularError } = usePopularMovies();
  const { error: useUpComingError } = useUpComingMovies();
  const { error: useTopRatedError } = useTopRatedMovies();
  const { error: useNowPlayingError } = useNowPlayingMovies();

  return (
    <div className="bg-black text-white p-4 mb-6">
      {(usePopularError || useUpComingError || useTopRatedError || useNowPlayingError) && (
        <div className="text-red-500 p-4 mb-4">
          Unable to fetch movies due to DNS restrictions. To fix this:
          <ol className="list-decimal ml-6">
            <li>Open your network settings.</li>
            <li>
              Scroll down to <strong>Internet Protocol Version 4 (TCP/IPv4)</strong> and
              double-click it.
            </li>
            <li>Select <strong>Use the following DNS server addresses</strong>.</li>
            <li>
              Enter <strong>8.8.8.8</strong> for the Preferred DNS server and{" "}
              <strong>9.9.9.9</strong> for the Alternate DNS server.
            </li>
          </ol>
        </div>
      )}
      {movies.nowPlayingMovies && (
        <div className="relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
