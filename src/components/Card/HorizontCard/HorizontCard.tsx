import { Box } from "@mui/material";
import { Like } from "../../Like";
import { Link } from "react-router-dom";
import { Seen } from "../../Seen";
import { CardProps } from "../Card";
import { Swiper } from "../../Swiper";
import dayjs from "dayjs";
import {
  CardWrapper,
  CardInfo,
  Price,
  Title,
  Adress,
  CreatedAt,
} from "./styled";

export const HorizontCard: React.FC<Omit<CardProps, "type">> = ({
  about,
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
  const currentType = false; // Определяет положение Swiper относительно карточки
  return (
    <CardWrapper>
      <Box width="154px" alignItems="center" height="134px">
        {seen && (
          <Box position="absolute" marginLeft="31px" marginTop="11px">
            <Seen />
          </Box>
        )}
        <Box>
          <Swiper images={images} currentType={currentType} />
        </Box>
      </Box>
      <CardInfo>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop=""
        >
          <Price>{Math.ceil(price).toLocaleString("Ru-ru")} ₽</Price>
          <Like value={like} onChange={onLike} />
        </Box>
        <Link to={`/${id}`}>
          <Title>{title}</Title>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="40px"
          >
            <Adress>{address}</Adress>
            <CreatedAt>
              {dayjs(createdAt.replace(" ", "")).format("DD.MM.YYYY HH:mm")}
            </CreatedAt>
          </Box>
        </Link>
      </CardInfo>
    </CardWrapper>
  );
};
