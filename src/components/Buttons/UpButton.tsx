import { styled } from "@mui/material";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Button = styled("button")({
  width: "106px",
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "30px",
  border: "none",
  background: "#FFFFFF",
  cursor: "pointer",
  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
  paddingLeft: "19px",
  paddingRight: "19px",
  fontFamily: "'Ubuntu', sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#8F8F8F",
  position: "fixed",
  bottom: "63px",
  right: "25px",
});

interface UpButtonProps {
  visibleFrom: number;
}

export const UpButton: React.FC<UpButtonProps> = ({ visibleFrom }) => {
  const position = useScrollPosition();

  const onClick = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  if (visibleFrom > position) {
    return <></>;
  }

  return (
    <Button onClick={onClick}>
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 8.25L8 1.75L1.5 8.25"
          stroke="#8F8F8F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span>Вверх</span>
    </Button>
  );
};
