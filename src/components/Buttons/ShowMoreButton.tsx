import { styled } from "@mui/material";
import React from "react";

const Button = styled("button")({
  width: "164px",
  height: "32px",
  borderRadius: "45px",
  background: "#FFFFFF",
  fontFamily: "'Ubuntu', sans-serif",
  border: "none",
  fontWeight: "500",
  color: "#00A0AB",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
});

interface ShowMoreButtonProps {
  onClick: () => void;
}

export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Покаазть еще</Button>;
};
