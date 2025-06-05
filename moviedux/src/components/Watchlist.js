import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
export default function Watchlist({movies, watchlist, toggleWatchlist}) {
  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      {!movies || watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie) => {
            if (watchlist.includes(movie.id)) {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isWatchlisted={true}
                  toggleWatchlist={toggleWatchlist}
                />
              );
            }
            return null;
          })}
        </Grid>
      )}
    </div>
  );
}
