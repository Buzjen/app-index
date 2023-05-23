import { styled } from "@mui/material";

const Block = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
});

const Head = styled("h3")({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "500",
  fontSize: "16.8px",
  lineHeight: "19px",
  textAlign: "center",
  color: "#00A0AB",
});

const Description = styled("span")({
  fontFamily: "'Ubuntu', sans-serif",
  fontWeight: "400",
  fontSize: "14.4px",
  lineHeight: "17px",
  textAlign: "center",
  color: "#8F8F8F",
});

export const NotFoundItems = () => {
  return (
    <Block>
      <Head>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</Head>
      <Description>
        Простите, по вашему запросу товаров сейчас нет. Задайте запрос
        по-другому или измените характеристики
      </Description>
    </Block>
  );
};
