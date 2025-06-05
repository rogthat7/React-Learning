import "./App.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    console.log(`Toggling watchlist for movie ID: ${movieId}`);
    
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId] 
    );
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <Box>
        <Navbar handleSearchChange={handleSearchChange} search={search} />
      </Box>
      <Box className="container">
        <Routes>
          <Route
            path="/"
            element={
              <MoviesGrid
                movies={movies}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                search={search} // Pass the search
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                movies={movies}
                toggleWatchlist={toggleWatchlist}
              />
            }
          />
        </Routes>
      </Box>
      <Footer></Footer>
    </div>
  );
}

export default App;
