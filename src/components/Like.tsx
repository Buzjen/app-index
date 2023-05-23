import { styled } from "@mui/material";

const Path = styled("path")<{ isActive: boolean }>(({ isActive }) => ({
  fill: isActive ? "#00A0AB" : "#C7C7C7",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    fill: isActive ? "#00A0AB" : "#A4A4A4",
  },
}));

interface LikeProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Like: React.FC<LikeProps> = ({ value, onChange }) => {
  return (
    <svg
      onClick={() => onChange(!value)}
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        isActive={value}
        d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z"
      />
    </svg>
  );
};
