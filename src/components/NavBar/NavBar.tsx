import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, styled } from "@mui/material";
import { menuItems } from "../../constants/supabase";
import Logo from "../Logo/Logo";
import Loclaization from "../Loclaization";

interface INavBarProps {
  onMenuOpen: () => void;
}

const CustomBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    flexDirection: "row",
    "& .MuiBottomNavigationAction-label": {
      marginLeft: theme.spacing(1),
      color: "gray",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
      color: "gray",
    },
    "&.Mui-selected": {
      "& .MuiBottomNavigationAction-label": {
        color: "black",
      },
      "& .MuiSvgIcon-root": {
        color: "black",
      },
    },
  })
);

const CustomBottomNavigation = styled(BottomNavigation)(() => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
}));

const NavBar: React.FC<INavBarProps> = ({ onMenuOpen }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Logo mr={2} />

      <CustomBottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        sx={{ display: { sm: "none", md: "block", xs: "none" } }}
      >
        {menuItems.map((item) => {
          return (
            <CustomBottomNavigationAction
              key={item.text}
              color="black"
              label={item.text}
              icon={item.icon}
            />
          );
        })}
      </CustomBottomNavigation>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuOpen}
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Loclaization />
    </Box>
  );
};

export default NavBar;
