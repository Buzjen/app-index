import { styled } from "@mui/material";
import ContentLoader from "react-content-loader";

const Main = styled("div")({
  borderRadius: "12px",
  width: "224px",
  height: "364px",
  marginLeft: "24px",
  marginBottom: "24px",
  backgroundColor: "#F8F8F8;",
});

export const VerticalSkeleton = () => {
  return (
    <Main>
      <ContentLoader viewBox="0 0 224 364" height={364} width={224}>
        <rect x="0" y="0" rx="10" ry="10" width="224" height="260" />
        <rect x="10" y="270" rx="10" ry="10" width="166" height="25" />
        <rect x="186" y="270" rx="10" ry="10" width="25" height="25" />
        <rect x="10" y="310" rx="10" ry="10" width="200" height="16" />
        <rect x="10" y="335" rx="10" ry="10" width="200" height="14" />
      </ContentLoader>
    </Main>
  );
};
