import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

const Watched = () => {
    const { watched } = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Peliculas vistas</h1>

                    <span className="count-pill">
                        {watched.length} {watched.length === 1 ? "Pelicula" : "Peliculas"}
                    </span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No hay peliculas en tu lista! Añade alguna!</h2>
                )}
            </div>
        </div>
    );
}

export default Watched;
