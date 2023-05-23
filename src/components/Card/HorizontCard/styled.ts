import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const CardWrapper = styled(Card)({
  borderRadius: "12",
  width: "472",
  height: "134",
  display: "flex",
  flex: "wrap",
  marginLeft: "24px",
  marginBottom: "24px",
  position: "relative",
});

export const Price = styled("span")({
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "22px",
  lineHeight: "25px",
  color: "#2C2C2C",
});

export const Title = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#2C2C2C",
  width: "200px",
  height: "16px",
  alignItems: "center",
  marginTop: "10px",
});

export const Adress = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#8F8F8F",
});

export const CreatedAt = styled(Typography)({
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "right",
  color: "#8F8F8F",
});

export const CardInfo = styled("div")({
  paddingLeft: "12px",
  paddingTop: "10px",
  paddingRight: "12px",
  paddingBottom: "19px",
  width: "292px",
});
