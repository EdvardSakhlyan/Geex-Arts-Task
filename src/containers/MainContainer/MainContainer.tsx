import { Box } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import FilterPanel from "../../components/FilterPanel";
import EventCard from "../../components/EventCard";
import SubscriptionList from "../../components/SubscriptionList";
import NewsContainer from "../NewsContainer";

const MainContainer = () => {
  return (
    <>
      <CustomSlider />
      <Box display="flex" pt={4} pb={4} justifyContent="space-between" gap={4}>
        <Box flexGrow={5} gap={4} display="flex" flexDirection="column">
          <FilterPanel
            sx={{
              display: {
                md: "none",
                sm: "block",
                xs: "blcok",
              },
            }}
          />
          <NewsContainer />

          <EventCard
            sx={{
              display: {
                md: "none",
                sm: "block",
                xs: "block",
              },
            }}
          />

          <SubscriptionList
            sx={{
              display: {
                md: "none",
                sm: "block",
                xs: "block",
              },
            }}
          />
        </Box>
        <Box flexGrow={2} display="flex" flexDirection="column" gap={4}>
          <FilterPanel
            sx={{
              display: {
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
          <EventCard
            sx={{
              display: {
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
          <SubscriptionList
            sx={{
              display: {
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MainContainer;
