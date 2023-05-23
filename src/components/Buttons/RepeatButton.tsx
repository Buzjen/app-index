import { styled } from "@mui/material";

const Button = styled("button")({
  width: "164px",
  height: "32px",
  borderRadius: "45px",
  background: "#FFFFFF",
  border: "none",
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#00A0AB",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    background: "#F8F8F8",
  },
});

export const RepeatButton = () => {
  return <Button>Повторить попытку</Button>;
};
