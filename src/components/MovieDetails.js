import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.find((video) =>
        ["Trailer", "Official Trailer", "Teaser"].includes(video.type)
      );

      setVideo(filterData || json.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!movies || !video) return <div>Loading...</div>;

  return (
    <>
      <div className="hidden md:block bg-black text-white">
        <div className="relative w-full h-screen">
          {/* Video Background */}
          <iframe
            className="absolute top-0 left-0 w-full h-full z-0"
            src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          {/* Movie Information */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10 flex flex-col justify-center items-start px-10">
            <h1 className="text-6xl font-bold text-white">{movies?.title}</h1>
            <p className="mt-4 text-lg text-white">{movies?.overview}</p>
            <div className="flex mt-4">
              {movies?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="rounded-full bg-teal-500 text-white px-4 py-2 mr-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="mt-4">
              <strong>Status:</strong> {movies?.status} <br />
              <strong>Release Date:</strong> {movies?.release_date}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-black text-white">
        <img
          className="w-[90%] mx-auto mt-8 rounded-xl"
          src={IMG_CDN_URL + movies?.poster_path}
          alt="Movie Poster"
        />
        <div className="mt-4 px-4">
          <h1 className="text-3xl font-bold">{movies?.title}</h1>
          <p className="mt-4">{movies?.overview}</p>
          <div className="flex flex-wrap mt-4">
            {movies?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-teal-500 text-white px-4 py-2 mr-2 mb-2"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="mt-4">
            <strong>Status:</strong> {movies?.status} <br />
            <strong>Release Date:</strong> {movies?.release_date}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
