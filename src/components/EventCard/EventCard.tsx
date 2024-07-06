import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  SxProps,
} from "@mui/material";
import Loader from "../Loader";
import IEvent from "../../types/event";
import getEvent from "../../supabase/services/getEvent";

interface EventCardProps {
  sx: SxProps;
}

const EventCard: React.FC<EventCardProps> = ({ sx }) => {
  const [event, setEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    void getEvent().then(setEvent).catch(console.error);
  }, []);

  if (event) {
    const { city, image, sport, stage, title, year } = event;
    return (
      <Card sx={{ borderRadius: 4, padding: 2, ...sx }}>
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Chip label={sport} sx={{ marginRight: 1 }} />
            <Typography variant="body2" color="textSecondary">
              {city}
            </Typography>
            <Chip label={year} sx={{ marginLeft: "auto" }} />
          </Box>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {stage}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return <Loader />;
  }
};

export default EventCard;
