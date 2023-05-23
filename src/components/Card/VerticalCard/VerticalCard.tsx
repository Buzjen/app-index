import React from "react";
import { Link } from "react-router-dom";

import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import { Like } from "../../Like";
import { Seen } from "../../Seen";
import { Swiper } from "../../Swiper";
import { CardProps } from "../Card";
import { Adress, CardWrapper, CreatedAt, Price, Title } from "./styled";
import dayjs from "dayjs";

export const VerticalCard: React.FC<Omit<CardProps, "type">> = ({
  createdAt,
  id,
  seen,
  price,
  title,
  address,
  onLike,
  like,
  images,
}) => {
  const currentType = true; // Определяет положение Swiper относительно карточки
  return (
    <CardWrapper>
      {seen && (
        <Box position="absolute" marginLeft="65px" marginTop="11px">
          <Seen />
        </Box>
      )}
      <Box>
        <Swiper images={images} currentType={currentType} />
      </Box>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="-6px"
        >
          <Price>{Math.ceil(price).toLocaleString("ru-RU")} ₽</Price>
          <Like value={like} onChange={onLike} />
        </Box>
        <Link to={`/${id}`}>
          <Box alignItems="center" marginTop="10px">
            <Title>{title}</Title>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Adress>{address}</Adress>
            <CreatedAt>
              {dayjs(createdAt.replace(" ", "")).format("DD.MM.YYYY HH:mm")}
            </CreatedAt>
          </Box>
        </Link>
      </CardContent>
    </CardWrapper>
  );
};
