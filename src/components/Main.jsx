import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Main() {
  const uri =
    "https://api.themoviedb.org/3/discover/movie?api_key=d51fd3aba5af7a721358cba414697969&language=es-ES%page=1";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(uri).then((res) => {
      const data = res.data;
      setMovies(data.results.filter((movies) => movies.overview));
    });
  }, [setMovies]);
  console.log(movies);

  const truncTitle = (title) => {
    if (title.length > 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie, i) => {
            return (
              <div className="col-xl-3" key={i}>
                <div
                  className="card my-4 shadow-sm p-3 mb-5 bg-white  "
                  style={{ height: "600px" }}
                >
                  <img
                    className="card-img-top"
                    style={{ height: "410px" }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h6 className="card-title d-inline-block text-truncate font-weight-bold">
                      {truncTitle(movie.title)}
                    </h6>
                    <p className="card-text">
                      {movie.overview.substring(0, 30)}...
                    </p>
                    <div className="d-flex justify-content-end">
                      <Link
                        to={`/details?movID=${movie.id}`}
                        type="button"
                        className="btn btn-outline-primary"
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
