import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Slide {
  img: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    img: "path_to_image1.jpg",
    title: "Матвеев vs Романов",
    description: "Финальный матч - вольная борьба",
  },
  {
    img: "path_to_image2.jpg",
    title: "Другие новости",
    description: "Новость",
  },
  {
    img: "path_to_image3.jpg",
    title: "Другие новости",
    description: "Новость",
  },
  // Add more slides as needed
];

const CustomSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        margin: "auto",
        mt: 5,
        display: {
          md: "block",
          sm: "none",
          xs: "none",
        },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001f3f",
              position: "relative",
              width: "100%",
              color: "#fff",
              height: "400px",
              borderRadius: "20px",
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%", position: "absolute", zIndex: 0 }}
              src={slide.img}
              alt={slide.title}
            />
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "33%",
                left: "33%",
              }}
            >
              <Typography variant="h5" component="div">
                {slide.title}
              </Typography>
              <Typography variant="body2" component="div">
                {slide.description}
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 2 }}>
                Смотреть трансляцию
              </Button>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomSlider;
