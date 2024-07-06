import { Box } from "@mui/material";
import LogoImg from "../../assets/Logo.png";

const Logo = ({ ...props }) => {
  return (
    <Box {...props}>
      <img src={LogoImg} alt={"logo"} loading="lazy" />
    </Box>
  );
};

export default Logo;
