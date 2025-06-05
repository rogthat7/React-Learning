import { Input, Box } from "@mui/material";
import React from "react";
export default function SearchInput({ handleSearchChange, search }) {
  return (
    <Input
      type="text"
      value={search}
      onChange={handleSearchChange}
      placeholder="Its time for popcorn, find your next movie here!"
      style={{
        backgroundColor: "white",
        borderRadius: "24px",
        padding: "10px ",
        width: "100%",
        maxWidth: "600px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "16px",
      }}
      endAdornment={
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a7 7 0 015.657 11.314l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
            />
          </svg>
        </Box>
      }
    />
  );
}
