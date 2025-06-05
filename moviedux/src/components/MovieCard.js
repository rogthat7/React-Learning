import "../styles.css";
import getRatingClass from "./utils/GetRatingClass";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useLocation } from "react-router";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.png";
  };
    const location = useLocation();
  return (
    <Card
      className="movie-card"
      style={{ width: "220px", borderRadius: "10px" }}
    >
      <CardMedia
        component="img"
        alt={movie.title}
        image={`images/${movie.image}`}
        title={movie.title}
        onError={handleError}
      />
      <CardContent
        sx={{
          textAlign: "center",
          padding: 0,
          color: "white",
          backgroundColor: "#1f1f1fe6",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Typography variant="h6" component="div">
          {movie.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span color="textSecondary">{movie.genre}</span>
          <span
            className={`movie-rating ${getRatingClass(Number(movie.rating))}`}
          >
            {movie.rating}
          </span>
        </Box>
        <button
        style={{ width: "100%", marginTop: "10px" , alignSelf:"center" ,textAlign: "center", padding: "10px", borderRadius: "5px", backgroundColor: isWatchlisted && location.pathname === '/watchlist' ? "#ff4081" : "#3f51b5", color: "white", border: "none", cursor: "pointer" }}
          className={`watchlist-button ${isWatchlisted ? 'added' : ''}`}
          onClick={()=>toggleWatchlist(movie.id)}
        >
          {isWatchlisted ? location.pathname === '/watchlist' ? 'Remove': '✓ Added' : '+ Add to Watchlist'}
        </button>
      </CardContent>
    </Card>
  );
}
