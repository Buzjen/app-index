import { Box, CardMedia, styled } from "@mui/material";
import { useState } from "react";

const Div = styled("div")<{ currentView: boolean }>(({ currentView }) => ({
  width: "56px",
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "0",
  marginLeft: currentView ? "84px" : "50px",
  marginBottom: currentView ? "113px" : "10px",
}));

const Dot = styled("div")<{ isActive: boolean }>(({ isActive }) => ({
  height: "8px",
  width: "8px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "0.2s",
  backgroundColor: isActive ? "#00A0AB" : "#A4A4A4",
}));

interface SwiperProps {
  images: string[];
  currentType: boolean;
}

export const Swiper: React.FC<SwiperProps> = ({ images, currentType }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Box>
      <Div currentView={currentType}>
        {images.map((image, idx) => (
          <Dot
            key={image}
            isActive={selected === idx}
            onClick={() => setSelected(idx)}
          />
        ))}
      </Div>
      <CardMedia
        component="img"
        height="260"
        image={images[selected]}
        alt="cover"
      />
    </Box>
  );
};
