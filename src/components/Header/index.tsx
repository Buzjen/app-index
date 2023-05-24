import React from "react";
import { VerticalMenuButton } from "./VerticalMenuButton";
import { HorizontMenuButton } from "./HorizontMenuButton";
import { Box, styled } from "@mui/material";
import { ViewType } from "../Card/Card";

const Menu = styled("div")({
  display: "flex",
  justifyContent: "right",
});

interface HeaderProps {
  setViewType: (viewType: ViewType) => void;
  viewType: ViewType;
}

export const Header: React.FC<HeaderProps> = ({ setViewType, viewType }) => {
  return (
    <Menu>
      <Box
        width="78px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop="35px"
        marginRight="4vw"
      >
        <VerticalMenuButton
          onClick={() => setViewType(ViewType.Vertical)}
          value={viewType === ViewType.Vertical}
        />
        <HorizontMenuButton
          onClick={() => setViewType(ViewType.Horizont)}
          value={viewType === ViewType.Horizont}
        />
      </Box>
    </Menu>
  );
};
