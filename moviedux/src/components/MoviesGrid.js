import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import "../styles.css";
import MovieCard from "./MovieCard";
import FiltersComponent from "./FiltersComponent";

export default function MoviesGrid({
  movies,
  watchlist,
  toggleWatchlist,
  search,
}) {
  const [genre, setGenre] = useState("all-genres");
  const [rating, setRating] = useState("all-ratings");

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const matchesGenre = (movie, genre) => {
    if (genre === "all-genres") return true;
    return movie.genre === genre || genre === "all-genres";
  };
  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "all-ratings":
        return true;
      case "very-good":
        return Number(movie.rating) > 8.5;
      case "good":
        return Number(movie.rating) > 7.5 && Number(movie.rating) <= 8.5;
      case "average":
        return Number(movie.rating) > 6.5 && Number(movie.rating) <= 7.5;
      case "bad":
        return Number(movie.rating) <= 6.5;
      default:
        return true;
    }
  };

  const matchesSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };
  const filteredMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearch(movie, search)
    );
  });

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
        {/* <SearchInput handleSearchChange={handleSearchChange} /> */}
        <FiltersComponent
          handleGenreChange={handleGenreChange}
          handleRatingChange={handleRatingChange}
        />
      </Box>
      <Grid
        sx={{ marginBottom: 10 }}
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        display={"flex"}
      >
        {filteredMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard
              movie={movie}
              key={movie.id}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.includes(movie.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
