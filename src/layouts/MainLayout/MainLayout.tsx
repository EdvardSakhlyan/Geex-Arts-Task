import { FC, ReactNode } from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

interface IMainlayout {
  children: ReactNode;
}

const Mainlayout: FC<IMainlayout> = ({ children }) => {
  return (
    <Box width="100%" sx={{ backgroundColor: "#EEF0F7" }}>
      <Header />
      <Box pl={8} pr={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Mainlayout;
