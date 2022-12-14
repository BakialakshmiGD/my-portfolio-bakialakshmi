import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

import NavbarLinks from "./NavbarLinks";
import NavbarMenuButton from "./NavbarMenuButton";

const Navbar = ({ openDrawerFunc }) => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#db4ba5" }} position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'cursive',
                color: "#f0ebef",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              component="a"
              href="/"
            >
              {"<"}Portfolio{"/>"}
            </Typography>
          </Box>

          <NavbarLinks />

          <NavbarMenuButton openDrawerFunc={openDrawerFunc} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
