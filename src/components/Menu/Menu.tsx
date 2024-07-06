import {
  AppBar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
} from "@mui/material";
import Logo from "../Logo/Logo";
import { menuItems } from "../../constants/supabase";
import { FC, forwardRef, JSXElementConstructor, ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Loclaization from "../Loclaization";
import { TransitionProps } from "@mui/material/transitions";

interface IMenuProps {
  open: boolean;
  onMenuClose: () => void;
}

const TransitionComponent: JSXElementConstructor<
  TransitionProps & { children: ReactElement }
> = forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Menu: FC<IMenuProps> = ({ open, onMenuClose }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onMenuClose}
      TransitionComponent={TransitionComponent}
    >
      <AppBar position="relative" color="default">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box></Box>
          <Logo />
          <IconButton
            edge="start"
            color="inherit"
            onClick={onMenuClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {menuItems.slice(0, -1).map((item, index) => (
          <ListItem key={index} onClick={onMenuClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <Loclaization />
        <Divider />
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onMenuClose}
          >
            Зарегистрироваться
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onMenuClose}
          >
            Войти
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default Menu;
