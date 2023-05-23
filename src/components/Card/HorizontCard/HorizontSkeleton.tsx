import { styled } from "@mui/material";
import ContentLoader from "react-content-loader";

const Main = styled("div")({
  borderRadius: "12px",
  width: "472px",
  height: "134px",
  marginLeft: "24px",
  marginBottom: "24px",
  backgroundColor: "#F8F8F8;",
});

export const HorizontSkeleton = () => {
  return (
    <Main>
      <ContentLoader viewBox="0 0 472 134" height={134} width={472}>
        <rect x="0" y="0" rx="10" ry="10" width="156" height="134" />
        <rect x="166" y="10" rx="10" ry="10" width="256" height="25" />
        <rect x="432" y="10" rx="10" ry="10" width="25" height="25" />
        <rect x="166" y="45" rx="10" ry="10" width="292" height="16" />
        <rect x="166" y="70" rx="10" ry="10" width="116" height="16" />
        <rect x="166" y="100" rx="10" ry="10" width="177" height="14" />
        <rect x="355" y="100" rx="10" ry="10" width="107" height="14" />
      </ContentLoader>
    </Main>
  );
};
