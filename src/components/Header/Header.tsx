import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavBar from "../NavBar";
import Menu from "../Menu";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <NavBar onMenuOpen={handleMenuOpen} />
          {/* Small resolution menu */}
          <Menu open={open} onMenuClose={handleMenuClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
