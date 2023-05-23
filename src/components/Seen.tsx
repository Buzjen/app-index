import { styled } from "@mui/material";

const BLock = styled("div")({
  width: "94px",
  height: "24px",
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "8px",
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Seen = () => {
  return <BLock>Просмотренно</BLock>;
};
