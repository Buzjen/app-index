import { Header } from "../components/Header";
import { VerticalSkeleton } from "../components/Card/VerticalCard/VerticalSkeleton";
import { UpButton } from "../components/Buttons/UpButton";
import { Spinner } from "../components/Spinner";
import { RepeatButton } from "../components/Buttons/RepeatButton";
import { ShowMoreButton } from "../components/Buttons/ShowMoreButton";
import { HorizontSkeleton } from "../components/Card/HorizontCard/HorizontSkeleton";

import { Item, getItems } from "../api/getItems";

import { useCallback, useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Card, ViewType } from "../components/Card/Card";
import { useLikes } from "../hooks/useLikes";
import { NotFoundItems } from "../components/NotFoundItems";

export const images = [
  "https://i.artfile.me/wallpaper/16-01-2012/800x600/zhivotnye-sobaki-haski-sobaka-602820.jpg",
  "https://fotooboi-ekb.ru/files/image/fotooboi_vodopad-40133.sm.jpg",
  "https://img1.goodfon.ru/original/800x480/0/32/mount-moran-snake-river-grand-5930.jpg",
  "https://img2.goodfon.ru/original/800x480/f/4c/koshka-vzglyad-fon-1546.jpg",
];

export const Content = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [viewType, setViewType] = useLocalStorage("view", ViewType.Vertical);
  const [likes, setLike] = useLikes();

  const fetchData = useCallback(async (page: number) => {
    try {
      setIsLoading(true);
      const res = await getItems(page);
      setIsLoading(false);
      if (res.items.length === 0 && page === 1) {
        setIsEmpty(true);

        return;
      }
      setCurrentPage(page);
      setItems((prevItems) => [...prevItems, ...res.items]);
      setTotalPages(res.total);
    } catch (error) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  if (isEmpty) {
    return <NotFoundItems />;
  }

  return (
    <>
      <Header setViewType={setViewType} viewType={viewType} />
      <Box
        marginLeft="10vw"
        marginRight="10vw"
        display="flex"
        flexWrap="wrap"
        justifyContent="left"
        marginTop="26px"
      >
        {viewType === ViewType.Vertical &&
          isLoading &&
          Array(20).fill(<VerticalSkeleton />)}
        {viewType === ViewType.Horizont &&
          isLoading &&
          Array(20).fill(<HorizontSkeleton />)}
        {items.map((item: Item) => (
          <Card
            images={images}
            onLike={setLike(item.id)}
            like={likes[item.id]}
            type={viewType}
            id={item.id}
            key={item.id}
            about={item.about}
            createdAt={item.createdAt}
            seen={item.seen}
            price={item.price}
            title={item.title}
            address={item.address}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" marginBottom="10px">
        {isLoading && items.length !== 0 && <Spinner />}
        {isError && <RepeatButton />}
        {!isLoading && currentPage !== totalPages && (
          <ShowMoreButton
            onClick={() => {
              fetchData(currentPage + 1);
            }}
          />
        )}
      </Box>
      <UpButton visibleFrom={100} />
    </>
  );
};
