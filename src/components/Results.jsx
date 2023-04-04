import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Results() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("key-word");

  const [moviesRes, setMoviesRes] = useState([]);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=d51fd3aba5af7a721358cba414697969&language=en-US&page=1&include_adult=false&query=${keyword}`;

    axios
      .get(endpoint)
      .then((response) => {
        const moviesArray = response.data.results;
        setMoviesRes(moviesArray);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Link to="/" type="button" className="btn btn-primary w-25">
        Go Back
      </Link>
      <h2 className="p-3 m-3">
        <em>Buscaste:</em> {keyword}
      </h2>
      {moviesRes.length === 0 && (
        <h3 className="text-white p-3 m-3">No hay resultados coincidentes.</h3>
      )}
      <div className="row text-white">
        {moviesRes.map((movie, i) => {
          return (
            <div className="col-xl-3" key={i}>
              <div className="card my-4">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <div className="card-body text-dark">
                  <h5 className="card-title fs-4">{movie.title}</h5>

                  <Link
                    to={`/details?movID=${movie.id}`}
                    className="btn btn-primary bg-dark border border-dark"
                  >
                    More About
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
