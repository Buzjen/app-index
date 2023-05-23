import { styled } from "@mui/material";
import React from "react";

const Svg = styled("svg")<{ isActive: boolean }>(({ isActive }) => ({
  cursor: "pointer",
  transition: "0.2s",
  "& rect": {
    stroke: isActive ? "#00A0AB" : "#A4A4A4",
  },
}));

interface HorizontMenuButtonProps {
  value: boolean;
  onClick: () => void;
}

export const HorizontMenuButton: React.FC<HorizontMenuButtonProps> = ({
  value,
  onClick,
}) => {
  return (
    <Svg
      isActive={value}
      onClick={onClick}
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.1"
        y="18.1"
        width="28.8"
        height="11.8"
        rx="1.9"
        stroke="#C7C7C7"
        strokeWidth="2.2"
      />
      <rect
        x="1.1"
        y="1.1"
        width="28.8"
        height="11.8"
        rx="1.9"
        stroke="#C7C7C7"
        strokeWidth="2.2"
      />
    </Svg>
  );
};
