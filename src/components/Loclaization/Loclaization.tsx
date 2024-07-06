import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import EN from "../../assets/EN.png";
import RU from "../../assets/RU.png";
import FR from "../../assets/FR.png";

const Loclaization = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openList, setOpenList] = useState<boolean>(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCliclList = () => {
    setOpenList(!openList);
  };

  const SmallSX = {
    display: {
      md: "none",
      sm: "none",
      xs: "none",
    },
  };

  const StandartSX = {
    display: {
      md: "block",
      sm: "none",
      xs: "none",
    },
    position: "relative",
  };

  return (
    <>
      {/* Standart resolution */}
      <Box sx={StandartSX}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={RU} alt="RU" style={{ marginRight: "1rem" }} />
          RU
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <img src={RU} alt="RU" style={{ marginRight: "1rem" }} />
            RU
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img src={EN} alt="EN" style={{ marginRight: "1rem" }} />
            EN
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img src={FR} alt="FR" style={{ marginRight: "1rem" }} />
            FR
          </MenuItem>
        </Menu>
      </Box>
      {/* Small resolution */}
      <ListItemButton onClick={handleCliclList} sx={SmallSX}>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={SmallSX}>
          <ListItemButton>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default Loclaization;
