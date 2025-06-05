import React from "react";
import SearchInput from "./SearchInput";
import MenuItems from "./features/MenuItems";
import { Box } from "@mui/material";
export default function Navbar({ handleSearchChange, search }) {
  return (
    <nav
      className="navbar"
      style={{
        width: "100%",
      }}
    >
      <img
        className="logo"
        style={{ width: "5%", height: "auto" }}
        src="../logo.png"
        alt="logo"
      />
      <h1 className="app-title">Moviedux</h1>
      <Box display={"flex"} justifyContent={"center"}>
        <SearchInput handleSearchChange={handleSearchChange} search={search} />
        <MenuItems />
      </Box>
    </nav>
  );
}
