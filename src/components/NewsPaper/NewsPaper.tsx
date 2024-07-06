import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import { Visibility, Comment } from "@mui/icons-material";
import INew from "../../types/news";

interface TicketProps extends INew {
  commentsCount: number;
  initialCommentsToShow?: number;
}

const NewsPaper: React.FC<TicketProps> = ({
  date,
  title,
  description,
  images,
  videoUrl,
  views,
  commentsCount,
  comments,
  initialCommentsToShow = 4,
}) => {
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [expandedComments, setExpandedComments] = useState(false);

  const handleDescriptionToggle = () => {
    setExpandedDescription(!expandedDescription);
  };

  const handleCommentsToggle = () => {
    setExpandedComments(!expandedComments);
  };

  const displayedComments = expandedComments
    ? comments
    : comments?.slice(0, initialCommentsToShow) ?? [];

  return (
    <Card sx={{ borderRadius: "20px" }}>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">
          Спортивная Борьба • {date}
        </Typography>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {expandedDescription
            ? description
            : `${description.substring(0, 50)}...`}
          <Link
            onClick={handleDescriptionToggle}
            sx={{ cursor: "pointer", ml: 1 }}
          >
            {expandedDescription ? "Свернуть" : "Читать больше"}
          </Link>
        </Typography>
        {videoUrl ? (
          <Box sx={{ position: "relative", pb: "56.25%", height: 0 }}>
            <CardMedia
              component="iframe"
              src={videoUrl}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ) : (
          <Grid container spacing={1}>
            {images?.map((image, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`image-${index}`}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Visibility sx={{ mr: 1 }} />
            <Typography variant="body2">{views}K</Typography>
            <Comment sx={{ ml: 2, mr: 1 }} />
            <Typography variant="body2">{commentsCount}</Typography>
          </Box>
        </Box>
        {displayedComments?.map((comment, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mt: 2 }}
          >
            <Avatar src={comment.avatar} alt={comment.name} sx={{ mr: 2 }} />
            <Box>
              <Typography
                variant="body2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {comment.name}
              </Typography>
              <Typography variant="body2" component="div">
                {comment.text}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {comment.time}
              </Typography>
            </Box>
          </Box>
        ))}
        {comments && comments.length > initialCommentsToShow && (
          <Link
            onClick={handleCommentsToggle}
            sx={{ display: "block", mt: 2, cursor: "pointer" }}
          >
            {expandedComments
              ? "Свернуть комментарии"
              : "Смотреть все комментарии"}
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsPaper;
