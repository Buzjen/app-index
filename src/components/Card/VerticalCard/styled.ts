import { Card, Typography, styled } from "@mui/material";

export const CardWrapper = styled(Card)({
  borderRadius: "12px",
  width: "224px",
  height: "364px",
  marginLeft: "24px",
  marginBottom: "24px",
  position: "relative",
});

export const Price = styled("span")({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "700",
  fontSize: "22px",
  lineHeight: "25px",
  color: "#2C2C2C",
});

export const Title = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#2C2C2C",
  width: "200px",
  height: "16px",
});

export const Adress = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#8F8F8F",
});

export const CreatedAt = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "right",
  color: "#8F8F8F",
});
