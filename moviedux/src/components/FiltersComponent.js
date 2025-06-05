import React from "react";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";
export default function FiltersComponent({
  handleGenreChange,
  handleRatingChange,
}) {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"end"}
        alignItems={"end"}
        flexDirection={"row"}
        gap={5}
        sx={{ marginLeft: "20px", marginBottom: "20px" }}
      >
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="genre-select"
            sx={{ color: "#fff", textDecorationColor: "#fff" }}
          >
            Genre
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "genre",
              id: "genre-select",
            }}
            onChange={handleGenreChange}
            color="secondary"
            sx={{ textDecorationColor: "#fff" }}
          >
            <option value="all-genres">All Genres</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="sports">Sports</option>
          </NativeSelect>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="rating-select"
            size="medium"
            sx={{ color: "#fff", textDecorationColor: "#fff" }}
          >
            Rating
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "rating",
              id: "rating-select",
            }}
            onChange={handleRatingChange}
            color="secondary"
            sx={{ textDecorationColor: "#fff" }}
          >
            <option value="all-ratings">All Ratings</option>
            <option value="very-good">Very good</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="bad">Bad</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </Box>
  );
}
