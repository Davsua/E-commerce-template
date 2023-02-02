import React from "react";
import { Stack, Box } from "@mui/system";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      px={4}
    >
      <Link to="/">Home</Link>
      <SearchBar />
      <div>Lista de deseos</div>
    </Stack>
  );
};

export default Navbar;
